import { Component, ViewChild } from '@angular/core';
import {
	MatSnackBarHorizontalPosition,
	MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { FomentoNotificacionesComponent } from '@fomento/i-rf-web-component-node-lib';

import { NotificationModel } from '@fomento/i-rf-web-component-node-lib/lib/components/fomento.notificaciones/notificacion.model';
import { NotificationWebsocketConfig } from '@fomento/i-rf-web-component-node-lib';
import {
	FloatLabelType,
	MatFormFieldAppearance,
	SubscriptSizing,
} from '@angular/material/form-field';
import { ThemePalette } from '@angular/material/core';

@Component({
	selector: 'app-ejemplo-fomento-notificacion',
	templateUrl: './ejemplo-fomento-notificacion.component.html',
	styleUrls: ['./ejemplo-fomento-notificacion.component.scss'],
})
export class EjemploFomentoNotificacionComponent {
	/*Atributos generales*/
	appearance: MatFormFieldAppearance = 'outline';
	color: ThemePalette = 'primary';
	floatLabel: FloatLabelType = 'auto';
	hideRequiredMarker = false;
	hintLabel = 'hint';
	subscriptSizing: SubscriptSizing = 'dynamic';
	placeholder: string;

	/*Atributos input*/
	labelInput = 'Input email';
	errorStateMatcher = '';
	readonly = '';
	typeMaterial = 'text';
	errorState = '';
	msgHelp = 'Ex. Mensaje';

	//Atributos del botón
	typeStyle = 'material';
	label = 'Botón';
	theme_badge = 'secondary';
	icon_badge = '';
	href = 'https://www.juntadeandalucia.es/';
	target = '_self';
	disabled = false;
	aria_label = 'texto alt';
	disableRipple = true;

	//Boton
	label_boton = 'Enviar notificación';
	theme_boton = 'primary';
	disabled_boton = false;
	aria_label_boton = 'Botón para enviar notificaciones de prueba';
	disableRipple_boton = true;

	hasAction: boolean;

	panelClass: string | string[];

	action: string = 'Cerrar';

	horizontalPosition: MatSnackBarHorizontalPosition = 'end';
	verticalPosition: MatSnackBarVerticalPosition = 'top';

	notifications: NotificationModel[] = [];

	//Configuración para el WebSocket de Notificaciones
	broker = '/topic/notification';
	message = '/app/message';
	connectionUrl = 'ws://localhost:8085/ws';

	@ViewChild(FomentoNotificacionesComponent, { static: true })
	notificaciones!: FomentoNotificacionesComponent;

	constructor() {}

	config: NotificationWebsocketConfig = new NotificationWebsocketConfig();

	ngOnInit(): void {
		this.config.broker = this.broker;
		this.config.message = this.message;
		this.config.connectionUrl = this.connectionUrl;
		console.log(this.notificaciones);
		this.notificaciones.initialize(this.config);
	}

	send(msg: string) {
		console.log('Mensaje: ', msg);
		console.log('notificaciones: ', this.notificaciones);
		this.notificaciones?.sendNotification(msg);
	}
}
