import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionTokenService } from '@fomento/i-rf-security-component-node-lib';
import { environment } from '../../../env/environment.des';

@Component({
	selector: 'app-home-dashboard',
	templateUrl: './home-dashboard.component.html',
	styleUrls: ['./home-dashboard.component.scss'],
})
export class HomeDashboardComponent implements OnInit {
	constructor(
		public router: Router,
		private gestionTokenService: GestionTokenService,
	) {}

	async ngOnInit() {
		await this.getTokenInfo();
	}
	nombre_usuario = '';
	loggedIn;
	token;
	decodedPayload;
	userProfile;
	username;
	mensaje = environment.MENSAJE_BIENVENIDA;

	async getTokenInfo() {
		try {
			this.nombre_usuario = (
				await this.gestionTokenService.getUserProfile()
			).firstName;
		} catch (error) {
			console.error('Error al mostrar la información del token:', error);
		}
	}

}
