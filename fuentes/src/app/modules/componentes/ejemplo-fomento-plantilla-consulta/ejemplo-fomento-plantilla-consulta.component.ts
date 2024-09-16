import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FomentoPlantillaConsultaComponent } from '@fomento/i-rf-web-component-node-lib';
import { Constants } from '../../../config/constants';

@Component({
	selector: 'app-ejemplo-fomento-plantilla-consulta',
	templateUrl: './ejemplo-fomento-plantilla-consulta.component.html',
	styleUrls: ['./ejemplo-fomento-plantilla-consulta.component.scss'],
})
export class EjemploFomentoPlantillaConsultaComponent implements AfterViewInit, OnInit {
	@ViewChild(FomentoPlantillaConsultaComponent)
	componentePlantilla!: FomentoPlantillaConsultaComponent;

	table_headers = [
    { header: 'ID', field: 'id', visible: true },
    { header: 'Código', field: 'codigo', visible: true },
    { header: 'Nombre', field: 'nombre', visible: true },
  ];
	
	api_name = 'Listado de Usuarios del API de EIT Viv';

	tipoChurrera = 'c1';

	hostApi = 'http://localhost:8080';  // Cambiamos al mismo host que el datagrid

	endpoint = 'api/' + this.tipoChurrera + '/v1/formularios/listbyquerydsl'; // Mismo endpoint que el datagrid

	element_data = [];
	actions = true;
	rowsPerPageOptions = [5, 10, 15];

	idSubsistema = '20';
	idTable = 1;
	useGetMethod = true;

	listadoAccionesAux = Constants.EJEMPLO_LISTADO_ACCIONES_AUX;
	form = Constants.EJEMPLO_FORMULARIO_TABLA;

	constructor(private router: Router, private http: HttpClient) {}


	
	ngOnInit(): void {
		this.fetchData();
	}

	ngAfterViewInit() {
		this.componentePlantilla?.gestionBreadcrumb(this.router.url);
	}

	// Función para obtener datos desde el backend
	fetchData(): void {
		this.http.get<any>(`${this.hostApi}/${this.endpoint}`).subscribe(
			(data) => {
				// Asigna los datos traídos del backend
				this.element_data = data.content || data; // Verifica si hay 'content'
				console.log('Datos obtenidos:', this.element_data);
			},
			(error) => {
				console.error('Error fetching data from API', error);
			}
		);
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
