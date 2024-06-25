import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {
	FloatLabelType,
	MatFormFieldAppearance,
	SubscriptSizing,
} from '@angular/material/form-field';

@Component({
	selector: 'app-fomento-form-field',
	templateUrl: './ejemplo-fomento-form-field.component.html',
	styleUrls: ['./ejemplo-fomento-form-field.component.scss'],
})
export class EjemploFomentoFormFieldComponent {
	/*Atributos generales*/
	appearance: MatFormFieldAppearance = 'outline';
	color: ThemePalette = 'primary';
	floatLabel: FloatLabelType = 'auto';
	hideRequiredMarker = false;
	hintLabel = 'hint';
	subscriptSizing: SubscriptSizing = 'dynamic';
	placeholder: string;

	/*Atributos input*/
	labelInput = 'Input email';
	errorStateMatcher = '';
	readonly = '';
	typeMaterial = 'email';
	errorState = '';
	msgHelp = 'Ex. pat@example.com';
	disabled = false;

	/*Atributos del select*/
	data = ['Fecha de actualización', 'Título del procedimiento', 'Relevancia'];
	labelSelect = 'Ordenar por';

	/*Atributos del input password*/
	typeMaterialPassword = 'password';
	labelInputPassword = 'Introduce tu contraseña';
	hide = true;
	typeMatInput = 'password';
	value = '';
	formControlName = '';

	/*Atributos del input number*/
	typeMaterialNumber = 'number';
	labelInputNumber = 'Amount';
}
