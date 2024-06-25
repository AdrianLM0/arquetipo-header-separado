import { Component } from '@angular/core';

@Component({
	selector: 'app-ejemplo-fomento-input',
	templateUrl: './ejemplo-fomento-input.component.html',
	styleUrls: ['./ejemplo-fomento-input.component.scss'],
})
export class EjemploFomentoInputComponent {
	typeStyle = 'material';

	//Atributos matter-input
	msgError = '';
	msgHelp = 'Ex. pat@example.com';
	label = 'Input Email';
	typeMatter = '';
	valueMatter = '';
	id = '';
	name = '';

	//Atributos material-input
	errorStateMatcher = '';
	readonly = '';
	typeMaterial = 'email';
	errorState = '';
}
