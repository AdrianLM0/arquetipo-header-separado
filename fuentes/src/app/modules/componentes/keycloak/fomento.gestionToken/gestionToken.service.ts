import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { KeycloakService } from "keycloak-angular";
import { Observable } from "rxjs";
import { forkJoin } from "rxjs";

import {
  IPermisoContrastado,
  IPermisoGuardado,
  IPermisoToken,
  IRecurso,
} from "./InterfacesGestionToken";


@Injectable({
  providedIn: "root",
})
export class GestionTokenService {
  private readonly TOKEN_CACHE_KEY = "cached_token";
  private cachedToken: string = null;

  constructor(
    private keycloakService: KeycloakService,
    private http: HttpClient
  ) {}

  // Metodo para ver toda la informacion del Token
  async showTokenInfo() {
    try {
      const loggedIn = await this.keycloakService.isLoggedIn();
      if (loggedIn) {
        // Obtiene el token
        const token = await this.getToken();
        console.log("Token:", token);

        // Decodifica el payload del token
        const decodedPayload = this.decodeToken(token);
        console.log("Payload Decodificado:", decodedPayload);

        // Array de Privilegios
        const privilegiosFomentoCodes =
          this.extractPrivilegiosFomentoCodes(decodedPayload);
        console.log(
          "Array Códigos de privilegios-fomento:",
          privilegiosFomentoCodes
        );

        // Obtiene el nombre de usuario, que es lo mismo que ldapUser
        const ldapUser = this.keycloakService.getUsername();
        console.log("Nombre de Usuario (ldapUser):", ldapUser);

        // Llamada a obtenerAuthoritiesGuardados
        const authorities = await this.obtenerAuthoritiesGuardados(ldapUser);
        console.log("Array de (Permisos) Authorities:", authorities);

        // Carga y muestra el perfil de usuario
        const userProfile = await this.keycloakService.loadUserProfile();
        console.log("Perfil de Usuario:", userProfile);

        // Obtiene y muestra los roles de usuario
        const privilegios = this.keycloakService.getUserRoles(true); // true para obtener todos los roles, false para roles del cliente
        console.log("Privilegios de Usuario:", privilegios);

        // Verifica si el token está próximo a expirar
        const isTokenExpired = this.keycloakService.isTokenExpired();
        console.log("¿Token Expirado?", isTokenExpired);

        // Actualiza el token si es necesario
        const tokenUpdated = await this.keycloakService.updateToken(30); // MinValidity en segundos
        console.log("Token Actualizado:", tokenUpdated ? "Sí" : "No");
      } else {
        console.log("Usuario no logueado.");
      }
    } catch (error) {
      console.error("Error al mostrar la información del token:", error);
    }
  }

  // Método para decodificar el payload de un JWT
  decodeToken(token: string): any {
    try {
      const payload = token.split(".")[1]; // Obtiene el payload del token
      const decodedJson = atob(payload); // Decodifica de Base64 a string
      const decoded = JSON.parse(decodedJson); // Parsea el string a JSON
      return decoded;
    } catch (error) {
      console.error("Error decodificando el token:", error);
      return null;
    }
  }

  // Método para extraer los códigos de los privilegios-fomento desde el payload decodificado
  extractPrivilegiosFomentoCodes(decodedPayload: any): string[] {
    // Verifica si el payload y la propiedad privilegios-fomento existen
    if (decodedPayload && decodedPayload["privilegios-fomento"]) {
      // Mapea cada elemento de privilegios-fomento para obtener solo el código
      return decodedPayload["privilegios-fomento"].map((role: any) => role);
    } else {
      // Retorna un array vacío si no se encuentran privilegios-fomento
      return [];
    }
  }

  getAuthorities(
    baseUrl: string,
    ldapUser: string,
    customPath?: string
  ): Observable<any[]> {
    const basePath = customPath
      ? customPath
      : "/plda/api/v1/permisos/summarize/ldap";

    const url = `${baseUrl}${basePath}/${ldapUser}`;
    return this.http.get<any[]>(url);
  }

  getMetadatos(
    qAplicacion: string,
    baseUrl: string,
    customPath?: string
  ): Observable<any> {
    // Define la base de la ruta. Si se proporciona customPath, lo usa; de lo contrario, usa la ruta por defecto.
    const basePath = customPath
      ? customPath
      : "/plda/api/v1/acciones-recursos/subsistema";

    // Construye la URL completa añadiendo qAplicacion al final de basePath
    const url = `${baseUrl}${basePath}/${qAplicacion}`;

    // Obtiene el token de KeycloakService
    const token = this.getToken();

    // Define las cabeceras con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    // Realiza la solicitud HTTP GET con las cabeceras
    return this.http.get(url, { headers });
  }

  // Metodo que se llama solo una vez despues de hacer login
  obteneryGuardarMetadatos(
    aplicativo: string,
    baseUrl: string,
    customPathMetadatos?: string,
    customPathAuthorities?: string
  ): void {
    // Obtiene el nombre de usuario (ldapUser) del token
    const ldapUser = this.keycloakService.getUsername();

    // Realiza las solicitudes HTTP GET en paralelo, pasando customPath si está disponible
    forkJoin({
      metadatos: this.getMetadatos(aplicativo, baseUrl, customPathMetadatos),
      authorities: this.getAuthorities(
        baseUrl,
        ldapUser,
        customPathAuthorities
      ),
    }).subscribe({
      next: (resultados) => {
        const metadatos = resultados.metadatos;
        const authorities = resultados.authorities;

        // Convertir los metadatos y authorities a una cadena JSON
        const metadatosString = JSON.stringify(metadatos);
        const authoritiesString = JSON.stringify(authorities);

        // TODO: encriptado comentado para fixear problema
        // Encriptar los metadatos
        // const metadatosEncriptados = CryptoJS.AES.encrypt(metadatosString, aplicativo).toString();

        // Guarda los metadatos encriptados en el localStorage
        localStorage.setItem(`metadatos_${aplicativo}`, metadatosString);
        localStorage.setItem(`authorities_${ldapUser}`, authoritiesString);
        localStorage.setItem(`ldap_actual`, ldapUser);
      },
      error: (error) => {
        console.error("Error al obtener metadatos o authorities:", error);
        // Aquí puedes manejar los errores, por ejemplo, mostrando un mensaje al usuario
      },
    });
  }

  async obtenerPermisosDeRecursoParaPrivilegio(
    token: string,
    codigoRecurso: string,
    aplicativo: string
  ): Promise<IPermisoContrastado[]> {
    try {
      const decodedPayload = this.decodeToken(token);

      if (!decodedPayload) {
        throw new Error("No se pudo decodificar el token");
      }

      const permisosGuardados = await this.obtenerPermisosGuardados(aplicativo);

      // Obtiene el nombre de usuario, que es lo mismo que ldapUser
      const ldapUser = localStorage.getItem(`ldap_actual`);

      // Llamada a obtenerAuthoritiesGuardados
      const authorities = await this.obtenerAuthoritiesGuardados(ldapUser);

      // Mapear las authorities obtenidas a permisosToken
      const permisosToken = this.mapearAuthoritiesAPermisosToken(authorities);
      const permisosParaRecurso = permisosGuardados.filter(
        (permiso) => permiso.recurso.codigo === codigoRecurso
      );

      // Usar el privilegio para contrastar los permisos
      const permisosContrastados = this.contrastarPermisosToken(
        permisosToken,
        permisosParaRecurso
      );

      return permisosContrastados;
    } catch (error) {
      console.error(
        "Error al obtener permisos de recurso para privilegio:",
        error
      );
      return [];
    }
  }

  // Método principal para obtener y contrastar todos los permisos desde un token
  async obtenerPermisosPrivilegioDesdeToken(
    token: string,
    aplicativo: string
  ): Promise<IPermisoContrastado[]> {
    const decodedPayload = this.decodeToken(token);

    if (!decodedPayload) {
      throw new Error("No se pudo decodificar el token");
    }

    // Obtiene el nombre de usuario, que es lo mismo que ldapUser
    const ldapUser = localStorage.getItem(`ldap_actual`);

    // Llamada a obtenerAuthoritiesGuardados
    const authorities = await this.obtenerAuthoritiesGuardados(ldapUser);
    const permisosGuardados = await this.obtenerPermisosGuardados(aplicativo);

    // Adaptamos la lógica para trabajar con Privilegios
    const permisosToken: IPermisoToken[] =
      this.mapearAuthoritiesAPermisosToken(authorities);

    // Contrasta permisosToken con permisosGuardados para obtener los permisos finales por Privilegio
    const permisosContrastados = this.contrastarPermisosToken(
      permisosToken,
      permisosGuardados
    );

    return permisosContrastados;
  }

  // Función para obtener los authorities guardados del localStorage
  async obtenerAuthoritiesGuardados(ldapUser: string): Promise<any[]> {
    // Recupera los authorities encriptados del localStorage
    const authoritiesEncriptados = localStorage.getItem(
      `authorities_${ldapUser}`
    );
    if (authoritiesEncriptados) {
      try {
        //TODO: encriptado comentado para fixear problema
        // Desencripta los authorities usando 'ldapUser' como clave
        //const bytes = CryptoJS.AES.decrypt(authoritiesEncriptados, ldapUser);
        //const authoritiesDescifrados = bytes.toString(CryptoJS.enc.Utf8);

        // Devuelve los authorities desencriptados y parseados a objeto
        return JSON.parse(authoritiesEncriptados);
      } catch (error) {
        console.error("Error al desencriptar authorities:", error);
        // Maneja el error adecuadamente (p.ej., mostrando un mensaje al usuario)
        return null;
      }
    }
    // Devuelve null si no se encontraron authorities encriptados en el localStorage
    console.warn(
      `No se encontraron authorities encriptados para el usuario LDAP '${ldapUser}' en el almacenamiento local.`
    );
    return null; // No se encontraron authorities encriptados
  }

  // Función para obtener los permisos guardados del localStorage
  async obtenerPermisosGuardados(
    aplicativo: string
  ): Promise<IPermisoGuardado[]> {
    // Recupera los metadatos encriptados del localStorage
    const metadatosEncriptados = localStorage.getItem(
      `metadatos_${aplicativo}`
    );
    if (metadatosEncriptados) {
      try {
        //TODO: encriptado comentado para fixear problema
        // Desencripta los metadatos usando 'aplicativo' como clave
        //const bytes = CryptoJS.AES.decrypt(metadatosEncriptados, aplicativo);
        // const metadatosDescifrados = bytes.toString(CryptoJS.enc.Utf8);

        // Devuelve los metadatos desencriptados y parseados a objeto
        return JSON.parse(metadatosEncriptados);
      } catch (error) {
        console.error("Error al desencriptar metadatos:", error);
        // Maneja el error adecuadamente (p.ej., mostrando un mensaje al usuario)
        return null;
      }
    }
    // Devuelve null si no se encontraron metadatos encriptados en el localStorage
    console.warn(
      `No se encontraron metadatos encriptados para la aplicación '${aplicativo}' en el almacenamiento local.`
    );
    return null; // No se encontraron metadatos encriptados
  }

  mapearAuthoritiesAPermisosToken(authorities: any[]): IPermisoToken[] {
    const permisosToken: IPermisoToken[] = [];

    authorities.forEach((authority) => {
      const recurso: IRecurso = {
        codigo: authority.recurso,
        subsistema: authority.aplicacion,
      };

      const permisoToken: IPermisoToken = {
        recurso,
        acciones: authority.acciones,
        privilegio: authority.privilegio, // Usamos el nuevo campo 'privilegio' de cada authority
      };

      permisosToken.push(permisoToken);
    });

    return permisosToken;
  }

  contrastarPermisosToken(
    permisosToken: IPermisoToken[],
    permisosGuardados: IPermisoGuardado[]
  ): IPermisoContrastado[] {
    const permisosContrastados: IPermisoContrastado[] = [];

    // Iterar sobre cada permisoToken
    permisosToken.forEach((permisoToken) => {
      // Filtrar permisosGuardados únicamente por el código de recurso
      const permisosGuardadosFiltrados = permisosGuardados.filter(
        (pg) => pg.recurso.codigo === permisoToken.recurso.codigo
      );

      // Para cada permisoGuardado que coincida con el recurso del permisoToken
      permisosGuardadosFiltrados.forEach((permisoGuardado) => {
        // Descomponer el bitmap de acciones del permisoToken
        const acciones = this.descomponerPermiso(permisoToken.acciones);

        // Determinar las acciones permitidas basadas en el bitmap del permisoGuardado y del permisoToken
        const permisosPrivilegio: string[] = acciones
          .map((accion, index) =>
            accion && permisoGuardado.valor & (1 << index)
              ? permisoGuardado.codigo
              : null
          )
          .filter((codigo) => codigo !== null);

        // Si hay acciones permitidas, agregarlas a permisosContrastados
        if (permisosPrivilegio.length > 0) {
          permisosContrastados.push({
            recurso: permisoGuardado.recurso,
            permisosPrivilegio,
            privilegio: permisoToken.privilegio, // El privilegio viene del permisoToken, no del permisoGuardado
          });
        }
      });
    });

    return permisosContrastados;
  }

  descomponerPermiso(permiso: number): boolean[] {
    return Array.from({ length: 8 }, (_, index) => !!(permiso & (1 << index)));
  }

  private filtrarPermisosConAcceso(
    permisos: IPermisoContrastado[]
  ): IPermisoContrastado[] {
    return permisos.filter((permiso) =>
      permiso.permisosPrivilegio.includes("ACCESS")
    );
  }

  private filtrarPermisosComponentes(
    permisos: IPermisoContrastado[]
  ): IPermisoContrastado[] {
    return permisos.filter(
      (permiso) => !permiso.permisosPrivilegio.includes("ACCESS")
    );
  }

  async filtrarPermisosConAccesoDesdeToken(
    token: string,
    aplicativo: string
  ): Promise<IPermisoContrastado[]> {
    const permisos = await this.obtenerPermisosPrivilegioDesdeToken(
      token,
      aplicativo
    );
    return this.filtrarPermisosConAcceso(permisos);
  }

  async filtrarPermisosComponentesDesdeToken(
    token: string,
    aplicativo: string
  ): Promise<IPermisoContrastado[]> {
    const permisos = await this.obtenerPermisosPrivilegioDesdeToken(
      token,
      aplicativo
    );
    return this.filtrarPermisosComponentes(permisos);
  }

  // **GESTION TOKEN EN CACHÉ**

  private cacheToken(token: string): void {
    if (token) {
      localStorage.setItem(this.TOKEN_CACHE_KEY, token);
    } else {
      console.warn("Attempting to cache an invalid token");
    }
  }

  clearCachedToken(): void {
    localStorage.removeItem(this.TOKEN_CACHE_KEY);
  }

  public async getToken(): Promise<string> {
    // Intenta recuperar el token desde la caché.
    this.cachedToken = await this.getTokenFromCache();

    // Comprueba si el token recuperado es válido.
    if (!this.cachedToken || this.cachedToken === "") {
      // Si el token no es válido o está vacío, obtén un nuevo token directamente desde Keycloak.
      this.cachedToken = await this.keycloakService.getToken();
    }

    // Comprueba si el token está expirado.
    if (await this.isTokenExpired()) {
      // Si el token está expirado, refresca el token.
      this.cachedToken = await this.refreshToken();
    }

    // Comprueba si el nuevo token obtenido es válido antes de cachearlo.
    if (this.cachedToken && this.cachedToken !== "") {
      // Guarda el nuevo token en la caché.
      this.cacheToken(this.cachedToken);
    } else {
      // Maneja el caso en que no se pudo obtener un token válido.
      throw new Error("Failed to obtain a valid token");
    }

    // Devuelve el token que ahora debería ser válido y estar actualizado.
    return this.cachedToken;
  }

  private async getTokenFromCache(): Promise<string> {
    if (!this.cachedToken || this.isTokenExpired()) {
      this.cachedToken = localStorage.getItem(this.TOKEN_CACHE_KEY);
    }
    return this.cachedToken;
  }

  private isTokenExpired(): boolean {
    return this.keycloakService.isTokenExpired(30);
  }

  private async refreshToken(): Promise<string> {
    try {
      // Llama a updateToken. Si necesita actualización, la realizará internamente.
      await this.keycloakService.updateToken(30); // MinValidity en segundos

      // Obtén el token actualizado o el actual si aún es válido.
      return await this.keycloakService.getToken();
    } catch (error) {
      console.error("Error al refrescar el token:", error);
      throw error; // Propagar el error para manejo externo
    }
  }

  //Método que deberá usar el websocket
  async forceUpdateTokenAndMetadatos(
    aplicativo: string,
    baseUrl: string,
    customPathMetadatos?: string,
    customPathAuthorities?: string
  ) {
    try {
      // TODO: Invalidar el token actual (no se puede invalidar?)
      //this.keycloakService.clearToken();

      // Obtener el token renovado
      const nuevoToken = await this.keycloakService.getToken();

      this.cacheToken(nuevoToken);

      this.obteneryGuardarMetadatos(
        aplicativo,
        baseUrl,
        customPathMetadatos,
        customPathAuthorities
      );
    } catch (error) {
      console.error("Error al refrescar el token:", error);
      throw new Error(`Error al refrescar el token: ${error.message}`);
    }
  }

  getUserProfile() {
    return this.keycloakService.loadUserProfile();
  }

  clearLocalData() {
    const aplicativo = localStorage.getItem(`qAplicacion_actual`);
    const ldapUser = localStorage.getItem(`ldap_actual`);
    localStorage.removeItem(`metadatos_${aplicativo}`);
    localStorage.removeItem(`authorities_${ldapUser}`);
    localStorage.removeItem(`privilegio_actual`);
    localStorage.removeItem(`qAplicacion_actual`);
    localStorage.removeItem(`ldap_actual`);
  }

  logout(redirectUri?: string) {
    this.clearLocalData();
    this.clearCachedToken();
    this.keycloakService.logout(redirectUri);
  }

  getPrivilegiosUsuarioLogueado(
    baseUrl: string,
    usuario: string,
    qAplicacion: string,
    customPath?: string
  ): Observable<any> {
    // Define la base de la ruta. Si se proporciona customPath, lo usa; de lo contrario, usa la ruta por defecto.
    const basePath = customPath
      ? customPath
      : "/eit-viv/api/v1/privilegios-usuarios/ldap";

    // Construye la URL completa añadiendo el usuario y qAplicacion al final de basePath
    const url = `${baseUrl}${basePath}/${usuario}/aplicacion/${qAplicacion}`;

    // Obtiene el token de KeycloakService
    const token = this.getToken();

    // Define las cabeceras con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    // Realiza la solicitud HTTP GET con las cabeceras
    return this.http.get(url, { headers });
  }
}
