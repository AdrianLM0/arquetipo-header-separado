import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjemploFomentoFormularioComponent } from './ejemplo-fomento-formulario.component';
import { Constants } from '../../../config/constants';

describe('EjemploFomentoFormularioComponent', () => {
	let component: EjemploFomentoFormularioComponent;
	let fixture: ComponentFixture<EjemploFomentoFormularioComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [EjemploFomentoFormularioComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(EjemploFomentoFormularioComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should initialize form_config correctly', () => {
		expect(component.form_config).toEqual(Constants.EJEMPLO_FORMULARIO);
	});

	it('should set reset_button text correctly', () => {
		expect(component.reset_button).toBe('TRAMITAR');
	});

	it('should set submit_button text correctly', () => {
		expect(component.submit_button).toBe('GUARDAR');
	});

	it('should show submit button by default', () => {
		expect(component.showSubmit).toBe(true);
	});

	it('should show reset button by default', () => {
		expect(component.showReset).toBe(true);
	});

	it('should log form data when prueba method is called', () => {
		const consoleSpy = jest.spyOn(console, 'log');
		const testData = { example: 'data' };
		component.dataEvent(testData);
		expect(consoleSpy).toHaveBeenCalledWith('FORMULARIO RECIBIDO', testData);
	});
});
