import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FomentoValidators } from '@fomento/i-rf-logic-component-node-lib';

@Component({
	selector: 'app-ejemplo-fomento-validaciones',
	templateUrl: './ejemplo-fomento-validaciones.component.html',
	styleUrls: ['./ejemplo-fomento-validaciones.component.scss'],
})
export class EjemploFomentoValidacionesComponent {
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

	typeMatInputPass = 'password';
	formControlNamePass = 'contrasena';
	labelPass = 'Contraseña';

	typeMatInputNif = 'text';
	formControlNameNif = 'nifNie';
	labelNif = 'Documento identificativo';

	public formulario: FormGroup = new FormGroup({
		nombreUsuario: new FormControl('', [
			Validators.pattern(/^[a-z\d\u002e\-_]*$/i),
			Validators.minLength(8),
			Validators.maxLength(18),
			Validators.required,
		]),
		correoElectronico: new FormControl('', [
			Validators.required,
			Validators.email,
		]),
		contrasena: new FormControl('', [
			Validators.required,
			Validators.minLength(8),
			Validators.pattern(/^(?=.*[A-Za-z])(?=.*[0-9])\S+$/),
		]),
		repitecontrasena: new FormControl('', [
			Validators.required,
			Validators.minLength(8),
			Validators.pattern(/^(?=.*[A-Za-z])(?=.*[0-9])\S+$/),
		]),
		tipoDocumento: new FormControl('', [Validators.required]),
		nifNie: new FormControl('', [
			Validators.required,
			FomentoValidators.nifNieCifValidator(),
		]),
	});
}
