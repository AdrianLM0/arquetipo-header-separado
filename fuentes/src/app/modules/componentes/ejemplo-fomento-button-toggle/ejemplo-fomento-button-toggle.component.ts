import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
	selector: 'app-ejemplo-fomento-button-toggle',
	templateUrl: './ejemplo-fomento-button-toggle.component.html',
	styleUrls: ['./ejemplo-fomento-button-toggle.component.scss'],
})
export class EjemploFomentoButtonToggleComponent {
	@Output() onclickevent = new EventEmitter<MatButtonToggleChange>();

	//Propiedades mat-button-toggle
	appearance = 'standar';
	label = 'button toggle';
	disabled = false;
	ariaLabel = '';
	ariaLabelledby = '';
	checked = false;
	disableRipple = true;
	id = '';
	value = '';
	name = '';

	clickbutton(event) {
		this.onclickevent.emit(event);
		console.log(event);
	}
}
