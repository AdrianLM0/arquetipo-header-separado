import {
	Component,
	EventEmitter,
	Input,
	Output,
	ViewChild,
	OnInit,
  } from '@angular/core';
  import { MatTableDataSource } from '@angular/material/table';
  import { PageEvent } from '@angular/material/paginator';
  import { TableColumn } from '../fomento.filtro-columnas-tabla/table-column.model';
  import { NavigationEnd } from '@angular/router';
  import { Observable } from 'rxjs';
  import { FomentoBreadcrumbComponent } from '../fomento.breadcrumb/fomento.breadcrumb.component';
  import { ApiEndpointsService, RequestApiService, QueryStringParameters } from '@fomento/i-rf-logic-component-node-lib'; // Reemplaza con tu servicio adecuado
  
  @Component({
	selector: 'lib-fomento-plantilla-consulta',
	templateUrl: './fomento.plantilla.consulta.component.html',
	styleUrls: ['./fomento.plantilla.consulta.component.css'],
  })
  export class FomentoPlantillaConsultaComponent implements OnInit {
	@ViewChild(FomentoBreadcrumbComponent, { static: true })
	breadCrumb: FomentoBreadcrumbComponent;
  
	// Parámetros de la clase plantilla
	@Input() title = 'Consulta de expedientes';
	@Input() filter: 'column' | 'advance' | 'none' = 'advance';
	@Input() rowsPerPageOptions: number[] = [5, 10, 15];
	@Input() actions = true;
	@Input() api_name = '';
	@Input() apiContent = 'content';
  
	@Input() table_header = [
	  { header: 'Nombre', field: 'name', visible: true },
	  { header: 'Url', field: 'url', visible: true },
	];
  
	@Input() listadoAccionesAux = [];
	@Input() name = ''; //Almacena el nombre clave que se le va a dar a la tabla.
	@Input() show_download = true; //Almacena true si se quiere mostrar la acción de descargar, false en caso contrario.
	@Input() show_ayuda = true;
	@Input() show_clean = true;
	@Input() show_fcolumnas = true;
  
	@Input() actions_index = -1;
	@Input() actions_label;
	@Input() multicheck = true;
	@Input() multi_check_label = 'Multiseleccion';
	@Input() multi_check_index = -1;
	@Input() multi_check_label_col = '';
	@Input() sizePageParam = 'size';
	@Input() nPageParam = 'page';
  
	@Input() hostapi = '';
	@Input() endpoint;
	@Input() id_table;
  
	@Input() id_subsistema;
	@Input() hostApiPaginator;
	@Input() endpointPaginator;
	@Input() hostApiFilter;
	@Input() endpointFilter;
	@Input() hostApiSaveFilter;
	@Input() endpointSaveFilter;
	@Input() hostApiFilterUser;
	@Input() endpointFilterUser;
  
	@Input() useGetMethod = false; // Control para usar GET o POST
  
	@Output() checkAction = new EventEmitter<unknown>(); // Emite un evento cuando se quiere utilizar la funcionalidad de selección múltiple
	@Output() helpIconAction = new EventEmitter<string>();
	@Output() downloadAction = new EventEmitter<TableColumn[]>();
  
	// Configuración del formulario
	@Input() reset_button_form = 'CANCELAR';
	@Input() submit_button_form = 'GUARDAR';
	@Input() show_header = true;
	@Input() showSubmitForm = true;
	@Input() showResetForm = true;
	@Input() showAuxForm = false;
	@Input() validate_form = false;
	@Input() expansion_form = false;
	@Output() submitAction_form = new EventEmitter<unknown>(); // Emite un evento cuando se quiere hacer submit en el formulario.
	@Output() changeSelectorAction_form = new EventEmitter<unknown>(); // Emite un evento cuando se cambia la opción de algún selector del formulario.
	@Output() auxAction_form = new EventEmitter<unknown>();
	@Input() aux_label;
  
	// Fuente de datos para la tabla
	dataSource = new MatTableDataSource();
	paginator_length = 0;
	results;
	  form: any;
	
	constructor(
	  private apiEndpoints: ApiEndpointsService,
	  private requestApi: RequestApiService
	) {}
  
	ngOnInit(): void {
	  this.dataSource = new MatTableDataSource();
	  this.fetchData(); // Inicializa la carga de datos cuando se monta el componente
	}
  
	// Método para obtener los datos de la API
	fetchData() {
	  const page_endpoint = this.apiEndpoints.createUrlWithQueryParameters(
		this.hostapi,
		this.endpoint,
		(qs: QueryStringParameters) => {
		  qs.push(this.sizePageParam, this.rowsPerPageOptions[0]);
		  qs.push(this.nPageParam, 0);
		}
	  );
  
	  const apiCall = this.useGetMethod
		? this.requestApi.get(page_endpoint) // Llamada GET
		: this.requestApi.post(page_endpoint, {}); // Llamada POST
  
	  apiCall.subscribe({
		next: (data) => {
		  this.results = data;
		  this.dataSource.data = this.results[this.apiContent]; // Asigna los datos a la tabla
		  this.paginator_length = this.results.totalElements; // Ajusta el paginador
		},
		error: (err) => {
		  console.log('Error fetching data:', err);
		},
	  });
	}
  
	// Método para manejar el cambio de página
	changePage(event: PageEvent) {
	  const page_endpoint = this.apiEndpoints.createUrlWithQueryParameters(
		this.hostApiPaginator,
		this.endpointPaginator,
		(qs: QueryStringParameters) => {
		  qs.push(this.sizePageParam, event.pageSize);
		  qs.push(this.nPageParam, event.pageIndex);
		}
	  );
  
	  const apiCall = this.useGetMethod
		? this.requestApi.get(page_endpoint)
		: this.requestApi.post(page_endpoint, {});
  
	  apiCall.subscribe({
		next: (data) => {
		  this.results = data;
		  this.dataSource.data = this.results[this.apiContent];
		},
		error: (err) => {
		  console.log('Error changing page:', err);
		},
	  });
	}
  
	// Método para aplicar filtros a la tabla
	applyFilter(filterValues: any) {
	  const page_endpoint = this.apiEndpoints.createUrlWithQueryParameters(
		this.hostApiFilter,
		this.endpointFilter,
		(qs: QueryStringParameters) => {
		  qs.push(this.sizePageParam, this.rowsPerPageOptions[0]);
		  qs.push(this.nPageParam, 0);
		}
	  );
  
	  const filtro = this.obtenerCamposFiltro(filterValues);
  
	  const apiCall = this.useGetMethod
		? this.requestApi.get(page_endpoint)
		: this.requestApi.post(page_endpoint, filtro);
  
	  apiCall.subscribe({
		next: (data) => {
		  this.results = data;
		  this.dataSource.data = this.results[this.apiContent];
		},
		error: (err) => {
		  console.log('Error applying filter:', err);
		},
	  });
	}
  
	// Método para obtener los campos de filtro
	obtenerCamposFiltro(data: any) {
	  const res = {};
	  try {
		this.form.sections.forEach((section) => {
		  section.groups.forEach((group) => {
			group.rows.forEach((row) => {
			  row.filters.forEach((filter) => {
				res[filter.formControlName] = data[filter.formControlName];
			  });
			});
		  });
		});
	  } catch (error) {
		console.log("Error en la obtención de filtros:", error);
	  }
	  return res;
	}
  
	// Eventos auxiliares para la interfaz
	iconEvent() {
	  this.helpIconAction.emit();
	}
  
	cleanEvent() {
	  console.log(' REESTABLECEMOS LOS FILTROS ');
	}
  
	saveEvent() {
	  console.log(' CONSULTAS GUARDADAS  ');
	}
  
	checkEvent(data?) {
	  this.checkAction.emit(data);
	}
  
	downloadEvent(tableData?) {
	  this.downloadAction.emit(tableData);
	}
  
	// Gestión del breadcrumb
	navigationStart?: Observable<NavigationEnd>;
	currentRoute = '';
	@Input() breadcrumbList: { path: string; label: string }[] = [];
  
	gestionBreadcrumb(fullPath: string) {
	  this.breadCrumb.gestionBreadcrumbs(fullPath);
	}
  }
  