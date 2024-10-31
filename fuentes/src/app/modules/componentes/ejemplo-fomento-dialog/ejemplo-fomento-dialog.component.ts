import { Component, ViewChild } from '@angular/core';
import { FomentoDialogComponent, TableColumn } from '@fomento/i-rf-web-component-node-lib';

@Component({
	selector: 'app-ejemplo-fomento-dialog',
	templateUrl: './ejemplo-fomento-dialog.component.html',
	styleUrls: ['./ejemplo-fomento-dialog.component.scss'],
})
export class EjemploFomentoDialogComponent {
	width = '65%';
	height = '82%';
	closeButton = true;
	closeButtonPosition = 'right';
	@ViewChild(FomentoDialogComponent) dialog!: FomentoDialogComponent;


	//***** Métodos para table *****//

	// Propiedad para almacenar los datos que serán mostrados en la tabla
	element_data = [];

	// Definición de las columnas que se mostrarán en la tabla
	init_columns = [
		{ id: 'codigo', name: 'Código' },
		{ id: 'nombre', name: 'Nombre' },
		{ id: 'descripcion', name: 'Descripción' },
		{ id: 'audAlta', name: 'Fecha Creación' },
		{ id: 'usuModifica', name: 'Usuario Modificación' }
	];


	hostApi = 'http://localhost:8080';

	tipoChurrera = 'c1';

	// URL de la API desde la que se obtienen los datos
	apiUrl = this.hostApi + '/api/' + this.tipoChurrera + '/v1/formularios/list';

	//***** Métodos para button *****//

	typeStyle = 'material';
	label = 'CERRAR';
	theme = 'secondary';
	icon = '';
	href = 'https://www.juntadeandalucia.es/';
	target = '_self';
	disabled = false;
	aria_label = 'texto alt';
	disableRipple = true;


}



