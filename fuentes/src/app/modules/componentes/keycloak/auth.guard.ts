import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from "@angular/router";

import { KeycloakAuthGuard, KeycloakService } from "keycloak-angular";
import { GestionTokenService } from "./fomento.gestionToken/gestionToken.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard extends KeycloakAuthGuard {
  constructor(
    protected override router: Router,
    protected keycloakService: KeycloakService,
    protected gestionTokenService: GestionTokenService
  ) {
    super(router, keycloakService);
  }

  async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    if (!this.authenticated) {
      this.keycloakAngular.login({
        redirectUri: window.location.origin + state.url,
      });
      return false;
    }

    const token = await this.gestionTokenService.getToken();

    // Extracción de la ruta para uso en obtenerAplicativoAComprobarDelToken
    const rutaAComprobar = route.routeConfig?.path || "";

    //TODO: esta logica esta por fefinir
    // const aplicativo = await this.gestionTokenService.obtenerAplicativoAComprobarDelToken(token, rutaAComprobar);

    const aplicativo = this.getqAplicacionActual();

    // Obtener permisos del usuario desde el token
    const permisos =
      await this.gestionTokenService.filtrarPermisosConAccesoDesdeToken(
        token,
        aplicativo
      );

    // Obtener el permiso requerido para la ruta
    const requiredPermiso = rutaAComprobar;

    // Si el permiso requerido está vacío, permitir acceso sin restricciones
    if (!requiredPermiso) {
      return true;
    }

    // Obtener el Privilegio del usuario (puedes obtenerlo de donde esté almacenado)
    const userRole = this.getPrivilegioActual(); // Función para obtener el Privilegio del usuario

    // Verificar si el usuario tiene acceso a la ruta
    const hasAccess = this.checkRouteAccess(
      permisos,
      requiredPermiso,
      userRole
    );

    if (!hasAccess) {
      // Redireccionar a una página de acceso denegado
      await this.router.navigate(["/error"]);
      return false;
    }

    return hasAccess;
  }

  checkRouteAccess(
    permisos: any[],
    requiredPermiso: string,
    userRole: string
  ): boolean {
    // Verificar si el usuario tiene acceso basado en el permiso requerido, el Privilegio del usuario y el rol asociado al permiso
    return permisos.some(
      (permiso) =>
        permiso.recurso.codigo === requiredPermiso &&
        permiso.permisosPrivilegio.includes("ACCESS") &&
        permiso.Privilegio === userRole
    );
  }

  getPrivilegioActual(): string {
    //TODO:************************************************************************
    // Aquí implementa la lógica para obtener el Privilegio del usuario
    // Puede ser desde una variable de sesión, desde el token, etc.
    return localStorage.getItem(`privilegio_actual`);
  }

  getqAplicacionActual(): string {
    //TODO:************************************************************************
    // Aquí implementa la lógica para obtener el Privilegio del usuario
    // Puede ser desde una variable de sesión, desde el token, etc.
    return localStorage.getItem(`qAplicacion_actual`);
  }
}
