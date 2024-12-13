import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { NotifierService } from 'angular-notifier';

export interface Notification {
	title: string;
	message: string;
}

@Component({
	selector: 'lib-fomento-alerts',
	templateUrl: './fomento.alerts.component.html',
	styleUrls: ['./fomento.alerts.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class FomentoAlertsComponent {
	alert: FomentoAlertsComponent;
	onclick($event: any) {
		throw new Error('Method not implemented.');
	}
	@ViewChild('customNotificationError', { static: true })
	customNotificationTmplError = '';
	@ViewChild('customNotificationSuccess', { static: true })
	customNotificationTmplSuccess = '';
	@ViewChild('customNotificationWarning', { static: true })
	customNotificationTmplWarnig = '';
	@ViewChild('customNotificationAdvise', { static: true })
	customNotificationTmplAdvise = '';

	@Input() labelFirstButton="Cancelar"; // Valor por defecto
	@Input() labelSecondButton="Aceptar"; // Valor por defecto
	@Input() notifications: Notification[] = []; // Array de notificaciones

	currentIndex = 0; // Indice de la notificación actual

	showActionButtons = false;
	showCloseButton= true
	// Estas propiedades sostendrán las funciones a ejecutar
	onPrimaryButtonClick;
	onSecondaryButtonClick;

	// Mantén un registro de los IDs de las notificaciones
	private notificationIds = new Set<string>();

	private readonly notifier: NotifierService;

	constructor(notifierService: NotifierService) {
		this.notifier = notifierService;
	}

	// Método para cerrar notificaciones
	hide(notificationId: string) {
		this.notifier.hide(notificationId);
		this.notificationIds.delete(notificationId); // Elimina el ID del registro
	}

	showPagedNotification(
		notification: Notification[],
		type: string,
		showActionButtons?: boolean,
		primaryAction?,
		secondaryAction?,
		labelFirstButton?: string,
		labelSecondButton?: string,
	) {
		// Actualiza la lógica para asignar los valores predeterminados y los botones de acción
		this.showActionButtons = showActionButtons ?? false;
		this.labelFirstButton = labelFirstButton || 'CANCELAR';
		this.labelSecondButton = labelSecondButton || 'ACEPTAR';
		this.onPrimaryButtonClick =
			primaryAction ||
			(() => {
				//do nothing
			});
		this.onSecondaryButtonClick =
			secondaryAction ||
			(() => {
				//do nothing
			});
		// Guarda las notificaciones y configura la primera para mostrarse
		notification = this.notifications;
		this.currentIndex = 0; // Comienza desde la primera notificación
		this.displayNotification(type); // Muestra la notificación
	}


	// Método para mostrar la notificación actual
	displayNotification(type: string) {
		// Obtiene la notificación actual por el índice

		const uniqueId = Date.now().toString(); // ID único basado en el timestamp

		const tipo = type || 'info'; // 'info' como tipo por defecto si no se proporciona

		// Determina la plantilla en base al tipo
		let template;
		switch (type) {
			case 'success':
				template = this.customNotificationTmplSuccess;
				break;
			case 'error':
				template = this.customNotificationTmplError;
				break;
			case 'info':
				template = this.customNotificationTmplAdvise;
				break;	
			case 'warning':
				template = this.customNotificationTmplWarnig;
				break;
		}

		// Muestra la notificación con NotifierService
		this.notifier.show({
			id: uniqueId,
			message: '',
			type: tipo,
			template: template,
		});

		// Guarda el ID de la notificación en el registro
		this.notificationIds.add(uniqueId);
	}

	// Métodos para manejar la paginación
	nextNotification(notificationData) {
		if (this.currentIndex < this.notifications.length - 1) {
			this.currentIndex++;
			this.displayNotification(notificationData.type); // Asegúrate de actualizar el tipo si es necesario
		}
	}

	previousNotification(notificationData) {
		if (this.currentIndex > 0) {
			this.currentIndex--;
			this.displayNotification(notificationData.type); // Asegúrate de actualizar el tipo si es necesario
		}
	}

	// Métodos para manejar clicks en botones de acción
	primerBotonActionClicked(notificationData) {
		if (this.onPrimaryButtonClick) {
			this.onPrimaryButtonClick(notificationData);
		}
	}

	segundoBotonActionClicked(notificationData) {
		if (this.onSecondaryButtonClick) {
			this.onSecondaryButtonClick(notificationData);
		}
	}
}
