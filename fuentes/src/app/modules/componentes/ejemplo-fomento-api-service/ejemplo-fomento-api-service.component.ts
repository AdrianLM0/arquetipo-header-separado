import { HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { ApiEndpointsService } from '@fomento/i-rf-logic-component-node-lib';
import { RequestApiService } from '@fomento/i-rf-logic-component-node-lib';
import { RequestOptions } from '@fomento/i-rf-logic-component-node-lib/lib/components/fomento.ApiManager/interfaces/IRequestOptions';
import { GestionTokenService } from '@fomento/i-rf-security-component-node-lib';
import { KeycloakService } from 'keycloak-angular';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-ejemplo-fomento-api-service',
	templateUrl: './ejemplo-fomento-api-service.component.html',
	styleUrls: ['./ejemplo-fomento-api-service.component.scss'],
})
export class EjemploFomentoApiServiceComponent implements OnDestroy {
	constructor(
		private apiEndpoints: ApiEndpointsService,
		private requestApi: RequestApiService,
		private keycloakService: KeycloakService,
		private gestionTokenService: GestionTokenService,
	) {
		this.obtenerPermisosDeRecursoConcreto();
	}

	isLoading = false;
	results;
	error;
	private subscription: Subscription = new Subscription(); // Propiedad para la subscripción

	endpoint1 = 'http://192.168.0.81:8081/plda/api/v1/recursos?page=0&size=10';

	codigoRecurso = '/administracion';
	permisoDeRecursoConcreto = 'READ';
	permisosDeRecursoConcreto = [];
	permisosDeRecursoConcretoFiltrados = [];
	autorizado = true;

	async obtenerPermisosDeRecursoConcreto() {
		try {
			const token = await this.keycloakService.getToken();
			const qAplicacion = '10187483';

			this.permisosDeRecursoConcreto =
				await this.gestionTokenService.obtenerPermisosDeRecursoParaPrivilegio(
					token,
					this.codigoRecurso,
					qAplicacion,
				);
			console.log(
				'PERMISO RECURSO (obtenerPermisosDeRecursConcreto)',
				this.permisosDeRecursoConcreto,
			);
			this.filtrarPermisosDeRecursoConcreto();

			this.autorizado = this.permisosDeRecursoConcretoFiltrados.some((item) =>
				item.permisosRol.includes(this.permisoDeRecursoConcreto),
			);
			console.log(this.autorizado);
		} catch (error) {
			console.error('Error en la lógica completa:', error);
		}
	}

	filtrarPermisosDeRecursoConcreto() {
		this.permisosDeRecursoConcretoFiltrados =
			this.permisosDeRecursoConcreto.map((permiso) => ({
				codigoRecurso: permiso.recurso.codigo,
				permisosRol: permiso.permisosRol,
				rol: permiso.rol,
			}));
	}

	loggedIn;
	token;
	// Método para hacer un GET
	async getDatos() {
		this.loggedIn = await this.keycloakService.isLoggedIn();
		if (this.loggedIn) {
			// Obtiene el token
			this.token = await this.keycloakService.getToken();
			console.log('Token:', this.token);
		}

		// Definir las cabeceras
		const headers = new HttpHeaders({
			Authorization: 'Bearer ' + this.token,
			Accept: 'application/json',
		});

		// Crear el objeto RequestOptions
		const options: RequestOptions = {
			headers: headers,
		};

		this.isLoading = true; // Muestra un indicador de carga
		// Supongamos que 'obtenerDatos' es tu endpoint:
		const subscription = this.requestApi
			.get(this.endpoint1, options)
			.subscribe({
				next: (data) => {
					this.results = data;
					this.isLoading = false;
				},
				error: (err) => {
					this.error = err;
					this.isLoading = false;
				},
				complete: () => {
					// Opcional - acciones al completarse el observable
				},
			});

		this.subscription.add(subscription); // Agrega la nueva suscripción
	}

	postData(datos) {
		this.isLoading = true;

		const url = this.apiEndpoints.createUrl('guardarDatos', '');

		this.requestApi.post(url, datos).subscribe({
			next: () => {
				// Manejo de respuesta exitosa
				this.isLoading = false;
			},
			error: () => {
				// Manejo de error
				this.isLoading = false;
			},
		});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe(); // Finaliza la suscripción al salir del componente
	}
}
