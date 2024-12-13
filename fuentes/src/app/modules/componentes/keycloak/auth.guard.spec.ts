import { TestBed } from "@angular/core/testing";
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { KeycloakService } from "keycloak-angular";
import { AuthGuard } from "./auth.guard";
import { GestionTokenService } from "./fomento.gestionToken/gestionToken.service";
import { IPermisoContrastado } from "./fomento.gestionToken/InterfacesGestionToken";

describe("AuthGuard", () => {
  let authGuard: AuthGuard;
  let router: Router;
  let keycloakService: KeycloakService;
  let gestionTokenService: GestionTokenService;

  // Mock de datos para permisos
  const permisosMock: IPermisoContrastado[] = [
    {
      recurso: { codigo: "test_path_1" },
      permisosPrivilegio: ["ACCESS"],
      privilegio: "test_privilege",
    },
    {
      recurso: { codigo: "test_path_2" },
      permisosPrivilegio: ["ACCESS"],
      privilegio: "test_privilege",
    },
  ];

  // Mock GestionTokenService con una implementación para getToken
  const gestionTokenServiceMock = {
    getToken: jest.fn().mockResolvedValue("test_token"),
    filtrarPermisosConAccesoDesdeToken: jest
      .fn()
      .mockResolvedValue([permisosMock]),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: { navigate: jest.fn() } },
        { provide: KeycloakService, useValue: { login: jest.fn() } },
        { provide: GestionTokenService, useValue: gestionTokenServiceMock },
      ],
    });

    authGuard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
    keycloakService = TestBed.inject(KeycloakService);
    gestionTokenService = TestBed.inject(GestionTokenService);
  });

  describe("isAccessAllowed", () => {
    it("should redirect to login if not authenticated", async () => {
      const routeSnapshot = {} as ActivatedRouteSnapshot;
      const stateSnapshot = {} as RouterStateSnapshot;

      // Mock authenticated as false
      Object.defineProperty(authGuard, "authenticated", { value: false });

      await authGuard.isAccessAllowed(routeSnapshot, stateSnapshot);

      expect(keycloakService.login).toHaveBeenCalledWith({
        redirectUri: window.location.origin + stateSnapshot.url,
      });
      expect(router.navigate).not.toHaveBeenCalled();
    });

    it("should redirect to error if user does not have access", async () => {
      const routeSnapshot = {
        routeConfig: { path: "test_path" },
      } as ActivatedRouteSnapshot;
      const stateSnapshot = {} as RouterStateSnapshot;
      const token = "test_token";

      // Mock authenticated as true
      Object.defineProperty(authGuard, "authenticated", { value: true });

      // Mock getToken to return a token
      jest.spyOn(gestionTokenService, "getToken").mockResolvedValue(token);

      // Mock other necessary functions
      jest
        .spyOn(authGuard, "getPrivilegioActual")
        .mockReturnValue("test_privilege");
      jest
        .spyOn(authGuard, "getqAplicacionActual")
        .mockReturnValue("test_application");
      jest
        .spyOn(gestionTokenService, "filtrarPermisosConAccesoDesdeToken")
        .mockResolvedValue([]);

      await authGuard.isAccessAllowed(routeSnapshot, stateSnapshot);

      expect(router.navigate).toHaveBeenCalledWith(["/error"]);
    });

    // Add more test cases for other scenarios
  });

  describe("checkRouteAccess", () => {
    it("should return true if user has access", () => {
      const permisos = [
        {
          recurso: { codigo: "test_path" },
          permisosPrivilegio: ["ACCESS"],
          Privilegio: "test_privilege",
        },
      ];
      const requiredPermiso = "test_path";
      const userRole = "test_privilege";

      const hasAccess = authGuard.checkRouteAccess(
        permisos,
        requiredPermiso,
        userRole
      );

      expect(hasAccess).toBe(true);
    });

    it("should return false if user does not have access", () => {
      const permisos = [
        {
          recurso: { codigo: "test_path" },
          permisosPrivilegio: [],
          Privilegio: "test_privilege",
        },
      ];
      const requiredPermiso = "test_path";
      const userRole = "test_privilege";

      const hasAccess = authGuard.checkRouteAccess(
        permisos,
        requiredPermiso,
        userRole
      );

      expect(hasAccess).toBe(false);
    });
  });

  describe("getPrivilegioActual", () => {
    it("should return the current privilege", () => {
      localStorage.setItem("privilegio_actual", "test_privilege");

      const privilege = authGuard.getPrivilegioActual();

      expect(privilege).toBe("test_privilege");
    });
  });

  describe("getqAplicacionActual", () => {
    it("should return the current application", () => {
      localStorage.setItem("qAplicacion_actual", "test_application");

      const application = authGuard.getqAplicacionActual();

      expect(application).toBe("test_application");
    });
  });
});
