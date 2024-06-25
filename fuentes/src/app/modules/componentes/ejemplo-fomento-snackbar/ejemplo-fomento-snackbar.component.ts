import { Component, ViewChild } from '@angular/core';
import {
	MatSnackBarHorizontalPosition,
	MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { FomentoSnackbarComponent } from '@fomento/i-rf-web-component-node-lib';

@Component({
	selector: 'app-fomento-snackbar',
	templateUrl: './ejemplo-fomento-snackbar.component.html',
	styleUrls: ['./ejemplo-fomento-snackbar.component.scss'],
})
export class EjemploFomentoSnackbarComponent {
	@ViewChild(FomentoSnackbarComponent, { static: true })
	snackbar: FomentoSnackbarComponent;

	message: string;
	action: string;
	hasAction: boolean;
	horizontalPosition: MatSnackBarHorizontalPosition;
	verticalPosition: MatSnackBarVerticalPosition;
	panelClass: string | string[];

	showSnackbar(message: string, action: string) {
		this.snackbar.openSnackBar(message, action);
	}
}
