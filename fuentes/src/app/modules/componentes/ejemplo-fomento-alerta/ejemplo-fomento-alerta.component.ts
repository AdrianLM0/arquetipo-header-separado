import { Component, ViewChild } from '@angular/core';
import {
	Notification,
	FomentoAlertsComponent,
} from '@fomento/i-rf-web-component-node-lib';

@Component({
	selector: 'app-ejemplo-fomento-alerta',
	templateUrl: './ejemplo-fomento-alerta.component.html',
	styleUrls: ['./ejemplo-fomento-alerta.component.scss'],
})
export class EjemploFomentoAlertaComponent {
	@ViewChild(FomentoAlertsComponent, { static: true })
	alerta: FomentoAlertsComponent;
	/*alert fase1*/
	type
	textoPrimerBoton = 'Cancelar';
	textoSegundoBoton = 'Aceptar';
	showActionButtons = true;

	themesuccess = 'primary';
	themeinfo = 'accent';
	themewarning = 'warn';
	themeerror = 'warn';

	labelsuccess = 'Mostrar Notificación Success';
	labelinfo = 'Mostrar Notificación Info';
	labelwarning = 'Mostrar Notificación Warning';
	labelerror = 'Mostrar Notificación Error';

	currentIndex = 0;
	onPrimaryButtonClick: any;
	onSecondaryButtonClick: any;


	disabled = false;


	successevent = {
		eventname: 'success',
		data: {
			title: 'Título mensaje de aviso Error de sistema',
			body: 'Cuerpo de texto del mensaje de aviso del sistema. Lorem ipsum dolor sit amet consectetur adipiscing elit.',
		},
	};

	infoevent = {
		eventname: 'info',
		data: {
			title: 'Título mensaje de aviso Error de sistema',
			body: 'Cuerpo de texto del mensaje de aviso del sistema. Lorem ipsum dolor sit amet consectetur adipiscing elit.',
		},
	};

	warningevent = {
		eventname: 'warning',
		data: {
			title: 'Título mensaje de aviso Error de sistema',
			body: 'Cuerpo de texto del mensaje de aviso del sistema. Lorem ipsum dolor sit amet consectetur adipiscing elit.',
		},
	};

	errorevent = {
		eventname: 'error',
		data: {
			title: 'Título mensaje de aviso Error de sistema',
			body: 'Cuerpo de texto del mensaje de aviso del sistema. Lorem ipsum dolor sit amet consectetur adipiscing elit.',
		},
	};

	onclick($event) {
		console.log($event.eventname);
		console.log($event.data);
		this.showNotification(
			$event.data.title,
			$event.data.body,
			$event.eventname,
		);
	}

	/*alert fase2*/

	notificationsArray: Notification[] = [
		{
			title: 'Primera notificación',
			message: 'Este es el contenido de la primera notificación',
		},
		{
			title: 'Segunda notificación',
			message: 'Este es el contenido de la segunda notificación',
		},
		{
			title: 'Tercera notificación',
			message: 'Este es el contenido de la tercera notificación',
		},
		{
			title: 'Cuarta notificación',
			message: 'Este es el contenido de la cuarta notificación',
		},
	];

	notificationsSimple: Notification[] = [
		{
			title: 'Notificación simple',
			message: 'Este es el contenido de la notificacion simple',
		},
	];

	showPagedNotification(
		tipo: string,
		showActionButtons?: boolean,
		textoPrimerBoton?: string,
		textoSegundoBoton?: string,
	) {
		this.alerta.showPagedNotification(
			this.notificationsArray,
			tipo,
			showActionButtons,
			() => this.logicaPrimerBoton(),
			() => this.logicaSegundoBoton(),
			textoPrimerBoton,
			textoSegundoBoton,
		);
	}

	showNotification(
		tipo: string,
		showActionButtons?: boolean,
		textoPrimerBoton?: string,
		textoSegundoBoton?: string,
	) {
		this.alerta.showPagedNotification(
			this.notificationsSimple,
			tipo,
			showActionButtons,
			() => this.logicaPrimerBoton(),
			() => this.logicaSegundoBoton(),
			textoPrimerBoton,
			textoSegundoBoton,
		);
	}

	logicaPrimerBoton() {
		// Lógica específica para la acción primaria
		console.log('logicaPrimerBoton');
	}

	logicaSegundoBoton() {
		// Lógica específica para la acción secundaria
		console.log('logicaSegundoBoton');
	}
}
