import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from "@angular/core";
import { FomentoSnackbarComponent } from "../fomento.snackbar/fomento.snackbar.component";
import { NotificationModel } from "./notificacion.model";
import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";
import { NotificationWebsocketConfig } from "./notification-websocket-config";
import { WebsocketService } from "@fomento/i-rf-logic-component-node-lib";
import { ThemePalette } from "@angular/material/core";
import { MatBadgePosition, MatBadgeSize } from "@angular/material/badge";

@Component({
  selector: "lib-fomento-notificaciones",
  templateUrl: "./fomento.notificaciones.component.html",
  styleUrls: ["./fomento.notificaciones.component.css"],
})
export class FomentoNotificacionesComponent {
  @ViewChild(FomentoSnackbarComponent, { static: true })
  snackbar: FomentoSnackbarComponent;

  @Input() action: string = "Cerrar";
  @Input() hasAction: boolean;
  @Input() horizontalPosition: MatSnackBarHorizontalPosition = "end";
  @Input() verticalPosition: MatSnackBarVerticalPosition = "top";
  @Input() panelClass: string | string[];

  @Input() broker: string;
  @Input() message: string;
  @Input() connectionUrl: string;

  @Output() notificationReceived = new EventEmitter<NotificationModel>();

  /*Badge */
  @Input() badgeColor: ThemePalette;
  badge: string | number | undefined = 0;
  @Input() badgeDescripcion: string;
  @Input() badgeDisabled: boolean;
  @Input() badgeHiden: boolean;
  @Input() badgeOverlap: boolean = true;
  @Input() badgePosition: MatBadgePosition = "above before";
  @Input() badgeSize: MatBadgeSize = "small";

  /*Icon */
  @Input() typeStyle = "material";

  //Atributos matter-icon
/*   @Input() family = "fa";
  @Input() icon = "bell";
  @Input() theme = "";
  @Input() color = "green";
  @Input() className = "";
  @Input() spin = true;
  @Input() pulse = false;
  @Input() fixedWidth = false;
  @Input() inverse = false;
  @Input() border = false;
  @Input() listItem = false;
  @Input() flip = "";
  @Input() size = "";
  @Input() pull = "";
  @Input() alt = "";
  @Input() mask = "";
  @Input() transform = ""; */

  //Atributos mat-icon
  @Input() svgIcon = "";
  @Input() fontSet = "fa";
  @Input() inline = false;
  @Input() fontIcon = "";
  @Input() fontSize = "24px";

  notifications: NotificationModel[] = [];

  constructor(private webSocketService: WebsocketService<NotificationModel>) {}

  initialize(config: NotificationWebsocketConfig) {
    this.webSocketService = new WebsocketService(config);

    this.webSocketService.listen((notification) => {
      this.badge = (this.badge as number) + 1;
      this.notifications.push(notification);
      const not = notification as NotificationModel;
      this.openSnackBar(not.message);
      this.notificationReceived.emit(not); // Emitir la notificación
    });
  }

  openSnackBar(message: string) {
    this.snackbar.openSnackBarAdvanve(message, this.action, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ["custom-snackbar"],
    });
  }

  sendNotification(msg: string) {
    console.log("sendNotification", msg);
    const notification: NotificationModel = {
      date: new Date(),
      message: msg,
    };
    this.webSocketService.send(notification);
  }
}
