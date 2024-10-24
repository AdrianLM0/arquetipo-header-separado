import { Component, ViewChild } from '@angular/core';
import { FomentoDialogComponent } from '@fomento/i-rf-web-component-node-lib';

@Component({
	selector: 'app-ejemplo-fomento-dialog',
	templateUrl: './ejemplo-fomento-dialog.component.html',
	styleUrls: ['./ejemplo-fomento-dialog.component.scss'],
})
export class EjemploFomentoDialogComponent {
	width = '60%';
	height = '40%';
	closeButton = true;
	@ViewChild(FomentoDialogComponent) dialog!: FomentoDialogComponent;
}
