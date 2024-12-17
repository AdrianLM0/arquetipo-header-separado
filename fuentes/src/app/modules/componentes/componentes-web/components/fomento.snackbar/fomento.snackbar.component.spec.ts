
import { FomentoSnackbarComponent } from './fomento.snackbar.component';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { TestBed } from '@angular/core/testing';

describe('FomentoSnackbarComponent', () => {
	let component: FomentoSnackbarComponent;
	let mockSnackBar: MatSnackBar;

	beforeEach(() => {
		mockSnackBar = {
			open: jest.fn(),
		} as any;

		TestBed.configureTestingModule({
			declarations: [FomentoSnackbarComponent],
			providers: [{ provide: MatSnackBar, useValue: mockSnackBar }],
		});
		component = TestBed.createComponent(FomentoSnackbarComponent).componentInstance;
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should call MatSnackBar open method with message and action', () => {
		const message = 'Test message';
		const action = 'Test action';
		component.openSnackBar(message, action);
		expect(mockSnackBar.open).toHaveBeenCalledWith(message, action, expect.any(Object));
	});

	it('should call MatSnackBar open method with message, action, and config', () => {
		const message = 'Test message';
		const action = 'Test action';
		const config: MatSnackBarConfig = {
			horizontalPosition: 'start',
			verticalPosition: 'bottom',
			panelClass: ['test-panel-class'],
		};
		component.openSnackBarAdvanve(message, action, config);
		expect(mockSnackBar.open).toHaveBeenCalledWith(message, action, config);
	});
});