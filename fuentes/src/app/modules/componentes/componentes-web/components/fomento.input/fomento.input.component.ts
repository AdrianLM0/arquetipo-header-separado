import { Component, Input } from '@angular/core';
@Component({
	selector: 'lib-fomento-input',
	templateUrl: './fomento.input.component.html',
	styleUrls: ['./fomento.input.component.scss'],
})
export class FomentoInputComponent {
	@Input() value = '';
	@Input() label = '';
	@Input() id = '';
	@Input() name = '';
	@Input() type = 'text';
	@Input() formControlName = '';
	@Input() icon = "close";

	//Atributos matter-input
	@Input() msgError = '';
	@Input() msgHelp = '';

	//Atributos material-input
	@Input() errorStateMatcher = '';
	@Input() disabled = false;
	@Input() readonly = false;
}
