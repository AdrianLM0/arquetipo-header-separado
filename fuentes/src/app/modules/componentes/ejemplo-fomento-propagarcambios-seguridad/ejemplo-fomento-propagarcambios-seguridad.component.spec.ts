import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjemploFomentoPropagarcambiosSeguridadComponent } from './ejemplo-fomento-propagarcambios-seguridad.component';
import { FomentoPropagarcambiosseguridadComponent } from '@fomento/i-rf-web-component-node-lib';
import { ChangePrivilegesWebsocketConfig } from '@fomento/i-rf-web-component-node-lib';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('EjemploFomentoPropagarcambiosSeguridadComponent', () => {
	let component: EjemploFomentoPropagarcambiosSeguridadComponent;
	let fixture: ComponentFixture<EjemploFomentoPropagarcambiosSeguridadComponent>;
	let mockPropagarComponent: jest.Mocked<FomentoPropagarcambiosseguridadComponent>;

	beforeEach(async () => {
		// Crear el mock del FomentoPropagarcambiosseguridadComponent
		mockPropagarComponent = {
			initialize: jest.fn(),
			sendChangePrivileges: jest.fn(),
			// Añade las propiedades necesarias para evitar el error de tipo
			width: '',
			showbutton: false,
			typeStyle: '',
			disabled: false,
			aria_label: '',
			disableRipple: false,
			theme_boton: '',
			label_boton2: '',
			inset: false,
			vertical: false,
			color: '',
			messageEvent: '',
			typeEvent: '',
			actionEvent: '',
			broker: '',
			message: '',
			connectionUrl: '',
			closeDialog: jest.fn(),
		} as unknown as jest.Mocked<FomentoPropagarcambiosseguridadComponent>;

		await TestBed.configureTestingModule({
			declarations: [EjemploFomentoPropagarcambiosSeguridadComponent],
			providers: [
				{
					provide: FomentoPropagarcambiosseguridadComponent,
					useValue: mockPropagarComponent,
				},
			],
			schemas: [NO_ERRORS_SCHEMA], // Esto es útil si tienes problemas con componentes hijos
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(
			EjemploFomentoPropagarcambiosSeguridadComponent,
		);
		component = fixture.componentInstance;

		// Configurar el ViewChild manualmente
		component.propagar = mockPropagarComponent;

		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should initialize propagar component', () => {
		expect(mockPropagarComponent.initialize).toHaveBeenCalledWith(
			expect.any(ChangePrivilegesWebsocketConfig),
		);
	});
});
