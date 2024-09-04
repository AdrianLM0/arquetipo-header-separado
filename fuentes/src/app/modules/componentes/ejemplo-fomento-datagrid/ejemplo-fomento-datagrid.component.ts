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
	// Nombre de la API que se mostrará en el componente DataGrid
	api_name = 'Listado de Formularios';

	// Definición de las columnas que se mostrarán en la tabla, cada objeto contiene:
	// - header: El nombre de la columna visible en la tabla.
	// - field: El campo de datos al que se asocia la columna.
	// - visible: Indica si la columna está visible o no.
	table_headers = [
		{ header: 'Código', field: 'codigo', visible: true },
		{ header: 'Nombre', field: 'nombre', visible: true },
		{ header: 'Descripción', field: 'descripcion', visible: true },
		{ header: 'Fecha Creación', field: 'audAlta', visible: true },
		{ header: 'Usuario Modificación', field: 'usuModifica', visible: true },
	];

	// ID de la tabla para ser utilizada en el componente DataGrid
	idTable = 1;

	// Indica si se deben mostrar acciones (botones) en la tabla
	actions = true;

	// Índice de las acciones, por defecto es -1 lo que indica que no hay acción seleccionada
	actions_index = -1;

	// Opciones de número de filas por página en la tabla
	rowsPerPageOptions = [5, 10, 15];

	// Listado auxiliar de acciones adicionales que se mostrarán en la tabla
	listadoAccionesAux = Constants.EJEMPLO_LISTADO_ACCIONES_AUX;

	// Muestra el botón de descarga en la tabla si es verdadero
	show_download = true;

	// Permite la selección múltiple de filas si es verdadero
	multicheck = true;

	// Etiqueta para el checkbox de selección múltiple
	multi_check_label = 'Multiseleccion';

	// Índice de selección múltiple en la tabla, por defecto es -1 (sin selección)
	multi_check_index = -1;

	// Etiqueta para la columna que contiene la selección múltiple
	multi_check_label_col = 'Botón multiselección';

	// Indica si el filtro universal está habilitado
	universal_filter = true;

	// Tipo de filtro, puede ser 'advance', 'column', o 'none'
	filter = 'advance';

	// Formulario asociado a la tabla, definido en las constantes
	form = Constants.EJEMPLO_FORMULARIO_TABLA;

	// Parámetro de tamaño de página, utilizado en la API
	sizePageParam = 'size';

	// Parámetro de número de página, utilizado en la API
	nPageParam = 'page';

	// Nombre del contenido de la respuesta de la API
	apiContent = 'result';

	// Indica si el formulario de expansión está habilitado
	expansion_form = true;

	// Muestra el ícono de ayuda si es verdadero
	show_ayuda = true;

	// Muestra el botón de limpiar filtros si es verdadero
	show_clean = true;

	// Muestra el botón de seleccionar columnas si es verdadero
	show_fcolumnas = true;

	// ID de la tabla (lo mismo que `idTable`, podría unificarse)
	id_table = 1;

	// ID del subsistema al que pertenece la tabla
	id_subsistema = '209QMHJ1F';

	// URL base del API para la tabla
	hostApi = 'http://localhost:8080';

	// Endpoint para obtener los datos de la tabla
	endpoint = 'api/v1/formularios/listbyquerydsl';

	// API y endpoint para la paginación (aún no configurado)
	hostapiPaginator = '';
	endpointPaginator = '';

	// API y endpoint para los filtros (aún no configurado)
	hostapiFilter = '';
	endpointFilter = '';

	// API y endpoint para guardar filtros (aún no configurado)
	hostapiSaveFilter = '';
	endpointSaveFilter = '';

	// API y endpoint para filtros de usuario (aún no configurado)
	hostapiFiltroUsuarioApi = '';
	endpointFiltroUsuarioApi = '';

	// Texto para el botón de reset del formulario
	reset_button_form = 'CANCELAR';

	// Texto para el botón de submit del formulario
	submit_button_form = 'CONFIRMAR';

	// Indica si el botón de submit del formulario debe ser mostrado
	showSubmitForm = true;

	// Indica si el botón de reset del formulario debe ser mostrado
	showResetForm = true;

	// Indica si el formulario debe ser validado antes de ser enviado
	validate_form = true;

	// Habilita un formulario alternativo en la tabla
	alt_form = true;

	// Etiqueta para el formulario alternativo
	alt_label_form = 'ETIQUETA';

	// Variable para almacenar suscripciones y manejarlas de manera centralizada para limpiar al destruir el componente
	private subscription: Subscription = new Subscription();

	constructor(private http: HttpClient) {}

	// Método que se ejecuta al destruir el componente
	// Se asegura de cancelar todas las suscripciones activas para evitar fugas de memoria
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	// Método para manejar la acción de descargar datos desde el componente DataGrid
	// `datosTabla` contiene la información de la tabla que será descargada
	descargar(datosTabla: any) {
		console.log('DESCARGAR TABLA: ', datosTabla);
		// Lógica para descargar la tabla en un archivo o formato específico
	}

	// Método para manejar el evento del ícono de ayuda desde el componente DataGrid
	iconoAyuda() {
		console.log('BOTÓN DE AYUDA FUNCIONA CORRECTAMENTE');
		// Lógica para mostrar la ayuda o abrir un modal con información
	}

	// Método para manejar la selección de filas (multicheck) desde el componente DataGrid
	// `datosSeleccionados` contiene las filas seleccionadas por el usuario
	check(datosSeleccionados: any) {
		console.log('LAS LÍNEAS SELECCIONADAS SON: ', datosSeleccionados);
		// Lógica para procesar las filas seleccionadas, como acciones masivas
	}
}
