import { Component, Input, TemplateRef, ViewChild, ViewEncapsulation } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "lib-fomento-dialog",
  templateUrl: "./fomento.dialog.component.html",
  styleUrls: ["./fomento.dialog.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
})
export class FomentoDialogComponent {
  @ViewChild("template") customTemplate!: TemplateRef<unknown>;

  @Input() width = "80%";
  @Input() height = "40%";
  @Input() closeButton = true;
  @Input() closeButtonPosition: 'left' | 'right' = 'right'; // Nueva propiedad para la posición del botón de cierre
  label = "";

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(this.customTemplate, {
      width: this.width,
      height: this.height,
    });
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }
}
