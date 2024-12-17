import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {
	FloatLabelType,
	MatFormFieldAppearance,
	SubscriptSizing,
} from '@angular/material/form-field';

@Component({
	selector: 'lib-fomento-form-field',
	templateUrl: './fomento.form-field.component.html',
	styleUrls: ['./fomento.form-field.component.scss'],
})
export class FomentoFormFieldComponent {
	@Input() typeStyle = 'material';

	//Atributos form field
	@Input() appearance: MatFormFieldAppearance = 'outline';
	@Input() color: ThemePalette = 'primary';
	@Input() floatLabel: FloatLabelType = 'always';
	@Input() hideRequiredMarker = false;
	@Input() hintLabel = 'hint';
	@Input() subscriptSizing: SubscriptSizing = 'fixed';
	@Input() type:
		| 'input'
		| 'select'
		| 'textarea'
		| 'password'
		| 'number'
		| 'inputFomento'
		| 'selectFomento' = 'input';
	@Input() value = '';

	@Input() hide: boolean;
	@Input() placeholder: string;

	//Atributos input text
	@Input() labelInput: string;
	@Input() typeMaterialInput = '';
	@Input() valueMaterialInput = '';
	@Input() msgError = '';
	@Input() msgHelp = '';
	@Input() typeMatInput = 'text';
	@Input() formControlName = '';
	@Input() errorStateMatcher = '';
	@Input() readonly = false;
	@Input() errorState = '';

	//Atibutos select
	@Input() disabled = false;
	@Input() data = [{value: "Opcion 1", description: "Opcion 1"}];
	@Input() labelSelect: string;

	//Atributos input password
	@Input() labelInputPassword: string;
	@Input() typeMaterialPassword = '';

	//Atributos input number
	@Input() labelInputNumber: string;
	@Input() typeMaterialNumber = '';
	@Input() matTextPrefix: string;
	@Input() matTextSuffix: string;
}
