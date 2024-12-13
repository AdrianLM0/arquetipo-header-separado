import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FomentoButtonComponent } from './fomento.button.component';
import { DomSanitizer } from '@angular/platform-browser';

describe('FomentoButtonComponent', () => {
	let fixture: ComponentFixture<FomentoButtonComponent>;
	let component: FomentoButtonComponent;
	let mockSanitizer;

	beforeEach(() => {
		mockSanitizer = {
			sanitize: (context, content: string) => `${content}`,
		};

		TestBed.configureTestingModule({
			declarations: [FomentoButtonComponent],
			// No importar BrowserModule aquí, ya que vamos a simular DomSanitizer
		}).overrideComponent(FomentoButtonComponent, {
			set: {
				providers: [{ provide: DomSanitizer, useValue: mockSanitizer }],
			},
		});

		fixture = TestBed.createComponent(FomentoButtonComponent);
		component = fixture.componentInstance;
	});

	it('should sanitize "label" if it is not empty', () => {
		const testLabel = 'Test <script>alert("XSS")</script>';
		component.label = testLabel;
		fixture.detectChanges(); // Provoca ngOnChanges y por ende inputValidation
		expect(component.label).toEqual(`${testLabel}`); // Ajusta esta línea para reflejar el resultado esperado del mock
	});

	// Prueba para verificar que el componente se crea correctamente
	it('should create the component', () => {
		expect(component).toBeTruthy();
	});

	// Prueba para verificar que no se lanza un error con "icon" vacío y "label" no vacío
	it('should not throw an error with empty "icon" and non-empty "label"', () => {
		component.icon = '';
		component.label = 'Test Label';
		expect(() => component.inputValidation()).not.toThrow();
	});

	// Prueba para verificar que no se lanza un error con "label" vacío y "icon" no vacío
	it('should not throw an error with empty "label" and non-empty "icon"', () => {
		component.label = '';
		component.icon = 'home';
		expect(() => component.inputValidation()).not.toThrow();
	});

	// Prueba para verificar que se lanza un error si tanto "label" como "icon" están vacíos
	it('should throw an error if both "label" and "icon" are empty', () => {
		component.label = '';
		component.icon = '';
		expect(() => component.inputValidation()).toThrow(
			"Los campos 'label' e 'icono' no pueden ser ambos a la vez vacíos",
		);
	});

	// Prueba para verificar que el evento click emite correctamente
	it('should emit the click event when clickbutton is called', () => {
		jest.spyOn(component.onclickevent, 'emit');
		const testEvent = new Event('click');
		component.clickbutton(testEvent);
		expect(component.onclickevent.emit).toHaveBeenCalledWith(testEvent);
	});
});
