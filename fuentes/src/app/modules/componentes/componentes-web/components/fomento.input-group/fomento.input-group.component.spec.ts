import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FomentoInputGroupComponent } from './fomento.input-group.component';
import { By } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import '@matter/matter-input-group/dist/matter-input-group';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockModule } from 'ng-mocks';

describe('FomentoInputGroupComponent', () => {
	let component: FomentoInputGroupComponent;
	let fixture: ComponentFixture<FomentoInputGroupComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FomentoInputGroupComponent],
			imports: [
				MockModule(MatIconModule),
				MockModule(MatFormFieldModule),
				MockModule(MatInputModule),
				MockModule(BrowserAnimationsModule),
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FomentoInputGroupComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	describe('Version display', () => {
		describe('Choose matter version', () => {
			it('should show matter-input-group', () => {
				component.typeStyle = 'matter';
				fixture.detectChanges();
				expect(
					fixture.debugElement.query(By.css('matter-input-group')),
				).not.toBeNull();
			});

			it('should hide material input-group', () => {
				component.typeStyle = 'matter';
				fixture.detectChanges();
				expect(fixture.debugElement.query(By.css('.matInputJunta'))).toBeNull();
			});
		});

		describe('Choose material version', () => {
			it('should show material input-group', () => {
				component.typeStyle = 'material';
				fixture.detectChanges();
				expect(
					fixture.debugElement.query(By.css('.matInputJunta')),
				).not.toBeNull();
			});

			it('should hide matter-input-group', () => {
				component.typeStyle = 'material';
				fixture.detectChanges();
				expect(fixture.debugElement.query(By.css('matter-input'))).toBeNull();
			});
		});
	});
});
