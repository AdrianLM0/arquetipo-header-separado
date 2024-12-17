import { Component, Input } from '@angular/core';
import {
	MatSnackBar,
	MatSnackBarConfig,
	MatSnackBarHorizontalPosition,
	MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
	selector: 'lib-fomento-snackbar',
	templateUrl: './fomento.snackbar.component.html',
	styleUrls: ['./fomento.snackbar.component.scss'],
})
export class FomentoSnackbarComponent {
	constructor(private _snackBar: MatSnackBar) {
		//do nothing
	}

	@Input() message: string;
	@Input() action: string;
	@Input() hasAction: boolean;
	@Input() horizontalPosition: MatSnackBarHorizontalPosition = 'start';
	@Input() verticalPosition: MatSnackBarVerticalPosition = 'bottom';
	@Input() panelClass: string | string[];

	openSnackBar(message: string, action: string) {
		this._snackBar.open(message, action, {
			horizontalPosition: this.horizontalPosition,
			verticalPosition: this.verticalPosition,
		});
	}

	openSnackBarAdvanve(
		message: string,
		action: string,
		config: MatSnackBarConfig,
	) {
		this._snackBar.open(message, action, {
			horizontalPosition: config.horizontalPosition,
			verticalPosition: config.verticalPosition,
			panelClass: config.panelClass,
		});
	}
}
