import { By } from '@angular/platform-browser';
import { FomentoProgressBarComponent } from './fomento.progress-bar.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatProgressBarModule } from '@angular/material/progress-bar';

describe('FomentoProgressBarComponent', () => {
	let component: FomentoProgressBarComponent;
	let fixture: ComponentFixture<FomentoProgressBarComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FomentoProgressBarComponent],
			imports: [MatProgressBarModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FomentoProgressBarComponent);
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

		describe('ngOnChanges', () => {
			it('should call borderConf method', () => {
				const borderValidationSpy = jest.spyOn(component, 'borderConf');
				component.ngOnChanges();
				expect(borderValidationSpy).toHaveBeenCalledTimes(1);
			});
		});

		describe('ngAfterViewInit', () => {
			it('should call ngAfterViewInit', () => {
				const borderValidationSpy = jest.spyOn(component, 'borderConf');
				component.ngAfterViewInit();
				expect(borderValidationSpy).toHaveBeenCalledTimes(1);
			});
		});
	});

	describe('Input Validation', () => {
		it('should work well with no wrong "title"', () => {
			component.title = 'hola';
			const ConsoleSpy = jest.spyOn(console, 'log');
			component.inputValidation();
			expect(ConsoleSpy).toHaveBeenCalledTimes(0);
		});
		it('should prevent "HTML injection" in "label"', () => {
			component.title = "<script>alert('Hola Mundo')</script>";
			const ConsoleSpy = jest.spyOn(console, 'log');
			component.inputValidation();
			expect(ConsoleSpy).toHaveBeenCalledWith(
				new Error("Intento de ataque vía 'HTML injection'"),
			);
		});
	});

	describe('borderConf method', () => {
		it('should change CSS correctly', () => {
			component.progress = 100;
			component.typeStyle = 'material';
			component.borderConf();
			expect(fixture.debugElement.query(By.css('.allBorder'))).toBeTruthy();
		});
	});

	describe('Version display', () => {
		describe('Choose matter version', () => {
			it('should show matter-input-group', () => {
				component.typeStyle = 'matter';
				fixture.detectChanges();
				expect(
					fixture.debugElement.query(By.css('matter-progress')),
				).not.toBeNull();
			});

			it('should hide material input-group', () => {
				component.typeStyle = 'matter';
				fixture.detectChanges();
				expect(fixture.debugElement.query(By.css('.pb-title'))).toBeNull();
			});
		});

		describe('Choose material version', () => {
			it('should show material input-group', () => {
				component.typeStyle = 'material';
				fixture.detectChanges();
				expect(fixture.debugElement.query(By.css('.pb-title'))).not.toBeNull();
			});

			it('should hide matter-input-group', () => {
				component.typeStyle = 'material';
				fixture.detectChanges();
				expect(
					fixture.debugElement.query(By.css('matter-progress')),
				).toBeNull();
			});
		});
	});
});
