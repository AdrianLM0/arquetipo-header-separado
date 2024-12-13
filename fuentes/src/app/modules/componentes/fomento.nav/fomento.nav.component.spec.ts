import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FomentoNavComponent } from './fomento.nav.component';
import { FomentoCabeceraComponent } from '../fomento.header/fomento.header.component';
import { FomentoMenuComponent } from '../fomento.menu/fomento.menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MockComponent } from 'ng-mocks';
import { FomentoBrandComponent } from '../fomento.brand/fomento.brand.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';
import '@matter/matter-header/dist/matter-header';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('FomentoNavComponent', () => {
	let component: FomentoNavComponent;
	let fixture: ComponentFixture<FomentoNavComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				FomentoNavComponent,
				MockComponent(FomentoCabeceraComponent),
				MockComponent(FomentoBrandComponent),
				MockComponent(FomentoMenuComponent),
			],
			imports: [MatMenuModule, MatToolbarModule],
			schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FomentoNavComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	describe('Ciclo de vida del componente', () => {
		describe('ngOnChanges', () => {
			it('should call the inputValidation method', () => {
				const inputValidationSpy = jest.spyOn(component, 'inputValidation');
				component.ngOnChanges();
				expect(inputValidationSpy).toHaveBeenCalledTimes(1);
			});
		});
	});

	describe('inputValidation method', () => {
		it('should pass if "typestyle" param is correct', () => {
			component.typeStyle = 'matter';
			const consoleSpy = jest.spyOn(console, 'log');
			fixture.detectChanges();
			component.inputValidation();
			component.typeStyle = 'material';
			fixture.detectChanges();
			component.inputValidation();
			expect(consoleSpy).toHaveBeenCalledTimes(0);
		});

		it('should give an error if "typestyle" is not correct', () => {
			const consoleSpy = jest.spyOn(console, 'log');
			component.typeStyle = 'mvtter';
			fixture.detectChanges();
			component.inputValidation();
			expect(consoleSpy).toHaveBeenCalledWith(
				"Error => Has especificado un tipo de estilo que no es ni 'matter' ni 'material'",
			);
		});
	});

	describe('Version display', () => {
		describe('Choose matter version', () => {
			it('should show matter-header component', () => {
				component.typeStyle = 'matter';
				fixture.detectChanges();
				expect(
					fixture.debugElement.query(By.css('matter-header')),
				).not.toBeNull();
			});

			it('should hide material nav component', () => {
				component.typeStyle = 'matter';
				fixture.detectChanges();
				expect(
					fixture.debugElement.query(By.css('.example-spacer')),
				).toBeNull();
			});
		});

		describe('Choose material version', () => {
			it('should show material nav component', () => {
				component.typeStyle = 'material';
				fixture.detectChanges();
				expect(fixture.debugElement.query(By.css('.example-spacer'))).not
					.toBeNull;
			});

			it('should hide matter-header component', () => {
				component.typeStyle = 'material';
				fixture.detectChanges();
				expect(fixture.debugElement.query(By.css('matter-header'))).toBeNull;
			});
		});
	});

	describe('MostrarDesplegable event', () => {
		it('should calls MostrarDesplegable method when icon is click', () => {
			const eventSpy = jest.spyOn(component, 'mostrarDesplegable');
			const icon: HTMLButtonElement = fixture.debugElement.query(
				By.css('.iconoRes'),
			).nativeElement;
			icon.click();
			expect(eventSpy).toHaveBeenCalledTimes(1);
		});

		it('should work correctly', () => {
			const icon: HTMLButtonElement = fixture.debugElement.query(
				By.css('.iconoRes'),
			).nativeElement;
			icon.click();
			fixture.detectChanges();
			expect(fixture.debugElement.query(By.css('.responsive'))).not.toBeNull;
			icon.click();
			fixture.detectChanges();
			expect(fixture.debugElement.query(By.css('.responsive'))).toBeNull;
		});
	});
});
