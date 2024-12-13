import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { GestionTokenService } from "./fomento.gestionToken/gestionToken.service";

@Directive({
  selector: "[showIfPermisoOK]",
})
export class DirectivaPermisos {
  private permisoAComprobar: string;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private gestionTokenService: GestionTokenService
  ) {}

  @Input() set showIfPermisoOK(permiso: string) {
    this.permisoAComprobar = permiso;
    this.actualizarVista().catch((error) => {
      console.error("Error al actualizar la vista basada en permisos", error);
    });
  }

  private async actualizarVista(): Promise<void> {
    const hasPermission = await this.tienePermiso(this.permisoAComprobar);
    console.log(
      "Verificando permisos para: ",
      this.permisoAComprobar,
      " tiene permiso: ",
      hasPermission
    );
    if (hasPermission) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      console.log("clear: ", this.permisoAComprobar);
      this.viewContainer.clear();
    }
  }

  async tienePermiso(permisoAComprobar: string) {
    const token = await this.gestionTokenService.getToken();
    const aplicativoActual = localStorage.getItem(`qAplicacion_actual`);
    const privilegioActual = localStorage.getItem(`privilegio_actual`);
    const todosLosPermisos =
      await this.gestionTokenService.filtrarPermisosComponentesDesdeToken(
        token,
        aplicativoActual
      );
    return todosLosPermisos.some(
      (permiso) =>
        permiso.privilegio === privilegioActual &&
        permiso.permisosPrivilegio.includes(permisoAComprobar)
    );
  }
}
