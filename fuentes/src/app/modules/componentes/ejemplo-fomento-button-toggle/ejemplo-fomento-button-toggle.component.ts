import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonToggleAppearance, MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
	selector: 'app-ejemplo-fomento-button-toggle',
	templateUrl: './ejemplo-fomento-button-toggle.component.html',
	styleUrls: ['./ejemplo-fomento-button-toggle.component.scss'],
})
export class EjemploFomentoButtonToggleComponent {
	@Output() onclickevent = new EventEmitter<MatButtonToggleChange>();

	//Propiedades mat-button-toggle
	appearance: MatButtonToggleAppearance = 'standard';
	label = 'button toggle';
	disabled = false;
	ariaLabel = '';
	ariaLabelledby = '';
	checked = false;
	disableRipple = true;
	id = '';
	value = 'bold';
	name = 'bold';
	vertical = true;
	multiple = false;

	toggleGroup = [
		{
		  disabled: false,
		  ariaLabel: '',
		  ariaLabelledby: '',
		  checked: false,
		  disabledRipple: true,
		  id: 'jose',
		  value: 'jose',
		  name: 'toggleGroup',
		  label: 'Jose',
		},
		{
		  disabled: true,
		  ariaLabel: '',
		  ariaLabelledby: '',
		  checked: false,
		  disabledRipple: true,
		  id: 'emilio',
		  value: 'emilio',
		  name: 'toggleGroup',
		  label: 'Emilio',
		},
		{
		  disabled: false,
		  ariaLabel: '',
		  ariaLabelledby: '',
		  checked: true, 
		  disabledRipple: true,
		  id: 'antonio',
		  value: 'antonio',
		  name: 'toggleGroup',
		  label: 'Antonio',
		},
	  ];

	clickbutton(event) {
		this.onclickevent.emit(event);
		console.log(event);
	}
}
