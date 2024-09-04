import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/config/constants';

@Component({
	selector: 'app-ejemplo-fomento-datagrid',
	templateUrl: './ejemplo-fomento-datagrid.component.html',
	styleUrls: ['./ejemplo-fomento-datagrid.component.scss'],
})
export class EjemploFomentoDatagridComponent implements OnDestroy {


	api_name = 'Listado de Formularios';
	table_headers = [
		{ header: 'Código', field: 'codigo', visible: true },
		{ header: 'Nombre', field: 'nombre', visible: true },
		{ header: 'Descripción', field: 'descripcion', visible: true },
		{ header: 'Fecha Creación', field: 'audAlta', visible: true },
		{ header: 'Usuario Modificación', field: 'usuModifica', visible: true },
	];
	idTable = 1;
	form = Constants.EJEMPLO_FORMULARIO_TABLA
	actions = true;
	rowsPerPageOptions = [5, 10, 15];
	hostApi = 'http://localhost:8080';
	
	endpoint = 'api/v1/formularios/listbyquerydsl';

	private subscription: Subscription = new Subscription();

	constructor(private http: HttpClient) {}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

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
