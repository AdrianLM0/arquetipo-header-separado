import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FomentoStepperComponent } from './fomento.stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { Component, ViewChild } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

@Component({
	template: `
		<lib-fomento-stepper orientation="horizontal">
			<ng-template>Buenos días</ng-template>
			<ng-template>Buenas tardes</ng-template>
		</lib-fomento-stepper>
	`,
})
class WrapperComponent {
	@ViewChild(FomentoStepperComponent, { static: true }) appComponentRef:
		| FomentoStepperComponent
		| undefined;
}

describe('FomentoStepperComponent', () => {
	let component: FomentoStepperComponent;
	let fixture: ComponentFixture<WrapperComponent>;

	beforeEach(async () => {
		TestBed.configureTestingModule({
			declarations: [FomentoStepperComponent, WrapperComponent],
			imports: [MatStepperModule, BrowserAnimationsModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(WrapperComponent);
		const app = fixture.debugElement.componentInstance;
		component = app.appComponentRef;
		fixture.detectChanges();
	});

	describe('FomentoStepper', () => {
		describe('Ciclo de vida del componente', () => {
			describe('ngOnChanges', () => {
				it('should call inputValidation method', () => {
					const inputValidationSpy = jest.spyOn(component, 'inputValidation');
					component.ngOnChanges();
					expect(inputValidationSpy).toHaveBeenCalledTimes(1);
				});
			});
		});
	});

	describe('Gestión de los pasos', () => {
		describe('Método avanzar un paso', () => {
			it('should add active class correctly', () => {
				component.ngAfterContentInit();
				component.activarPaso(0);
				const barra = fixture.debugElement.query(
					By.css('.mat-stepper-horizontal-line'),
				).classes;
				expect(barra['active']).toBeTruthy();
			});
		});

		describe('Método reiniciar paso', () => {
			it('should disappear active class', () => {
				component.ngAfterContentInit();
				component.activarPaso(0);
				component.limpiarPaso();
				const barra = fixture.debugElement.query(
					By.css('.mat-stepper-horizontal-line'),
				).classes;
				expect(barra['active']).not.toBeTruthy();
			});
		});
	});

	describe('inputValidation method', () => {
		it('should work well if every param is fine', () => {
			const consoleSpy = jest.spyOn(console, 'log');
			component.steps.length = 3;
			component.inputValidation();
			expect(consoleSpy).toHaveBeenCalledTimes(0);
		});

		it("should give an error if there isn't step enough", () => {
			const consoleSpy = jest.spyOn(console, 'log');
			component.steps.length = 1;
			component.inputValidation();
			expect(consoleSpy)
				.toHaveBeenCalledWith(`Error: El asistente de pasos debe incluir al menos más de un paso, para añadir un paso usa el componente
      <ng-template> dentro de la definición de <fomento-stepper>`);
		});
	});
});
