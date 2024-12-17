import { Component, ViewChild } from '@angular/core';
import { WebsocketService } from '../fomento.websockets/websocket.service';
import { ChangePrivilegeModel } from './changeprivilege.model';
import { ChangePrivilegesWebsocketConfig } from './changeprivileges-websocket-config';
import { FomentoDialogComponent } from '../fomento.dialog/fomento.dialog.component';
import { GestionTokenService } from '../../../keycloak/fomento.gestionToken/gestionToken.service';

@Component({
	selector: 'lib-fomento-propagarcambiosseguridad',
	templateUrl: './fomento.propagarcambiosseguridad.component.html',
	styleUrls: ['./fomento.propagarcambiosseguridad.component.css'],
})
export class FomentoPropagarcambiosseguridadComponent {
	width = '50%';
	showbutton = false;

	//Boton
	typeStyle = 'material';

	disabled = false;
	aria_label = 'texto alt';
	disableRipple = true;
	theme_boton = 'primary';
	label_boton2 = 'Cerrar';

	//Atributos mat-divider
	inset = false;
	vertical = false;
	color = '#EEEEEE';

	messageEvent: string = '';
	typeEvent: string = '';
	actionEvent: string = '';

	@ViewChild(FomentoDialogComponent, { static: true })
	dialog: FomentoDialogComponent;

	constructor(
		private webSocketService: WebsocketService<ChangePrivilegeModel>,
		private gestionToken: GestionTokenService,
	) {}

	initialize(config: ChangePrivilegesWebsocketConfig) {
		this.webSocketService = new WebsocketService(config);

		this.webSocketService.listen(async (changePrivilegesEvent) => {
			const changeEvent = changePrivilegesEvent as ChangePrivilegeModel;
			this.messageEvent = changeEvent.message;
			this.typeEvent = changeEvent.type;
			this.actionEvent = changeEvent.action;
			console.log('changePrivilegesEvent', changePrivilegesEvent);
			//LLamadas a Lib Seguridad

			await this.gestionToken.forceUpdateTokenAndMetadatos(
				config.aplicativo,
				config.baseUrl,
				config.customPath,
			);

			this.dialog.openDialog();
		});
	}

	sendChangePrivileges(msg: string) {
		const changePrivilegesEvent: ChangePrivilegeModel = {
			date: new Date(),
			message: msg,
			type: 'GLOBAL',
			action: 'ACTUALIZA_SESION',
		};
		this.webSocketService.send(changePrivilegesEvent);
	}

	closeDialog() {
		this.dialog.closeDialog();
	}
}
