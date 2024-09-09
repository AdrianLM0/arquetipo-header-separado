import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FomentoPlantillaConsultaComponent } from '@fomento/i-rf-web-component-node-lib';
import { Constants } from '../../../config/constants';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-ejemplo-fomento-plantilla-consulta',
	templateUrl: './ejemplo-fomento-plantilla-consulta.component.html',
	styleUrls: ['./ejemplo-fomento-plantilla-consulta.component.scss'],
})
export class EjemploFomentoPlantillaConsultaComponent {
	@ViewChild(FomentoPlantillaConsultaComponent)
	componentePlantilla!: FomentoPlantillaConsultaComponent;

	api_name = 'Listado de Usuarios del API de EIT Viv';
	table_headers = [
		{ header: 'Código', field: 'codigo', visible: true },
		{ header: 'Nombre', field: 'nombre', visible: true },
		{ header: 'Descripción', field: 'descripcion', visible: true },
		{ header: 'Fecha Creación', field: 'audAlta', visible: true },
		{ header: 'Usuario Modificación', field: 'usuModifica', visible: true },
	];
	idTable = 1
	form = Constants.EJEMPLO_FORMULARIO_TABLA
	actions = true;
	rowsPerPageOptions = [5, 10, 15];
	hostApi = 'http://localhost:8080';

	endpoint = 'api/v1/formularios/listbyquerydsl';

	private subscription: Subscription = new Subscription();

	constructor(private http: HttpClient) {}

		
	descargar(datosTabla) {
		console.log('DESCARGAR TABLA: ', datosTabla);
	}

	iconoAyuda() {
		console.log('BOTÓN DE AYUDA FUNCIONA CORRECTAMENTE');
	}

	check(datosSeleccionados) {
		console.log('LAS LÍNEAS SELECCIONADAS SON: ', datosSeleccionados);
	}
}
