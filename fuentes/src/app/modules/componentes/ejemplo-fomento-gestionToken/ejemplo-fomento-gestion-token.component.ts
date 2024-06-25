import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GestionTokenService } from '@fomento/i-rf-security-component-node-lib';
import { KeycloakService } from 'keycloak-angular';

@Component({
	selector: 'app-ejemplo-fomento-gestion-token',
	templateUrl: './ejemplo-fomento-gestion-token.component.html',
	styleUrls: ['./ejemplo-fomento-gestion-token.component.scss'],
})
export class EjemploFomentoGestionTokenComponent {
	logsForHtml: string[] = [];
	permisosContrastados = [];
	permisosContrastadosFiltrados = [];
	permisosDeRecursoConcreto = [];
	permisosDeRecursoConcretoFiltrados = [];
	codigoRecurso = ''; // Variable para almacenar el valor del input
	token: string;
	decodedPayload;
	privilegiosFomentoCodes;
	authorities;
	userProfile;
	privilegios;
	username: string;
	isTokenExpiredVar: boolean;
	tokenUpdated: boolean;
	loggedIn = false;
	errorEnLogica: string;
	mostrarbotonesdirectiva = false;

	constructor(
		private keycloakService: KeycloakService,
		private http: HttpClient,
		private gestionTokenService: GestionTokenService,
	) {}

	showTokenInfo() {
		this.gestionTokenService.showTokenInfo();
	}

	async obtenerPermisosUsuarioDesdeToken() {
		try {
			const token = await this.gestionTokenService.getToken();
			const qAplicacion = localStorage.getItem(`qAplicacion_actual`);
			const baseUrl = 'http://192.168.0.81:8081';
			this.gestionTokenService.obteneryGuardarMetadatos(qAplicacion, baseUrl);
			this.permisosContrastados =
				await this.gestionTokenService.obtenerPermisosPrivilegioDesdeToken(
					token,
					qAplicacion,
				);
			console.log(
				'PERMISOS CONTRASTADOS (obtenerPermisosUsuarioDesdeToken)',
				this.permisosContrastados,
			);
			this.filtrarPermisosContrastados();
		} catch (error) {
			console.error('Error en la lógica completa:', error);
		}
	}

	async obtenerPermisosDeRecursoConcreto() {
		try {
			const token = await this.gestionTokenService.getToken();
			const qAplicacion = localStorage.getItem(`qAplicacion_actual`);
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
		} catch (error) {
			console.error('Error en la lógica completa:', error);
		}
	}

	convertirAJson(objeto): string {
		return JSON.stringify(objeto, null, 2); // Formatea el JSON para una mejor legibilidad
	}

	actualizarCodigoRecurso(event: Event) {
		const input = event.target as HTMLInputElement;
		this.codigoRecurso = input.value;
	}

	filtrarPermisosContrastados() {
		this.permisosContrastadosFiltrados = this.permisosContrastados.map(
			(permiso) => ({
				codigoRecurso: permiso.recurso.codigo,
				permisosPrivilegio: permiso.permisosPrivilegio,
				privilegio: permiso.privilegio,
			}),
		);
	}

	filtrarPermisosDeRecursoConcreto() {
		this.permisosDeRecursoConcretoFiltrados =
			this.permisosDeRecursoConcreto.map((permiso) => ({
				codigoRecurso: permiso.recurso.codigo,
				permisosPrivilegio: permiso.permisosPrivilegio,
				privilegio: permiso.privilegio,
			}));
	}

	//TODO: PRUEBA TEMPORAL PARA SETEAR Privilegio, HASTA QUE SE IMPLEMENTE LA LOGICA:
	guardarPrivilegioenSesion() {
		localStorage.setItem(`privilegio_actual`, 'ADM_EIT');
	}

	//TODO: PRUEBA TEMPORAL PARA SETEAR qAplicacion, HASTA QUE SE IMPLEMENTE LA LOGICA:
	guardarQAplicacionenSesion() {
		localStorage.setItem(`qAplicacion_actual`, '10190668');
	}
}
