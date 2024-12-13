import { TemplateRef, ViewContainerRef } from "@angular/core";
import { GestionTokenService } from "./fomento.gestionToken/gestionToken.service";
import { DirectivaPermisos } from "./directivaPermisos.directive";
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";

describe("DirectivaPermisos", () => {
  let directive: DirectivaPermisos;
  let viewContainerRefMock: Partial<ViewContainerRef>;
  let templateRefMock: Partial<TemplateRef<any>>;
  let gestionTokenServiceMock: jest.Mocked<Partial<GestionTokenService>>;

  beforeEach(() => {
    viewContainerRefMock = {
      clear: jest.fn(),
      createEmbeddedView: jest.fn(),
    };

    templateRefMock = {};

    gestionTokenServiceMock = {
      getToken: jest.fn(),
      filtrarPermisosComponentesDesdeToken: jest.fn(),
    };

    directive = new DirectivaPermisos(
      templateRefMock as TemplateRef<any>,
      viewContainerRefMock as ViewContainerRef,
      gestionTokenServiceMock as any
    );
  });

  describe("set showIfPermisoOK", () => {
    it("should display the template if permission is granted", async () => {
      gestionTokenServiceMock.getToken.mockResolvedValue("mockToken");
      gestionTokenServiceMock.filtrarPermisosComponentesDesdeToken.mockResolvedValue(
        [
          {
            recurso: {
              codigo: "codigo_recurso",
              nombre: "nombre_recurso",
              subsistema: "subsistema_recurso",
              id: 1,
            },
            permisosPrivilegio: ["permiso_test"],
            privilegio: "privilegio_actual",
          },
        ]
      );
      localStorage.setItem("qAplicacion_actual", "app_test");
      localStorage.setItem("privilegio_actual", "privilegio_actual");

      directive.showIfPermisoOK = "permiso_test";

      await new Promise((resolve) => setTimeout(resolve, 0));

      expect(viewContainerRefMock.createEmbeddedView).toHaveBeenCalledWith(
        templateRefMock
      );
    });

    it("should clear the view if permission is denied", async () => {
      gestionTokenServiceMock.getToken.mockResolvedValue("mockToken");
      gestionTokenServiceMock.filtrarPermisosComponentesDesdeToken.mockResolvedValue(
        []
      );
      localStorage.setItem("qAplicacion_actual", "app_test");
      localStorage.setItem("privilegio_actual", "privilegio_actual");

      directive.showIfPermisoOK = "permiso_test";

      await new Promise((resolve) => setTimeout(resolve, 0));

      expect(viewContainerRefMock.clear).toHaveBeenCalled();
    });
  });
});
