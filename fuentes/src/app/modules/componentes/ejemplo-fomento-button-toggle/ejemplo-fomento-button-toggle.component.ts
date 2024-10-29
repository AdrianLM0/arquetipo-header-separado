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
		  id: 'op1',
		  value: 'op1',
		  name: 'toggleGroup',
		  label: 'Opcion 1',
		},
		{
		  disabled: true,
		  ariaLabel: '',
		  ariaLabelledby: '',
		  checked: false,
		  disabledRipple: true,
		  id: 'op2',
		  value: 'op2',
		  name: 'toggleGroup',
		  label: 'Opcion 2',
		},
		{
		  disabled: false,
		  ariaLabel: '',
		  ariaLabelledby: '',
		  checked: true, 
		  disabledRipple: true,
		  id: 'op3',
		  value: 'op3',
		  name: 'toggleGroup',
		  label: 'Opcion 3',
		},
	  ];

	clickbutton(event) {
		this.onclickevent.emit(event);
		console.log(event);
	}
}
