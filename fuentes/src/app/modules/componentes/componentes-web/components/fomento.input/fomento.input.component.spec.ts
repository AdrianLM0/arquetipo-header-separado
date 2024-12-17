import { ComponentFixture, TestBed } from '@angular/core/testing';
import '@matter/matter-input/dist/matter-input';
import { FomentoInputComponent } from './fomento.input.component';
import { By } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FomentoInputComponent', () => {
	let component: FomentoInputComponent;
	let fixture: ComponentFixture<FomentoInputComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FomentoInputComponent],
			imports: [
				MatFormFieldModule,
				MatInputModule,
				FormsModule,
				ReactiveFormsModule,
				BrowserAnimationsModule,
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FomentoInputComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	describe('Version display', () => {
		describe('Choose matter version', () => {
			it('should show matter-input', () => {
				component.typeStyle = 'matter';
				fixture.detectChanges();
				expect(
					fixture.debugElement.query(By.css('matter-input')),
				).not.toBeNull();
			});

			it('should hide material input', () => {
				component.typeStyle = 'matter';
				fixture.detectChanges();
				expect(fixture.debugElement.query(By.css('.matInputJunta'))).toBeNull();
			});
		});

		describe('Choose material version', () => {
			it('should show material input', () => {
				component.typeStyle = 'material';
				fixture.detectChanges();
				expect(
					fixture.debugElement.query(By.css('.matInputJunta')),
				).not.toBeNull();
			});

			it('should hide matter input', () => {
				component.typeStyle = 'material';
				fixture.detectChanges();
				expect(fixture.debugElement.query(By.css('matter-input'))).toBeNull();
			});
		});
	});
});
