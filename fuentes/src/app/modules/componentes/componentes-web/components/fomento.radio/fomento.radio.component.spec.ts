import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomentoRadioComponent } from './fomento.radio.component';
import { By } from '@angular/platform-browser';
import { MatRadioModule } from '@angular/material/radio';

describe('FomentoRadioComponent', () => {
	let component: FomentoRadioComponent;
	let fixture: ComponentFixture<FomentoRadioComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FomentoRadioComponent],
			imports: [MatRadioModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FomentoRadioComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	describe('Ciclo de vida del componente', () => {
		describe('ngOnInit', () => {
			it('should call inputValidation method', () => {
				const inputValidationSpy = jest.spyOn(component, 'inputValidation');
				component.ngOnInit();
				expect(inputValidationSpy).toHaveBeenCalledTimes(1);
			});
		});
	});
	describe('Input Validation', () => {
		it('should work well with no wrong "label"', () => {
			component.label = 'hola';
			const ConsoleSpy = jest.spyOn(console, 'log');
			component.inputValidation();
			expect(ConsoleSpy).toHaveBeenCalledTimes(0);
		});
	});
	it('should prevent "HTML injection" in "label"', () => {
		component.label = "<script>alert('Hola Mundo')</script>";
		const ConsoleSpy = jest.spyOn(console, 'log');
		component.inputValidation();
		expect(ConsoleSpy).toHaveBeenCalledWith(
			new Error("Intento de ataque vía 'HTML injection'"),
		);
	});

	describe('Component display', () => {
		it('should display label correctly', () => {
			component.label = 'Hola';
			fixture.detectChanges();
			const res = fixture.debugElement.query(By.css('label'))
				.nativeElement as HTMLLabelElement;
			const label = res.textContent?.trim();
			expect(label).toEqual(component.label);
		});
	});
});
