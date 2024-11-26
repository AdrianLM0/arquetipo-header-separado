import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Constants } from '../../../config/constants';

@Component({
	selector: 'app-ejemplo-fomento-jsondatagrid',
	templateUrl: './ejemplo-fomento-jsondatagrid.component.html',
	styleUrls: ['./ejemplo-fomento-jsondatagrid.component.scss'],
})
export class EjemploFomentoJsonDatagridComponent implements OnDestroy {
	table_data = [
		{ cargo: 'Secretaria General', res: 'María José Navas Aranda' },
		{
			cargo: 'Servicio de Personal y Administración General',
			res: 'Ana Patricia Gil Diéguez',
		},
		{ cargo: 'Servicio de Carreteras', res: 'Antonio Jesús Nieto Liñán' },
		{
			cargo: 'Servicio de Rehabilitación y Arquitectura',
			res: 'Antonia María Díaz Doblas',
		},
		{ cargo: 'Servicio de Vivienda', res: 'Gisela María Jiménez García' },
		{ cargo: 'Servicio de Transpores', res: 'Raquel del Paso Reguera' },
		{ cargo: 'Servicio de Urbanismo', res: 'María del Carmen Moreno Avilés' },
	];
	table_headers = [
		{ header: 'Cargo', field: 'cargo', visible: true },
		{ header: 'Responsable', field: 'res', visible: true },
	];
	name =
		'Delegación Territorial de Fomento, Articulación del Territorio y Vivienda en Málaga';

	actions = true;
	listadoAcciones = Constants.EJEMPLO_LISTADO_ACCIONES_AUX
	rowsPerPageOptions = [5, 10, 15];

	form = {
		sections: [
			{
				label: 'Formulario avanzado',
				groups: [
					{
						label: 'Filtrar personal',
						rows: [
							{
								filters: [
									{ header: 'Cargo', formControlName: 'cargo', type: 'input' },
									{ header: 'Nombre', formControlName: 'name', type: 'input' },
								],
							},
						],
					},
				],
			},
		],
	};


	helpButtonAriaLabel = '¿Necesitas ayuda?'; // NUEVO INPUT
	globalFilterLabel = 'Buscar en todos los campos'; // NUEVO INPUT
	dialogTitle = 'Título personalizado para el diálogo'; // NUEVO INPUT

	private subscription: Subscription = new Subscription(); // Propiedad para la subscripción
	constructor() {}

	ngOnDestroy() {
		this.subscription.unsubscribe(); // Finaliza la suscripción al salir del componente
	}

	borrar(datosFila) {
		console.log('BORRAR FILA: ', datosFila);
	}

	detalles(datosFila) {
		console.log('DETALLES DE FILA: ', datosFila);
	}

	descargar(datosTabla) {
		console.log('DESCARGAR TABLA: ', datosTabla);
	}

	editar(datosFila) {
		console.log('EDITAR FILA: ', datosFila);
	}

	iconoAyuda() {
		console.log('BOTÓN DE AYUDA FUNCIONA CORRECTAMENTE');
	}

	check(datosSeleccionados) {
		console.log('LAS LÍNEAS SELECCIONADAS SON: ', datosSeleccionados);
	}
}
