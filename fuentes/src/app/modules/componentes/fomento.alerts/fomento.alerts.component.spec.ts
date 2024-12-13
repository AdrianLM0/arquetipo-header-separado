import {
	FomentoAlertsComponent,
	Notification,
} from './fomento.alerts.component';
import { NotifierService } from 'angular-notifier';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('FomentoAlertsComponent', () => {
	let component: FomentoAlertsComponent;
	let fixture: ComponentFixture<FomentoAlertsComponent>;
	let mockNotifierService: jest.Mocked<NotifierService>;

	beforeEach(async () => {
		mockNotifierService = {
			show: jest.fn(),
			hide: jest.fn(),
		} as unknown as jest.Mocked<NotifierService>;

		await TestBed.configureTestingModule({
			declarations: [FomentoAlertsComponent],
			providers: [{ provide: NotifierService, useValue: mockNotifierService }],
		}).compileComponents();

		fixture = TestBed.createComponent(FomentoAlertsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have default input values', () => {
		expect(component.labelBotonera).toBe('ACCIÓN');
		expect(component.textoPrimerBoton).toBe('CANCELAR');
		expect(component.textoSegundoBoton).toBe('ACEPTAR');
		expect(component.notifications).toEqual([]);
	});

	it('should display a notification of type success', () => {
		const notifications: Notification[] = [
			{ title: 'Success', message: 'Success Message' },
		];
		component.showPagedNotification(notifications, 'success');
		expect(mockNotifierService.show).toHaveBeenCalledWith(
			expect.objectContaining({
				type: 'success',
			}),
		);
	});

	it('should display a notification of type error', () => {
		const notifications: Notification[] = [
			{ title: 'Error', message: 'Error Message' },
		];
		component.showPagedNotification(notifications, 'error');
		expect(mockNotifierService.show).toHaveBeenCalledWith(
			expect.objectContaining({
				type: 'error',
			}),
		);
	});

	// Similar tests for 'warning', 'info', and other types

	it('should display a notification of type warning', () => {
		const notifications: Notification[] = [
			{ title: 'warning', message: 'warning Message' },
		];
		component.showPagedNotification(notifications, 'warning');
		expect(mockNotifierService.show).toHaveBeenCalledWith(
			expect.objectContaining({
				type: 'warning',
			}),
		);
	});

	it('should display a notification of type info', () => {
		const notifications: Notification[] = [
			{ title: 'info', message: 'info Message' },
		];
		component.showPagedNotification(notifications, 'info');
		expect(mockNotifierService.show).toHaveBeenCalledWith(
			expect.objectContaining({
				type: 'info',
			}),
		);
	});

	it('should hide a notification', () => {
		const notificationId = 'test-id';
		component.hide(notificationId);
		expect(mockNotifierService.hide).toHaveBeenCalledWith(notificationId);
	});

	it('should handle next notification correctly', () => {
		const notifications: Notification[] = [
			{ title: 'First', message: 'First Message' },
			{ title: 'Second', message: 'Second Message' },
		];
		component.showPagedNotification(notifications, 'info');
		component.nextNotification({ type: 'info' });
		expect(component.currentIndex).toBe(1);
	});

	it('should handle previous notification correctly', () => {
		const notifications: Notification[] = [
			{ title: 'First', message: 'First Message' },
			{ title: 'Second', message: 'Second Message' },
		];
		component.showPagedNotification(notifications, 'info');
		component.currentIndex = 1; // Set manually for the purpose of the test
		component.previousNotification({ type: 'info' });
		expect(component.currentIndex).toBe(0);
	});

	it('should not go beyond the first notification when navigating previous', () => {
		const notifications: Notification[] = [
			{ title: 'Only', message: 'Only Message' },
		];
		component.showPagedNotification(notifications, 'info');
		component.previousNotification({ type: 'info' });
		expect(component.currentIndex).toBe(0);
	});

	it('should not go beyond the last notification when navigating next', () => {
		const notifications: Notification[] = [
			{ title: 'Only', message: 'Only Message' },
		];
		component.showPagedNotification(notifications, 'info');
		component.nextNotification({ type: 'info' });
		expect(component.currentIndex).toBe(0);
	});

	it('should perform primary button action when clicked', () => {
		const mockPrimaryAction = jest.fn();
		component.onPrimaryButtonClick = mockPrimaryAction;
		component.primerBotonActionClicked({});
		expect(mockPrimaryAction).toHaveBeenCalled();
	});

	it('should perform secondary button action when clicked', () => {
		const mockSecondaryAction = jest.fn();
		component.onSecondaryButtonClick = mockSecondaryAction;
		component.segundoBotonActionClicked({});
		expect(mockSecondaryAction).toHaveBeenCalled();
	});

	it('should display a notification with correct template based on type', () => {
		// Asegúrate de que las plantillas estén inicializadas si son necesarias en tu componente
		component.customNotificationTmplSuccess = 'success-template';
		component.customNotificationTmplError = 'error-template';
		component.customNotificationTmplWarnig = 'warning-template';
		component.customNotificationTmplAdvise = 'info-template';

		const notifications: Notification[] = [
			{ title: 'Info', message: 'Info Message' },
		];
		component.showPagedNotification(notifications, 'info');
		expect(mockNotifierService.show).toHaveBeenCalledWith(
			expect.objectContaining({
				template: 'info-template',
			}),
		);

		component.showPagedNotification(notifications, 'success');
		expect(mockNotifierService.show).toHaveBeenCalledWith(
			expect.objectContaining({
				template: 'success-template',
			}),
		);

		// Continúa con las pruebas para otros tipos y plantillas
	});

	it('should update action button texts and labels', () => {
		const notifications: Notification[] = [
			{ title: 'Test', message: 'Test Message' },
		];
		component.showPagedNotification(
			notifications,
			'info',
			true,
			true,
			null,
			null,
			'TEST ACTION',
			'BTN1',
			'BTN2',
		);

		expect(component.labelBotonera).toBe('TEST ACTION');
		expect(component.textoPrimerBoton).toBe('BTN1');
		expect(component.textoSegundoBoton).toBe('BTN2');
	});

	it('should handle default actions when button actions are not provided', () => {
		const notifications: Notification[] = [
			{ title: 'Test', message: 'Test Message' },
		];
		component.showPagedNotification(notifications, 'info', true, true);

		// Simulación de clic de botón sin acciones proporcionadas
		component.primerBotonActionClicked({});
		expect(component.onPrimaryButtonClick).toBeDefined();

		component.segundoBotonActionClicked({});
		expect(component.onSecondaryButtonClick).toBeDefined();
	});

	it('should display a notification with correct template based on type', () => {
		// Asegúrate de que las plantillas estén inicializadas si son necesarias en tu componente
		component.customNotificationTmplSuccess = 'success-template';
		component.customNotificationTmplError = 'error-template';
		component.customNotificationTmplWarnig = 'warning-template';
		component.customNotificationTmplAdvise = 'info-template';

		const notifications: Notification[] = [
			{ title: 'Info', message: 'Info Message' },
		];

		component.showPagedNotification(notifications, 'info');
		expect(mockNotifierService.show).toHaveBeenCalledWith(
			expect.objectContaining({
				template: 'info-template',
			}),
		);

		component.showPagedNotification(notifications, 'success');
		expect(mockNotifierService.show).toHaveBeenCalledWith(
			expect.objectContaining({
				template: 'success-template',
			}),
		);

		component.showPagedNotification(notifications, 'warning');
		expect(mockNotifierService.show).toHaveBeenCalledWith(
			expect.objectContaining({
				template: 'warning-template',
			}),
		);

		component.showPagedNotification(notifications, 'error');
		expect(mockNotifierService.show).toHaveBeenCalledWith(
			expect.objectContaining({
				template: 'error-template',
			}),
		);
	});

	it('should update action button texts and labels', () => {
		const notifications: Notification[] = [
			{ title: 'Test', message: 'Test Message' },
		];
		component.showPagedNotification(
			notifications,
			'info',
			true,
			true,
			null,
			null,
			'TEST ACTION',
			'BTN1',
			'BTN2',
		);

		expect(component.labelBotonera).toBe('TEST ACTION');
		expect(component.textoPrimerBoton).toBe('BTN1');
		expect(component.textoSegundoBoton).toBe('BTN2');
	});

	it('should handle default actions when button actions are not provided', () => {
		const notifications: Notification[] = [
			{ title: 'Test', message: 'Test Message' },
		];
		component.showPagedNotification(notifications, 'info', true, true);

		// Simulación de clic de botón sin acciones proporcionadas
		component.primerBotonActionClicked({});
		expect(component.onPrimaryButtonClick).toBeDefined();

		component.segundoBotonActionClicked({});
		expect(component.onSecondaryButtonClick).toBeDefined();
	});
});
