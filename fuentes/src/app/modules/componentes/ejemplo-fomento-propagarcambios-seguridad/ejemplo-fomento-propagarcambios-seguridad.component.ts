import { Component, ViewChild } from '@angular/core';
import { FomentoPropagarcambiosseguridadComponent } from '@fomento/i-rf-web-component-node-lib';
import { ChangePrivilegesWebsocketConfig } from '@fomento/i-rf-web-component-node-lib';

@Component({
	selector: 'app-ejemplo-fomento-propagarcambios-seguridad',
	templateUrl: './ejemplo-fomento-propagarcambios-seguridad.component.html',
	styleUrls: ['./ejemplo-fomento-propagarcambios-seguridad.component.scss'],
})
export class EjemploFomentoPropagarcambiosSeguridadComponent {
	width = '50%';
	showbutton = false;

	//Boton
	typeStyle = 'material';

	label_boton = 'Propagar cambios';
	theme_boton = 'primary';
	disabled_boton = false;
	aria_label_boton = 'Prueba propagar cambios de seguridad';
	disableRipple_boton = true;

	label = 'Botón';
	disabled = false;
	aria_label = 'texto alt';
	disableRipple = true;

	label_boton2 = 'Cerrar';

	//Atributos mat-divider
	inset = false;
	vertical = false;
	color = '#EEEEEE';

	messageEvent: string = '';
	typeEvent: string = '';
	actionEvent: string = '';

	broker = '/topic/changeprivileges';
	message = '/app/eventchangeprivileges';
	connectionUrl = 'ws://localhost:8085/ws';

	@ViewChild(FomentoPropagarcambiosseguridadComponent, { static: true })
	propagar!: FomentoPropagarcambiosseguridadComponent;

	constructor() {}

	config: ChangePrivilegesWebsocketConfig =
		new ChangePrivilegesWebsocketConfig();

	ngOnInit(): void {
		this.config.broker = this.broker;
		this.config.message = this.message;
		this.config.connectionUrl = this.connectionUrl;
		console.log('this.propagar', this.propagar);
		this.propagar.initialize(this.config);
	}

	sendChange(msg: string) {
		this.propagar?.sendChangePrivileges(msg);
	}
}
