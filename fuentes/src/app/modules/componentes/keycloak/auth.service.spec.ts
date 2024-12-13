import { AuthService } from './auth.service';
import { KeycloakService } from 'keycloak-angular';
import { LocalstorageService } from './localstorage.service';
import { Router } from '@angular/router';
import { GestionTokenService } from './fomento.gestionToken/gestionToken.service';

describe('AuthService', () => {
	let service: AuthService;
	let keycloakServiceMock: jest.Mocked<KeycloakService>;
	let localStorageServiceMock: jest.Mocked<LocalstorageService>;
	let routerMock: jest.Mocked<Router>;
	let gestionTokenServiceMock: jest.Mocked<GestionTokenService>;

	beforeEach(() => {
		keycloakServiceMock = {
			login: jest.fn(),
			logout: jest.fn(),
			isLoggedIn: jest.fn(),
			loadUserProfile: jest.fn(),
			getToken: jest.fn(),
			isUserInRole: jest.fn(),
			getKeycloakInstance: jest.fn(),
			getUserRoles: jest.fn(),
			isTokenExpired: jest.fn(),
		} as unknown as jest.Mocked<KeycloakService>;

		localStorageServiceMock = {
			set: jest.fn(),
			remove: jest.fn(),
			get: jest.fn(),
		} as unknown as jest.Mocked<LocalstorageService>;

		routerMock = {
			navigate: jest.fn(), // Mock para el método navigate
			navigateByUrl: jest.fn(), // Mock para el método navigateByUrl
			serializeUrl: jest.fn(), // Mock para el método serializeUrl
			parseUrl: jest.fn(), // Mock para el método parseUrl
		} as unknown as jest.Mocked<Router>;

		gestionTokenServiceMock = {
			obtenerPermisosRolDesdeToken: jest.fn(),
			decodeToken: jest.fn(),
			extractRolesFomentoCodes: jest.fn(),
		} as unknown as jest.Mocked<GestionTokenService>;

		service = new AuthService(
			keycloakServiceMock,
			localStorageServiceMock,
			routerMock,
			gestionTokenServiceMock,
		);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should call keycloakService login method', () => {
		service.login();
		expect(keycloakServiceMock.login).toHaveBeenCalled();
	});

	it('should call keycloakService logout method and remove token from localStorage', () => {
		const redirectUri = 'example.com';
		service.logout('token', redirectUri);
		expect(localStorageServiceMock.remove).toHaveBeenCalledWith('token');
		expect(keycloakServiceMock.logout).toHaveBeenCalledWith(redirectUri);
	});

	it('should call keycloakService isLoggedIn method', async () => {
		keycloakServiceMock.isLoggedIn.mockResolvedValue(true);
		const result = await service.isLoggedIn();
		expect(result).toBe(true);
	});

	it('should call keycloakService loadUserProfile method', async () => {
		const userProfile = {
			/* mocked user profile */
		};
		keycloakServiceMock.loadUserProfile.mockResolvedValue(userProfile);
		const result = await service.getUserProfile();
		expect(result).toEqual(userProfile);
	});

	/*
  it('should call gestionTokenService decodeToken and extractRolesFomentoCodes methods when calling userChecksAuthorization', async () => {
    const route = { data: { roles: ['role1', 'role2'] } };
    const requestService = 'exampleService';
    const token = 'mockedToken';
    const decodedPayload = { 

      /* mocked decoded payload 
      roles: ['role1', 'role2'],
      'authorities': [
        { 
          recurso: 'codigo_recurso_1',
          aplicacion: 'aplicacion_1',
          acciones: 255, // ejemplificar acciones permitidas
          rol: 'rol_1' // ejemplificar el rol asociado
        },
        { 
          recurso: 'codigo_recurso_2',
          aplicacion: 'aplicacion_2',
          acciones: 127, // ejemplificar acciones permitidas
          rol: 'rol_2' // ejemplificar el rol asociado
        },
        // agregar más authorities si es necesario
      ]
    };   
    keycloakServiceMock.getToken.mockResolvedValue(token);
    gestionTokenServiceMock.decodeToken.mockResolvedValue(decodedPayload);
    gestionTokenServiceMock.extractRolesFomentoCodes.mockReturnValue(['role1', 'role2']);

    const result = await service.userChecksAuthorization(route, requestService);

    expect(keycloakServiceMock.getToken).toHaveBeenCalled();
    expect(gestionTokenServiceMock.decodeToken).toHaveBeenCalledWith(token);
    expect(gestionTokenServiceMock.extractRolesFomentoCodes).toHaveBeenCalledWith(decodedPayload);
    expect(result).toBe(true);
  });
  */
});
