import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Constants } from 'src/app/config/constants';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { ApiEndpointsService, QueryStringParameters, RequestApiService } from '@fomento/i-rf-logic-component-node-lib';

@Component({
  selector: 'app-ejemplo-fomento-datagrid',
  templateUrl: './ejemplo-fomento-datagrid.component.html',
  styleUrls: ['./ejemplo-fomento-datagrid.component.scss'],
})
export class EjemploFomentoDatagridComponent implements OnDestroy, OnInit {
  @Input() apiContent: string = 'content';
  @Input() tipoTratamiento: string;
  @Input() table_data: any[] = [];

  api_name = 'Listado de ejemplo de formularios';
  table_headers = [
    { header: 'ID', field: 'id', visible: true },
    { header: 'Código', field: 'codigo', visible: true },
    { header: 'Nombre', field: 'nombre', visible: true },
  ];

  idTable = 1;
  actions = true;
  actions_index = -1;
  rowsPerPageOptions = [5, 10, 15];
  listadoAccionesAux = Constants.EJEMPLO_LISTADO_ACCIONES_AUX;
  show_download = true;
  multicheck = true;
  multi_check_label = 'Multiseleccion';
  multi_check_index = -1;
  multi_check_label_col = 'Botón multiselección';
  universal_filter = true;
  filter: 'column' | 'advance' | 'none' = 'advance';
  form = Constants.EJEMPLO_FORMULARIO_TABLA;
  expansion_form = true;
  show_ayuda = true;
  show_clean = true;
  show_fcolumnas = true;
  id_table = 1;
  id_subsistema = '';
  endpoint: string;
  hostapiPaginator = '';
  endpointPaginator = '';
  hostapiFilter = '';
  endpointFilter = '';
  hostapiSaveFilter = '';
  endpointSaveFilter = '';
  hostapiFiltroUsuarioApi = '';
  endpointFiltroUsuarioApi = '';
  reset_button_form = 'CANCELAR';
  submit_button_form = 'CONFIRMAR';
  sizePageParam = 'size';
  showSubmitForm = false;
  showResetForm = false;
  validate_form = false;
  alt_form = false;
  alt_label_form = 'ETIQUETA';
  private subscription: Subscription = new Subscription();
  dataSource = new MatTableDataSource<any>();
  results: any[] = [];
  paginator_length: number = 0;
  pageSize: number = 5;
  pageIndex: number = 0;
  nPageParam = 'page';
  displayedColumns: string[] = this.table_headers.map(header => header.field);
  tipoChurrera = 'c1';
  hostApi = 'http://localhost:8080';
  isLoading = false;
  useGetMethod = true;

  constructor(
    private apiEndpoints: ApiEndpointsService,
    private requestApi: RequestApiService,
  ) {}

  changeSize(){
    if (this.tipoChurrera === "c1"){
      this.sizePageParam = 'size'
    }
    else{
      this.sizePageParam = 'pageSize'
    }
  }
  ngOnInit(): void {

  //  this.consumeApi();
    this.pageSize = 5;
    this.pageIndex = 0;
    this.changeSize();
    this.endpoint = 'api/' + this.tipoChurrera + '/v1/formularios/list';
  }

  consumeApi() {
    this.isLoading = true;
  
    // Construimos la URL con los parámetros de paginación (página y tamaño)
    const page_endpoint = this.apiEndpoints.createUrlWithQueryParameters(
      this.hostApi,
      this.endpoint,
      (qs: QueryStringParameters) => {
        qs.push(this.nPageParam, this.pageIndex); // Añadir número de página
        qs.push(this.sizePageParam, this.pageSize); // Añadir tamaño de página
      }
    );
  
    console.log("API Endpoint: ", page_endpoint);
  
    // Llamamos a la API, usando GET o POST según corresponda
    const apiCall = this.useGetMethod
      ? this.requestApi.get(page_endpoint, { observe: 'response' })
      : this.requestApi.post(page_endpoint, {}, { observe: 'response' });
  
    const subscription = apiCall.subscribe({
      next: (response: HttpResponse<any>) => {
        const data = response.body;  // Datos del cuerpo de la respuesta
        const headers = response.headers;  // Encabezados de la respuesta
        this.isLoading = false;
  
        // Verificamos si la respuesta contiene el campo 'content'
        if (Array.isArray(data.content)) {
          this.sizePageParam = "size";
          this.dataSource.data = data.content;
          console.log('OPCION DE C1')
          console.log('Datos cargados en el dataSource:', this.dataSource.data);
        } else {
          this.dataSource.data = Array.isArray(data) ? data : [data];
          console.log('Datos cargados en el dataSource (sin content):', this.dataSource.data);
        }
  
        // Manejamos la longitud total de elementos para la paginación
        if (headers.has('total-elementos')) {
          this.paginator_length = Number(headers.get('total-elementos'));
          console.log("Total Count from headers:", this.paginator_length);
        } else if (data.totalElements !== undefined) {
          this.paginator_length = data.totalElements;
          console.log("Total Elements from body:", this.paginator_length);
        } else {
          this.paginator_length = this.dataSource.data.length;
          console.log("Paginator length (fallback):", this.paginator_length);
        }
  
        // Llamamos a initTable para inicializar la tabla
        this.initTable();
      },
      error: (err) => {
        console.error('Error en consumeApi:', err);
        this.dataSource.data = [];  // Si hay error, limpiamos los datos
        this.isLoading = false;
      }
    });
  
    this.subscription.add(subscription);
  }
  
  initTable() {
    // Si no tienes columnas dinámicas, puedes configurarlas estáticamente o basarte en los datos que tienes
    if (!this.displayedColumns || this.displayedColumns.length === 0) {
      this.displayedColumns = this.table_headers.map(header => header.field);  // Definimos las columnas a partir de los headers
    }
  
    console.log('Tabla inicializada con las siguientes columnas:', this.displayedColumns);
  
    // Aquí podrías tener lógica adicional para la inicialización, como filtros, multiselección, etc.
    // Si el componente hijo tenía más lógica en initTable, asegúrate de replicarla aquí.
  }
  
  

  changePage(event: PageEvent) {
    this.pageSize = event.pageSize;  // Tamaño de página
    this.pageIndex = event.pageIndex;  // Página actual
    this.consumeApi();  // Vuelve a llamar la API con los nuevos valores de paginación
  }
  
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  descargar(datosTabla: any) {
    console.log('DESCARGAR TABLA: ', datosTabla);
  }

  iconoAyuda() {
    console.log('BOTÓN DE AYUDA FUNCIONA CORRECTAMENTE');
  }

  check(datosSeleccionados: any) {
    console.log('LAS LÍNEAS SELECCIONADAS SON: ', datosSeleccionados);
  }
}
