import { Component, Input, ViewChild } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
	selector: 'app-notification-template',
	templateUrl: './notification-template.component.html',
	styleUrls: ['./notification-template.component.scss'],
})
export class NotificationTemplateComponent {
	@ViewChild('customNotificationError', { static: true })
	customNotificationTmplError;
	@ViewChild('customNotificationSuccess', { static: true })
	customNotificationTmplSuccess;
	@ViewChild('customNotificationWarning', { static: true })
	customNotificationTmplWarnig;
	@ViewChild('customNotificationAdvise', { static: true })
	customNotificationTmplAdvise;

	@Input() typeNotification;

	private readonly notifier: NotifierService;

	constructor(notifierService: NotifierService) {
		this.notifier = notifierService;
	}

	showNotification(message: string, type: string) {
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

		this.notifier.show({
			message: message,
			type: type,
			template: template,
		});
	}
}
