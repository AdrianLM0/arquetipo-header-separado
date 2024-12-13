
import { FomentoUserComponent } from './fomento.user.component';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

describe('FomentoUserComponent', () => {
	let component: FomentoUserComponent;
	let mockDialog: MatDialog;
	let mockSanitizer: DomSanitizer;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				{
					provide: MatDialog,
					useValue: { open: jest.fn(), closeAll: jest.fn() },
				},
				{
					provide: DomSanitizer,
					useValue: { sanitize: jest.fn(), sanitizeContent: jest.fn() },
				},
			],
		});
		mockDialog = TestBed.inject(MatDialog);
		mockSanitizer = TestBed.inject(DomSanitizer);

		component = new FomentoUserComponent(mockSanitizer, mockDialog);
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('ngOnChanges', () => {
		let originalLocalStorage;

		beforeAll(() => {
			originalLocalStorage = window.localStorage;
			const localStorageMock = {
				getItem: jest.fn()
			};
			Object.defineProperty(window, 'localStorage', {
				value: localStorageMock,
				configurable: true,
			});
		});

		afterAll(() => {
			Object.defineProperty(window, 'localStorage', {
				value: originalLocalStorage,
			});
		});

		it('should reset errores and update usuario', () => {
			jest.spyOn(component, 'sanitizeContent').mockImplementation(() => 'sanitizedContent');

			// Mock the listaPrivilegios and privilegioUsuario
			component.listaPrivilegios = [
				{ codigo: 'admin', nombre: 'Admin' },
				{ codigo: 'user', nombre: 'User' }
			];
			component.privilegioUsuario = 'admin';

			jest.spyOn(window.localStorage, 'getItem').mockReturnValue('admin');

			component.usuario = '<script>alert("XSS")</script>';
			component.ngOnChanges();

			expect(component.errores).toBe(false);
			expect(component.iniciales_usuario).toBe('<S'); 
			expect(component.privilegio).toBe('Admin');
		});
	});

	describe('generarNombrePerfil', () => {
		it('should sanitize usuario and handle HTML content', () => {
			// Llamamos a la función que queremos probar
			component.usuario = '<script>alert("XSS")</script>';
			component.generarNombrePerfil();

			// Verificamos que errores sea true después de llamar a generarNombrePerfil con un usuario HTML peligroso
			expect(component.errores).toBe(true);
		});

		it('should generate nombre de perfil correctly', () => {
			component.usuario = 'Juan Perez';
			const nombrePerfil = component.generarNombrePerfil();
			expect(nombrePerfil).toBe('JP');
		});

		it('should set errores to true if usuario length is less than 5', () => {
			component.usuario = 'Ana';
			component.generarNombrePerfil();
			expect(component.errores).toBe(true);
		});
	});

	describe('clickBotonCambiaRol', () => {
		it('should emit boton_cambiaRol and open dialog', () => {
			const spyEmit = jest.spyOn(component.boton_cambiaRol, 'emit');
			component.width = '200px';
			component.height = '300px';
			component.clickBotonCambiaRol('event');
			expect(spyEmit).toHaveBeenCalledWith('event');
			expect(mockDialog.open).toHaveBeenCalledWith(component.customTemplate, {
				width: '200px',
				height: '300px',
			});
		});
	});

	describe('clickBotonLogOut', () => {
		it('should emit boton_logOut', () => {
			const spyEmit = jest.spyOn(component.boton_logOut, 'emit');
			component.clickBotonLogOut('event');
			expect(spyEmit).toHaveBeenCalledWith('event');
		});
	});

	describe('closeDialog', () => {
		it('should close dialog and disable button', () => {
			component.closeDialog();
			expect(mockDialog.closeAll).toHaveBeenCalled();
			expect(component.disabledButtonCambiar).toBe(true);
		});
	});

	describe('selectPrivilegio', () => {
		it('should set privilegioUsuario and enable button', () => {
			component.selectPrivilegio('opcion');
			expect(component.privilegioUsuario).toBe('opcion');
			expect(component.disabledButtonCambiar).toBe(false);
		});

		it('should not enable button if privilegioSeleccionado is falsy', () => {
			component.selectPrivilegio(null);
			expect(component.privilegioUsuario).toBeNull();
			expect(component.disabledButtonCambiar).toBe(true);
		});
	});
});