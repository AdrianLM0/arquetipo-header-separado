import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import decode from 'jwt-decode';
import { LocalstorageService } from './localstorage.service';
import {
	ActivatedRouteSnapshot,
	Router,
	RouterStateSnapshot,
} from '@angular/router';
import { GestionTokenService } from './fomento.gestionToken/gestionToken.service';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(
		private keycloakService: KeycloakService,
		private localStorage: LocalstorageService,
		public router: Router,
		private gestionTokenService: GestionTokenService,
	) {}

	// Inicia sesión utilizando Keycloak
	login() {
		return this.keycloakService.login();
	}

	// Cierra la sesión utilizando Keycloak
	logout(key: string, redirectUri?: string) {
		this.localStorage.remove(key); // Limpia el almacenamiento local al cerrar sesión
		// Aquí se proporciona un ejemplo de cómo manejar el redireccionamiento post-logout.
		return this.keycloakService.logout(redirectUri);
	}

	// Verifica si el usuario está actualmente autenticado
	isLoggedIn(): Promise<boolean> {
		return this.keycloakService.isLoggedIn();
	}

	// Carga el perfil del usuario autenticado
	getUserProfile() {
		return this.keycloakService.loadUserProfile();
	}

	// Obtiene el token JWT del usuario autenticado
	getToken(): Promise<string> {
		return this.keycloakService.getToken();
	}

	storageToken(): Promise<void> {
		return this.getToken().then((token) => {
			this.localStorage.set('token', token); // Almacena el token en el almacenamiento local
		});
	}

	// Decodifica el token JWT para extraer la información del usuario
	decodeToken(): Promise<unknown> {
		return this.getToken().then((token) => decode(token));
	}

	hasRoles(roles: string[]): Promise<boolean> {
		// Mejora para verificar múltiples roles; considera si se necesitan roles del realm o del cliente
		return Promise.all(
			roles.map((role) => this.keycloakService.isUserInRole(role, 'realm')),
		).then((results) => results.some((hasRole) => hasRole === true));
	}

	getLoggedUser() {
		return this.keycloakService.getKeycloakInstance();
	}

	getRoles(): string[] {
		return this.keycloakService.getUserRoles();
	}

	//Verifica si el usuario está autenticado y el token no ha expirado
	isAuthenticate(): boolean {
		const isLoggedIn = this.keycloakService.isLoggedIn();
		const isTokenExpired = this.keycloakService.isTokenExpired();
		return isLoggedIn && !isTokenExpired;
	}

	async canActivate(
		currentRouteSnapshot: ActivatedRouteSnapshot,
		currentRouteState: RouterStateSnapshot,
	): Promise<boolean> {
		let permission: boolean = false;

		const requestservice = currentRouteSnapshot.paramMap.get('requestservice');
		const enAutenticacion =
			localStorage.getItem('enAutenticacion') == null
				? 'N'
				: localStorage.getItem('enAutenticacion');

		if (!this.keycloakService.isLoggedIn()) {
			try {
				await this.keycloakService.login();
				permission = await this.userChecksAuthorization(
					currentRouteSnapshot,
					requestservice,
				);
			} catch (error) {
				console.error(error);
				permission = false;
			}
		} else {
			permission = await this.userChecksAuthorization(
				currentRouteSnapshot,
				requestservice,
			);
		}

		return permission;
	}

	getRequiredRoles(route: any): any[] {
		return route.data.roles;
	}

	userChecksAuthorization(route: any, requestservice: string) {
		const requiredRoles = this.getRequiredRoles(route); // recuperar los datos de rutas independientemente de la ruta
		let granted = false;

		if (!requiredRoles || requiredRoles.length === 0) {
			granted = true;
		} else {
			const tokenPromise = this.keycloakService.getToken(); // Obtener la promesa del token
			return tokenPromise
				.then((token) => {
					// Utilizar .then para manejar el token
					const decodedPayload = this.gestionTokenService.decodeToken(token);
					let rolesToken =
						this.gestionTokenService.extractPrivilegiosFomentoCodes(
							decodedPayload,
						);
					if (!rolesToken || rolesToken.length === 0) {
						granted = false;
					} else {
						granted = true;
						for (const requiredRole of requiredRoles) {
							if (rolesToken.indexOf(requiredRole) === -1) {
								granted = false;
								break;
							}
						}
					}
					return granted; // Devolver el resultado al final de la cadena de promesas
				})
				.catch((error) => {
					console.error('Error al obtener el token:', error);
					return false; // Manejar cualquier error y devolver false
				});
		}

		return Promise.resolve(granted); // Devolver una promesa resuelta
	}
}
