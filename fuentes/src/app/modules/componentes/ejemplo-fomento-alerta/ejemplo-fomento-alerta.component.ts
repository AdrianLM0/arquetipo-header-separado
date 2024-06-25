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
	typeStyleButton = 'material';

	themesuccess = 'primary';
	themeinfo = 'accent';
	themewarning = 'warn';
	themeerror = 'warn';

	disabled = false;

	labelsuccess = 'Mostrar Notificación Success';
	labelinfo = 'Mostrar Notificación Info';
	labelwarning = 'Mostrar Notificación Warning';
	labelerror = 'Mostrar Notificación Error';

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

	notificationsArray2: Notification[] = [
		{
			title: 'Notificación simple',
			message: 'Este es el contenido de la notificacion simple',
		},
	];

	showNotification(
		tipo: string,
		botonCerrar?: boolean,
		showActionButtons?: boolean,
		labelBotonera?: string,
		textoPrimerBoton?: string,
		textoSegundoBoton?: string,
	) {
		this.alerta.showNotification(
			this.notificationsArray,
			tipo,
			botonCerrar,
			showActionButtons,
			() => this.logicaPrimerBoton(),
			() => this.logicaSegundoBoton(),
			labelBotonera,
			textoPrimerBoton,
			textoSegundoBoton,
		);
	}

	showNotification2(
		tipo: string,
		botonCerrar?: boolean,
		showActionButtons?: boolean,
		labelBotonera?: string,
		textoPrimerBoton?: string,
		textoSegundoBoton?: string,
	) {
		this.alerta.showNotification(
			this.notificationsArray2,
			tipo,
			botonCerrar,
			showActionButtons,
			() => this.logicaPrimerBoton(),
			() => this.logicaSegundoBoton(),
			labelBotonera,
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
