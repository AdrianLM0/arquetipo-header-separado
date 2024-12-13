import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import { KeycloakService } from "keycloak-angular";
import { of, throwError } from "rxjs";
import { GestionTokenService } from "./gestionToken.service";

describe("GestionTokenService", () => {
  let service: GestionTokenService;
  let httpTestingController: HttpTestingController;
  let keycloakService: KeycloakService;
  let consoleSpy: jest.SpyInstance;
  let consoleWarnSpy: jest.SpyInstance;
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GestionTokenService, KeycloakService],
    });

    service = TestBed.inject(GestionTokenService);
    httpTestingController = TestBed.inject(HttpTestingController);
    keycloakService = TestBed.inject(KeycloakService);

    // Mockea las funciones de KeycloakService
    jest.spyOn(keycloakService, "isLoggedIn").mockResolvedValue(true);
    jest.spyOn(keycloakService, "getToken").mockResolvedValue("mockToken");
    jest
      .spyOn(keycloakService, "loadUserProfile")
      .mockResolvedValue({ username: "testUser" });
    jest
      .spyOn(keycloakService, "getUserRoles")
      .mockReturnValue(["role1", "role2"]);
    jest.spyOn(keycloakService, "isTokenExpired").mockReturnValue(false);
    jest.spyOn(keycloakService, "updateToken").mockResolvedValue(true);
    jest.spyOn(keycloakService, "getUsername").mockReturnValue("testUser");

    // Espía console.log, console.warn y console.error antes de cada prueba
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
    consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation();
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();
  });

  afterEach(() => {
    httpTestingController.verify();
    consoleSpy.mockRestore();
    consoleWarnSpy.mockRestore();
    consoleErrorSpy.mockRestore();
    jest.clearAllMocks();
    localStorage.clear();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  describe("showTokenInfo", () => {
    it("should not log token information when not logged in", async () => {
      jest.spyOn(keycloakService, "isLoggedIn").mockResolvedValue(false);
      await service.showTokenInfo();

      expect(consoleSpy).toHaveBeenCalledWith("Usuario no logueado.");
      expect(keycloakService.getToken).not.toHaveBeenCalled();
    });

    it("should log token information when logged in", async () => {
      await service.showTokenInfo();

      expect(consoleSpy).toHaveBeenCalled();
      expect(keycloakService.getToken).toHaveBeenCalled();
      expect(keycloakService.loadUserProfile).toHaveBeenCalled();
    });
  });

  describe("decodeToken", () => {
    it("should decode a token successfully", () => {
      const testToken = "header.eyJ1c2VybmFtZSI6InRlc3RVc2VyIn0.signature";
      const decoded = service.decodeToken(testToken);
      expect(decoded).toEqual({ username: "testUser" });
    });

    it("should return null if the token is invalid", () => {
      const testToken = "invalidToken";
      const decoded = service.decodeToken(testToken);
      expect(decoded).toBeNull();
    });
  });

  describe("extractPrivilegiosFomentoCodes", () => {
    it("should extract privilegios fomento codes from payload", () => {
      const payload = { "privilegios-fomento": ["code1", "code2"] };
      const codes = service.extractPrivilegiosFomentoCodes(payload);
      expect(codes).toEqual(["code1", "code2"]);
    });

    it("should return an empty array if privilegios fomento codes are not present", () => {
      const payload = {};
      const codes = service.extractPrivilegiosFomentoCodes(payload);
      expect(codes).toEqual([]);
    });
  });

  describe("getMetadatos", () => {
    it("should make HTTP GET request to fetch metadata", () => {
      const mockResponse = { data: "metadata" };
      service
        .getMetadatos("testApp", "https://example.com", "/api/metadata")
        .subscribe((response) => {
          expect(response).toEqual(mockResponse);
        });

      const req = httpTestingController.expectOne(
        "https://example.com/api/metadata/testApp"
      );
      expect(req.request.method).toEqual("GET");
      req.flush(mockResponse);
    });
  });

  describe("obtenerPermisosGuardados", () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it("should retrieve and decrypt permisos guardados from localStorage", async () => {
      const mockPermisosGuardados = [
        {
          recurso: { codigo: "testCodigoRecurso" },
          valor: 3,
          codigo: "permiso1",
        },
      ];
      localStorage.setItem(
        `metadatos_testApp`,
        JSON.stringify(mockPermisosGuardados)
      );

      const result = await service.obtenerPermisosGuardados("testApp");
      expect(result).toEqual(mockPermisosGuardados);
    });

    it("should return null if there is an error decrypting data", async () => {
      localStorage.setItem(`metadatos_testApp`, "invalidData");
      const result = await service.obtenerPermisosGuardados("testApp");
      expect(result).toBeNull();
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        "Error al desencriptar metadatos:",
        expect.any(SyntaxError)
      );
    });

    it("should return null if no data is found in localStorage", async () => {
      const result = await service.obtenerPermisosGuardados("testApp");
      expect(result).toBeNull();
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        "No se encontraron metadatos encriptados para la aplicación 'testApp' en el almacenamiento local."
      );
    });
  });

  describe("obtenerAuthoritiesGuardados", () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it("should retrieve and decrypt authorities guardados from localStorage", async () => {
      const mockAuthoritiesGuardados = ["auth1", "auth2"];
      localStorage.setItem(
        `authorities_testUser`,
        JSON.stringify(mockAuthoritiesGuardados)
      );

      const result = await service.obtenerAuthoritiesGuardados("testUser");
      expect(result).toEqual(mockAuthoritiesGuardados);
    });

    it("should return null if there is an error decrypting data", async () => {
      localStorage.setItem(`authorities_testUser`, "invalidData");
      const result = await service.obtenerAuthoritiesGuardados("testUser");
      expect(result).toBeNull();
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        "Error al desencriptar authorities:",
        expect.any(SyntaxError)
      );
    });

    it("should return null if no data is found in localStorage", async () => {
      const result = await service.obtenerAuthoritiesGuardados("testUser");
      expect(result).toBeNull();
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        "No se encontraron authorities encriptados para el usuario LDAP 'testUser' en el almacenamiento local."
      );
    });
  });

  describe("obteneryGuardarMetadatos", () => {
    it("should save metadatos and authorities to localStorage", () => {
      const mockMetadatos = { data: "metadata" };
      const mockAuthorities = ["auth1", "auth2"];

      jest.spyOn(service, "getMetadatos").mockReturnValue(of(mockMetadatos));
      jest
        .spyOn(service, "getAuthorities")
        .mockReturnValue(of(mockAuthorities));

      service.obteneryGuardarMetadatos("testApp", "https://example.com");

      expect(localStorage.getItem("metadatos_testApp")).toEqual(
        JSON.stringify(mockMetadatos)
      );
      expect(localStorage.getItem("authorities_testUser")).toEqual(
        JSON.stringify(mockAuthorities)
      );
    });

    it("should handle error if unable to get metadatos or authorities", () => {
      jest.spyOn(service, "getMetadatos").mockReturnValue(throwError("error"));
      jest
        .spyOn(service, "getAuthorities")
        .mockReturnValue(of(["auth1", "auth2"]));

      service.obteneryGuardarMetadatos("testApp", "https://example.com");

      expect(consoleErrorSpy).toHaveBeenCalledWith(
        "Error al obtener metadatos o authorities:",
        "error"
      );
    });
  });

  describe("forceUpdateTokenAndMetadatos", () => {
    it("should update token and call obteneryGuardarMetadatos", async () => {
      const obteneryGuardarMetadatosSpy = jest
        .spyOn(service, "obteneryGuardarMetadatos")
        .mockImplementation();

      await service.forceUpdateTokenAndMetadatos(
        "testApp",
        "https://example.com"
      );

      expect(keycloakService.getToken).toHaveBeenCalled();
      expect(obteneryGuardarMetadatosSpy).toHaveBeenCalledWith(
        "testApp",
        "https://example.com",
        undefined,
        undefined
      );
    });

    it("should handle error if unable to refresh token", async () => {
      jest
        .spyOn(keycloakService, "getToken")
        .mockRejectedValue(new Error("error"));

      await expect(
        service.forceUpdateTokenAndMetadatos("testApp", "https://example.com")
      ).rejects.toThrow("Error al refrescar el token: error");
    });
  });

  describe("clearLocalData", () => {
    it("should clear local data for the application and user", () => {
      localStorage.setItem("qAplicacion_actual", "testApp");
      localStorage.setItem("metadatos_testApp", "data");
      localStorage.setItem("authorities_testUser", "data");
      localStorage.setItem("privilegio_actual", "privilege");
      localStorage.setItem("ldap_actual", "ldap_testUser");

      service.clearLocalData();

      expect(localStorage.getItem("metadatos_testApp")).toBeNull();
      expect(localStorage.getItem("authorities_ldap_testUser")).toBeNull();
      expect(localStorage.getItem("privilegio_actual")).toBeNull();
      expect(localStorage.getItem("qAplicacion_actual")).toBeNull();
      expect(localStorage.getItem("ldap_actual")).toBeNull();
    });
  });

  describe("getPrivilegiosUsuarioLogueado", () => {
    it("should make HTTP GET request to fetch user privileges", () => {
      const mockResponse = { data: "privileges" };
      const tokenPromise = Promise.resolve("mockToken");
      jest.spyOn(service, "getToken").mockReturnValue(tokenPromise);

      service
        .getPrivilegiosUsuarioLogueado(
          "https://example.com",
          "testUser",
          "testApp",
          "/api/privileges"
        )
        .subscribe((response) => {
          expect(response).toEqual(mockResponse);
        });

      const req = httpTestingController.expectOne(
        "https://example.com/api/privileges/testUser/aplicacion/testApp"
      );
      expect(req.request.method).toEqual("GET");
      req.flush(mockResponse);
    });
  });
});
