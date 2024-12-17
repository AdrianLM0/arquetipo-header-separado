import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FomentoCheckboxComponent } from './fomento.checkbox.component';
import { MockModule } from 'ng-mocks';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { By } from '@angular/platform-browser';
import '@matter/matter-checkbox/dist/matter-checkbox';

describe('FomentoCheckboxComponent', () => {
	let component: FomentoCheckboxComponent;
	let fixture: ComponentFixture<FomentoCheckboxComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FomentoCheckboxComponent],
			imports: [MockModule(MatCheckboxModule)],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FomentoCheckboxComponent);
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
		it('should work well if every param is correct', () => {
			component.label = 'hola';
			const ConsoleSpy = jest.spyOn(console, 'log');
			component.inputValidation();
			expect(ConsoleSpy).toHaveBeenCalledTimes(0);
		});

		it('should prevent "HTML injection" in "label"', () => {
			component.label = "<script>alert('Hola Mundo')</script>";
			const ConsoleSpy = jest.spyOn(console, 'log');
			component.inputValidation();
			expect(ConsoleSpy).toHaveBeenCalledWith(
				"Intento de ataque vía 'HTML injection'",
			);
		});
	});

	describe('Version display', () => {
		describe('Choose matter version', () => {
			it('should show matter-checkbox', () => {
				component.typeStyle = 'matter';
				fixture.detectChanges();
				expect(
					fixture.debugElement.query(By.css('matter-checkbox')),
				).not.toBeNull();
			});

			it('should hide material checkbox', () => {
				component.typeStyle = 'matter';
				fixture.detectChanges();
				expect(fixture.debugElement.query(By.css('.labelCheckbox'))).toBeNull();
			});
		});

		describe('Choose material version', () => {
			it('should show material checkbox', () => {
				component.typeStyle = 'material';
				fixture.detectChanges();
				expect(
					fixture.debugElement.query(By.css('.labelCheckbox')),
				).not.toBeNull();
			});

			it('should hide matter-checkbox', () => {
				component.typeStyle = 'material';
				fixture.detectChanges();
				expect(
					fixture.debugElement.query(By.css('matter-checkbox')),
				).toBeNull();
			});
		});
	});
});
