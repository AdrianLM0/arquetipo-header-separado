import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Constants } from '../../../config/constants';

@Component({
	selector: 'app-ejemplo-fomento-datagrid',
	templateUrl: './ejemplo-fomento-datagrid.component.html',
	styleUrls: ['./ejemplo-fomento-datagrid.component.scss'],
})
export class EjemploFomentoDatagridComponent implements OnDestroy {
	api_name = 'Listado de Usuarios del API de EIT Viv';
	table_headers = Constants.EJEMPLO_TABLE_HEADER

	actions = true;
	rowsPerPageOptions = [5, 10, 15];

	hostapiPaginator = 'http://192.168.0.81:8081/eit-viv';
	endpointPaginator = 'api/v1/users/filter';

	hostapiFilter = 'http://192.168.0.81:8081/eit-viv';
	endpointFilter = 'api/v1/users/filter';

	hostapiSaveFilter = 'http://192.168.0.81:8081/customsearch';
	endpointSaveFilter = 'api/v1/custom-search';

	hostapiFiltroUsuarioApi = 'http://192.168.0.81:8081/customsearch';
	endpointFiltroUsuarioApi = `api/v1/custom-search/usuario/1/listado/1/subsistema/20`;

	idSubsistema = "20"
	idTable = 1

	listadoAccionesAux = Constants.EJEMPLO_LISTADO_ACCIONES_AUX


	form = Constants.EJEMPLO_FORMULARIO_TABLA

	hostApi = 'http://192.168.0.81:8081';
	endpoint2 = 'plda/api/v1/roles';
	endpoint = 'eit-viv/api/v1/users';

	private subscription: Subscription = new Subscription(); // Propiedad para la subscripción

	ngOnDestroy() {
		this.subscription.unsubscribe(); // Finaliza la suscripción al salir del componente
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
