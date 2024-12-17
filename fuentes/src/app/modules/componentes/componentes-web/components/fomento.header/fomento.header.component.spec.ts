import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FomentoCabeceraComponent } from './fomento.header.component';
import { DomSanitizer, BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('FomentoCabeceraComponent', () => {
	let component: FomentoCabeceraComponent;
	let fixture: ComponentFixture<FomentoCabeceraComponent>;
	let originalInnerWidth: number;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FomentoCabeceraComponent],
			imports: [
				BrowserModule,
				MatToolbarModule, // Importa MatToolbarModule aquí
			],
			providers: [
				{
					provide: DomSanitizer,
					useValue: {
						sanitize: jest
							.fn()
							.mockImplementation((context, content) => `sanitized-${content}`),
					},
				},
			],
		}).compileComponents();

		fixture = TestBed.createComponent(FomentoCabeceraComponent);
		component = fixture.componentInstance;
		originalInnerWidth = window.innerWidth;
		fixture.detectChanges();
	});

	afterEach(() => {
		window.innerWidth = originalInnerWidth; // Restaura el valor original de innerWidth después de cada prueba
	});

	// Verifica si el componente se crea correctamente
	it('should create', () => {
		expect(component).toBeTruthy();
	});

	// Verifica el comportamiento de ngOnInit
	describe('ngOnInit', () => {
		it('should set an interval and call gestionResponsividad', () => {
			jest.spyOn(window, 'setInterval');
			const spyGestion = jest.spyOn(component, 'gestionResponsividad');

			component.ngOnInit();

			expect(window.setInterval).toHaveBeenCalledWith(
				expect.any(Function),
				1000,
			);
			expect(spyGestion).toHaveBeenCalled();
		});
	});

	// Verifica el comportamiento de ngOnDestroy
	describe('ngOnDestroy', () => {
		it('should clear the interval set during ngOnInit', () => {
			jest.spyOn(window, 'clearInterval');

			component.ngOnInit();
			component.ngOnDestroy();

			expect(window.clearInterval).toHaveBeenCalledWith(component.interval);
		});
	});

	// Verifica el comportamiento de ngOnChanges
	describe('ngOnChanges', () => {
		it('should call inputValidation', () => {
			const spyValidation = jest.spyOn(component, 'inputValidation');

			component.ngOnChanges();

			expect(spyValidation).toHaveBeenCalled();
		});
	});

	// Verifica el comportamiento de gestionResponsividad
	describe('gestionResponsividad', () => {
		it('should set patterns based on window width', () => {
			component.mostrarfecha = true;
			component.version = '1.0.0';

			// Caso de escritorio
			window.innerWidth = 1024;
			component.gestionResponsividad();
			expect(component.pattern).toEqual("dd 'de' MMMM y");
			expect(component.version_pattern).toEqual('Versión ');

			// Caso móvil
			window.innerWidth = 479;
			component.gestionResponsividad();
			expect(component.pattern).toEqual('dd/mm/y');
			expect(component.version_pattern).toEqual('v');
		});
	});

	// Verifica el comportamiento de inputValidation
	describe('inputValidation', () => {
		it('should validate version format and sanitize urlAyuda', () => {
			component.version = '1.0.a'; // Formato inválido
			component.urlAyuda = '<script>alert("XSS")</script>';

			const consoleSpy = jest.spyOn(console, 'log');

			component.inputValidation();

			expect(component.version).toEqual(''); // Debe vaciarse debido al formato inválido
			expect(component.urlAyuda).toEqual(
				'sanitized-<script>alert("XSS")</script>',
			); // Debe sanitizarse
			expect(consoleSpy).toHaveBeenCalledWith(expect.any(Error)); // Debe haber registrado un error
		});
	});

	// Otros casos de prueba específicos para tu componente...
});
