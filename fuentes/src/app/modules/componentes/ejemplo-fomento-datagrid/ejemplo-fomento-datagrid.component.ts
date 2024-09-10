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

  // Nombre de la API que se mostrará en el componente DataGrid.
  @Input() apiContent: string = 'content'; 

  // Tipo de tratamiento de datos, puede ser utilizado para aplicar diferentes lógicas de tratamiento.
  @Input() tipoTratamiento: string; 

  // Nombre que se mostrará en la parte superior del componente DataGrid.
  api_name = 'Listado de ejemplo de formularios';

  // Definición de las columnas que se mostrarán en la tabla.
  // Cada objeto contiene:
  // - header: Nombre de la columna visible en la tabla.
  // - field: Campo de datos al que se asocia la columna.
  // - visible: Indica si la columna está visible o no.
  table_headers = [
    { header: 'id', field: 'id', visible: true },
    {header: 'codigo', field: 'codigo', visible: true}
  ];

  // ID de la tabla, usado en el componente DataGrid.
  idTable = 1;

  // Indica si se deben mostrar acciones (botones) en la tabla.
  actions = true;

  // Índice de las acciones, por defecto es -1 lo que indica que no hay acción seleccionada.
  actions_index = -1;

  // Opciones de número de filas por página en la tabla.
  rowsPerPageOptions = [5, 10, 15];

  // Listado auxiliar de acciones adicionales que se mostrarán en la tabla.
  listadoAccionesAux = Constants.EJEMPLO_LISTADO_ACCIONES_AUX;

  // Muestra el botón de descarga en la tabla si es verdadero.
  show_download = true;

  // Permite la selección múltiple de filas si es verdadero.
  multicheck = true;

  // Etiqueta para el checkbox de selección múltiple.
  multi_check_label = 'Multiseleccion';

  // Índice de selección múltiple en la tabla, por defecto es -1 (sin selección).
  multi_check_index = -1;

  // Etiqueta para la columna que contiene la selección múltiple.
  multi_check_label_col = 'Botón multiselección';

  // Indica si el filtro universal está habilitado.
  universal_filter = true;

  // Tipo de filtro, puede ser 'advance', 'column', o 'none'.
  filter = 'advance';

  // Formulario asociado a la tabla, definido en las constantes.
  form = Constants.EJEMPLO_FORMULARIO_TABLA;

  // Parámetro de tamaño de página, utilizado en la API.
  sizePageParam = 'size';

  // Parámetro de número de página, utilizado en la API.
  nPageParam = 'page';

  // Indica si el formulario de expansión está habilitado.
  expansion_form = true;

  // Muestra el ícono de ayuda si es verdadero.
  show_ayuda = true;

  // Muestra el botón de limpiar filtros si es verdadero.
  show_clean = true;

  // Muestra el botón de seleccionar columnas si es verdadero.
  show_fcolumnas = true;

  // ID de la tabla, igual que `idTable`, podría unificarse.
  id_table = 1;

  // ID del subsistema al que pertenece la tabla.
  id_subsistema = '';

  // Indica el tipo de churrera que se quiere usar, si churrera 1 o 2.
  tipoChurrera = 'c1';

  // URL base del API para la tabla.
  hostApi = 'http://localhost:8080';

  // Endpoint para obtener los datos de la tabla.
  endpoint: string; 

  // API y endpoint para la paginación (aún no configurado).
  hostapiPaginator = '';
  endpointPaginator = '';

  // API y endpoint para los filtros (aún no configurado).
  hostapiFilter = '';
  endpointFilter = '';

  // API y endpoint para guardar filtros (aún no configurado).
  hostapiSaveFilter = '';
  endpointSaveFilter = '';

  // API y endpoint para filtros de usuario (aún no configurado).
  hostapiFiltroUsuarioApi = '';
  endpointFiltroUsuarioApi = '';

  // Texto para el botón de reset del formulario.
  reset_button_form = 'CANCELAR';

  // Texto para el botón de submit del formulario.
  submit_button_form = 'CONFIRMAR';

  // Indica si el botón de submit del formulario debe ser mostrado.
  showSubmitForm = false;

  // Indica si el botón de reset del formulario debe ser mostrado.
  showResetForm = false;

  // Indica si el formulario debe ser validado antes de ser enviado.
  validate_form = false;

  // Habilita un formulario alternativo en la tabla.
  alt_form = false;

  // Etiqueta para el formulario alternativo.
  alt_label_form = 'ETIQUETA';

  // Variable para almacenar suscripciones y manejarlas de manera centralizada para limpiar al destruir el componente.
  private subscription: Subscription = new Subscription();

  // DataSource para la tabla.
  dataSource = new MatTableDataSource<any>();

  // Almacena los resultados de la API.
  results: any;

  // Longitud de la paginación.
  paginator_length: any;

  // Columnas que se mostrarán en la tabla, derivadas de table_headers.
  displayedColumns: string[] = this.table_headers.map(header => header.field);

  // Método que se ejecuta al inicializar el componente.
  // Configura el endpoint y procesa los datos iniciales.
  ngOnInit(): void {
    this.endpoint = 'api/' + this.tipoChurrera + '/v1/formularios/listbyquerydsl'; // Configura el endpoint
    console.log(this.endpoint);
    console.log(this.dataSource.data);
    this.procesarDatos(this.dataSource.data); // Procesa datos iniciales (vacíos por ahora)
  }

  // Método que se ejecuta al destruir el componente.
  // Cancela todas las suscripciones activas para evitar fugas de memoria.
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // Método para procesar los datos y aplicar el tratamiento según el tipo.
  // `datos` es el conjunto de datos a procesar y `headers` opcional para tratamiento C2.
  procesarDatos(datos: any, headers?: HttpHeaders) {
    if (this.tipoChurrera === 'c1') {
      this.tratamientoC1(datos); // Aplica tratamiento C1
    } else if (this.tipoChurrera === 'c2') {
      this.tratamientoC2(datos, headers); // Aplica tratamiento C2
    } else {
      console.warn('Tipo de tratamiento no reconocido'); // Aviso si el tipo no es reconocido
    }
  }
  
  // Método para tratar los datos con tipo C1.
  // `datos` contiene los resultados de la API.
  tratamientoC1(datos: any) {
    this.results = datos.content || []; // Asigna el contenido de datos o un arreglo vacío
    this.paginator_length = datos.totalElements || this.results.length; // Define la longitud de la paginación
    this.dataSource.data = this.results; // Asigna los datos a la DataSource
  }
  
  // Método para tratar los datos con tipo C2.
  // `datos` contiene los resultados de la API y `headers` para obtener información adicional.
  tratamientoC2(datos: any, headers: HttpHeaders) {
    this.results = datos; // Asigna los datos a la propiedad results
    console.log('datos: ' + this.results);
    this.paginator_length = +headers.get('total-elementos') || this.results.length; // Define la longitud de la paginación
    console.log('paginator: ' + this.paginator_length);
    this.dataSource.data = this.results; // Asigna los datos a la DataSource
    console.log(this.dataSource.data);
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
