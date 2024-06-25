import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FomentoPlantillaConsultaComponent } from '@fomento/i-rf-web-component-node-lib';
import { Constants } from '../../../config/constants';

@Component({
	selector: 'app-ejemplo-fomento-plantilla-consulta',
	templateUrl: './ejemplo-fomento-plantilla-consulta.component.html',
	styleUrls: ['./ejemplo-fomento-plantilla-consulta.component.scss'],
})
export class EjemploFomentoPlantillaConsultaComponent implements AfterViewInit {
	@ViewChild(FomentoPlantillaConsultaComponent)
	componentePlantilla!: FomentoPlantillaConsultaComponent;

	api_name = 'Listado de Usuarios del API de EIT Viv';
	hostApi = 'http://192.168.0.81:8081';
	endpoint = 'eit-viv/api/v1/users';

	constructor(private router: Router) {}
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

	
	descargar(datosTabla) {
		console.log('DESCARGAR TABLA: ', datosTabla);
	}

	iconoAyuda() {
		console.log('BOTÓN DE AYUDA FUNCIONA CORRECTAMENTE');
	}

	check(datosSeleccionados) {
		console.log('LAS LÍNEAS SELECCIONADAS SON: ', datosSeleccionados);
	}

	ngAfterViewInit() {
		this.componentePlantilla?.gestionBreadcrumb(this.router.url);
	}
}
