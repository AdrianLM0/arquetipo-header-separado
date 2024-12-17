import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FomentoDialogComponent } from './fomento.dialog.component';
import { MockComponent } from 'ng-mocks';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FomentoButtonComponent } from '../fomento.button/fomento.button.component';

describe('FomentoDialogComponent', () => {
	let component: FomentoDialogComponent;
	let fixture: ComponentFixture<FomentoDialogComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				FomentoDialogComponent,
				MockComponent(FomentoButtonComponent),
			],
			imports: [MatDialogModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FomentoDialogComponent);
		component = fixture.debugElement.componentInstance;
		fixture.detectChanges();
	});

	it('should display dialog correctly', () => {
		TestBed.inject(MatDialog)
		const dialogSpy = jest.spyOn(component.dialog, 'open');
		component.openDialog();
		expect(dialogSpy).toHaveBeenCalledTimes(1);
	});
});
