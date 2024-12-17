import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FomentoCardComponent } from './fomento.card.component';
import { By } from '@angular/platform-browser';
import '@matter/matter-card/dist/matter-card';
import { MatCardModule } from '@angular/material/card';
import { MockComponent } from 'ng-mocks';
import { FomentoButtonComponent } from '../fomento.button/fomento.button.component';

describe('FomentoCardComponent', () => {
	let fixture: ComponentFixture<FomentoCardComponent>;
	let component: FomentoCardComponent;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				FomentoCardComponent,
				MockComponent(FomentoButtonComponent),
			],
			imports: [MatCardModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FomentoCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	describe('Ciclo de vida del componente', () => {
		describe('ngOnInit', () => {
			it('should call InputValidation method', () => {
				const inputValidationSpy = jest.spyOn(component, 'inputValidation');
				component.ngOnInit();
				expect(inputValidationSpy).toHaveBeenCalledTimes(1);
			});
		});
	});

	describe('Version display', () => {
		describe('Choose matter version', () => {
			it('should show matter-header component', () => {
				component.typeStyle = 'matter';
				fixture.detectChanges();
				expect(
					fixture.debugElement.query(By.css('matter-card')),
				).not.toBeNull();
			});

			it('should hide material nav component', () => {
				component.typeStyle = 'matter';
				fixture.detectChanges();
				expect(fixture.debugElement.query(By.css('mat-card'))).toBeNull();
			});
		});

		describe('Choose material version', () => {
			it('should show material nav component', () => {
				component.typeStyle = 'material';
				fixture.detectChanges();
				expect(fixture.debugElement.query(By.css('mat-card'))).not.toBeNull;
			});

			it('should hide matter-header component', () => {
				component.typeStyle = 'material';
				fixture.detectChanges();
				expect(fixture.debugElement.query(By.css('matter-card'))).toBeNull;
			});
		});
	});

	describe('InputValidation method test', () => {
		it('should reply against HTML injection attacks', () => {
			component.title = "<script>alert('Hola Mundo')</script>";
			fixture.detectChanges();
			const ConsoleSpy = jest.spyOn(console, 'log');
			component.inputValidation();
			expect(ConsoleSpy).toHaveBeenCalledWith(
				"Intento de ataque vía 'HTML injection'",
			);
		});
	});
});
