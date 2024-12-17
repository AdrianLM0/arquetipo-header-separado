import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FomentoDisclaimerComponent } from './fomento.disclaimer.component';
import { DomSanitizer } from '@angular/platform-browser';
import { SecurityContext } from '@angular/core';

describe('FomentoDisclaimerComponent', () => {
	let component: FomentoDisclaimerComponent;
	let fixture: ComponentFixture<FomentoDisclaimerComponent>;
	let sanitizer: DomSanitizer;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FomentoDisclaimerComponent],
			providers: [
				{
					provide: DomSanitizer,
					useValue: {
						sanitize: jest
							.fn()
							.mockImplementation((context, content) => content),
						// bypassSecurityTrustHtml ya no es necesario, por lo que se elimina
					},
				},
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FomentoDisclaimerComponent);
		component = fixture.componentInstance;
		sanitizer = TestBed.inject(DomSanitizer);
		fixture.detectChanges();
	});

	it('should create the component', () => {
		expect(component).toBeTruthy();
	});

	it('should emit aceptarClick event when buttonAceptar is called', () => {
		const aceptarSpy = jest.spyOn(component.aceptarClick, 'emit');
		component.buttonAceptar();
		expect(aceptarSpy).toHaveBeenCalled();
	});

	it('should emit closeSesion event when buttonCloseSesion is called', () => {
		const closeSesionSpy = jest.spyOn(component.closeSesion, 'emit');
		component.buttonCloseSesion();
		expect(closeSesionSpy).toHaveBeenCalled();
	});

	it('should sanitize parrafo HTML in ngOnInit', () => {
		// Preparar el valor de 'parrafo' antes de llamar a ngOnInit
		component.parrafo = '<a href="#">Test Link</a>';

		// Ejecutar ngOnInit para activar la lógica de sanitización
		component.ngOnInit();

		// Verificar que 'sanitize' fue llamado con el contenido correcto y contexto
		expect(sanitizer.sanitize).toHaveBeenCalledWith(
			SecurityContext.HTML,
			component.parrafo,
		);

		// Verificar que el contenido sanitizado se asigna correctamente a 'parrafoSeguro'
		expect(component.parrafoSeguro).toEqual(component.parrafo);
	});
});
