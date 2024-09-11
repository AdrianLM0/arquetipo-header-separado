import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from 'src/app/config/constants';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ejemplo-fomento-datagrid',
  templateUrl: './ejemplo-fomento-datagrid.component.html',
  styleUrls: ['./ejemplo-fomento-datagrid.component.scss'],
})
export class EjemploFomentoDatagridComponent implements OnDestroy, OnInit {
  @Input() apiContent: string = 'content'; 
  @Input() tipoTratamiento: string; 

  api_name = 'Listado de ejemplo de formularios';
  table_headers = [
    { header: 'id', field: 'id', visible: true },
    { header: 'codigo', field: 'codigo', visible: true }
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
  filter = 'advance';
  form = Constants.EJEMPLO_FORMULARIO_TABLA;
  sizePageParam = 'size';
  nPageParam = 'page';
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
  showSubmitForm = false;
  showResetForm = false;
  validate_form = false;
  alt_form = false;
  alt_label_form = 'ETIQUETA';
  private subscription: Subscription = new Subscription();
  dataSource = new MatTableDataSource<any>();
  results: any;
  paginator_length: any;
  displayedColumns: string[] = this.table_headers.map(header => header.field);
  tipoChurrera = 'c1';
  hostApi = 'http://localhost:8080';

  ngOnInit(): void {
    this.endpoint = 'api/' + this.tipoChurrera + '/v1/formularios/listbyquerydsl';
    this.loadData();
  }

  constructor(private http: HttpClient) {}

  loadData() {
    this.http.get<any>(`${this.hostApi}/${this.endpoint}`).subscribe(
      (data: any) => {
        console.log('Datos recibidos:', data); // Agrega un log para verificar la respuesta
        this.procesarDatos(data); // Procesa los datos
      },
      error => {
        console.error('Error al cargar los datos:', error);
      }
    );
  }

  procesarDatos(datos: any, headers?: HttpHeaders) {
    console.log('Procesando datos:', datos); // Log para verificar qué datos estamos procesando

    if (Array.isArray(datos)) {
      // Si `datos` es un array
      this.tratamientoSimple(datos);
    } else if (datos.content) {
      // Si `datos` es un objeto con `content`
      this.tratamientoComplejo(datos);
    } else if (this.tipoChurrera === 'c2' && headers) {
      // Si `tipoChurrera` es 'c2' y hay headers
      this.tratamientoC2(datos, headers);
    } else {
      console.warn('Formato de datos no reconocido o tipoChurrera no configurado correctamente');
    }
  }

  tratamientoSimple(datos: any[]) {
    console.log('Tratamiento Simple:', datos); // Log para verificar datos simples
    this.results = datos;
    this.paginator_length = datos.length; 
    this.dataSource.data = this.results;
  }

  tratamientoComplejo(datos: any) {
    console.log('Tratamiento Complejo:', datos); // Log para verificar datos complejos
    this.results = datos.content || [];
    this.paginator_length = datos.totalElements || this.results.length;
    this.dataSource.data = this.results;
  }

  tratamientoC2(datos: any, headers: HttpHeaders) {
    console.log('Tratamiento C2:', datos, headers); // Log para verificar datos y headers
    this.results = datos;
    this.paginator_length = +headers.get('total-elementos') || this.results.length;
    this.dataSource.data = this.results;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  // Método para manejar la acción de descargar datos desde el componente DataGrid.
  // `datosTabla` contiene la información de la tabla que será descargada.
  descargar(datosTabla: any) {
    console.log('DESCARGAR TABLA: ', datosTabla);
    // Lógica para descargar la tabla en un archivo o formato específico puede ser añadida aquí.
  }

  // Método para manejar el evento del ícono de ayuda desde el componente DataGrid.
  iconoAyuda() {
    console.log('BOTÓN DE AYUDA FUNCIONA CORRECTAMENTE');
    // Lógica para mostrar la ayuda o abrir un modal con información puede ser añadida aquí.
  }

  // Método para manejar la selección de filas (multicheck) desde el componente DataGrid.
  // `datosSeleccionados` contiene las filas seleccionadas por el usuario.
  check(datosSeleccionados: any) {
    console.log('LAS LÍNEAS SELECCIONADAS SON: ', datosSeleccionados);
    // Lógica para procesar las filas seleccionadas, como acciones masivas, puede ser añadida aquí.
  }
}
