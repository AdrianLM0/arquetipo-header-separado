import {
	AfterViewInit,
	Directive,
	EventEmitter,
	Input,
	Output,
	SimpleChanges,
	TemplateRef,
	ViewChild,
} from '@angular/core';
import { TableColumn } from '../fomento.filtro-columnas-tabla/table-column.model';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FomentoPaginatorComponent } from '../fomento.paginator/fomento.paginator.component';

export interface TableCell {
	[key: string]: unknown;
}

@Directive()
export abstract class DatagridBase implements AfterViewInit {

	/* ------------------------------------------------------------------ */
	/* Inputs generales                                                   */
	/* ------------------------------------------------------------------ */

	@Input() name = ''; // Nombre clave de la tabla
	@Input() table_headers: TableColumn[] = [ // Cabeceras dinámicas de la tabla
		{ header: 'Columna 1', field: 'c1', visible: true },
		{ header: 'Columna 2', field: 'c2', visible: true },
	];
	@Input() table_data: TableCell[] = []; // Datos de la tabla
	@Input() filter: 'column' | 'advance' | 'none' = 'advance'; // Tipo de filtro (columna, avanzado o ninguno)

	/* ------------------------------------------------------------------ */
	/* Inputs de personalización de textos                                */
	/* ------------------------------------------------------------------ */
	@Input() helpButtonAriaLabel: string = ''; // Etiqueta del botón de ayuda
	@Input() globalFilterLabel: string = ''; // Etiqueta del filtro global
	@Input() dialogTitle: string = ''; // Título del diálogo de consulta


	/* ------------------------------------------------------------------ */
	/* Inputs de configuración de la tabla                                */
	/* ------------------------------------------------------------------ */

	@Input() show_download = true; // Mostrar botón de descargar
	@Input() show_clean = true; // Mostrar botón de limpiar
	@Input() show_fcolumnas = true; // Mostrar filtro de columnas
	@Input() show_ayuda = true; // Mostrar ícono de ayuda

	/* ------------------------------------------------------------------ */
	/* Inputs de configuración de acciones                                */
	/* ------------------------------------------------------------------ */

	@Input() actions_index = -1; // Índice de la columna de acciones
	@Input() actions_label = "Acciones"; // Etiqueta de la columna de acciones
	@Input() actions = true; // Habilitar columna de acciones
	@Input() listadoAccionesAux = []; // Lista de acciones auxiliares
	@Input() show_actions = false; // Mostrar u ocultar columna de acciones

	/* ------------------------------------------------------------------ */
	/* Inputs de configuración de selección múltiple                      */
	/* ------------------------------------------------------------------ */

	@Input() multicheck = true; // Habilitar selección múltiple
	@Input() multi_check_label = 'Multiseleccion'; // Etiqueta de selección múltiple
	@Input() multi_check_index = -1; // Índice de la columna de selección múltiple
	@Input() multi_check_label_col = ''; // Etiqueta de la columna de selección múltiple
	@Input() multi_check_type: 'text' | 'button' = "button"; // Tipo de selección múltiple (texto o botón)
	@Input() multicheck_icono; // Ícono para selección múltiple

	/* ------------------------------------------------------------------ */
	/* Inputs del formulario                                              */
	/* ------------------------------------------------------------------ */

	@Input() form; // Configuración del formulario de filtro
	@Input() reset_button_form = 'CANCELAR'; // Etiqueta del botón de reset
	@Input() submit_button_form = 'GUARDAR'; // Etiqueta del botón de submit
	@Input() show_header = true; // Mostrar encabezado del formulario
	@Input() showSubmitForm = true; // Mostrar botón de enviar en el formulario
	@Input() showResetForm = true; // Mostrar botón de reset en el formulario
	@Input() showAuxForm = true; // Mostrar botón auxiliar en el formulario
	@Input() aux_label = "FILTRAR"; // Etiqueta del botón auxiliar
	@Input() validate_form = false; // Validar formulario
	@Input() expansion_form = false; // Habilitar formulario expandible

	/* ------------------------------------------------------------------ */
	/* Outputs: eventos emitidos                                          */
	/* ------------------------------------------------------------------ */

	@Output() checkAction = new EventEmitter<unknown>(); // Evento de selección múltiple
	@Output() helpIconAction = new EventEmitter<string>(); // Evento de clic en el ícono de ayuda
	@Output() downloadAction = new EventEmitter<TableColumn[]>(); // Evento para descargar
	@Output() submitAction_form = new EventEmitter<unknown>(); // Evento al enviar formulario
	@Output() changeSelectorAction_form = new EventEmitter<unknown>(); // Evento al cambiar selector en formulario


	/* ------------------------------------------------------------------ */
	/* Propiedades internas del componente base                           */
	/* ------------------------------------------------------------------ */

	consultas_guardadas; // Almacena las consultas de filtros guardadas por el usuario
	consultas_parse; // Almacena las consultas guardadas en un formato parseado para su uso en selects
	dataSource; // Fuente de datos para alimentar la tabla
	inputColumns: Array<unknown> = []; // Almacena las columnas de entrada para filtros dinámicos
	formArray; // Almacena el formulario dinámico generado por las columnas
	rowSelected: Array<unknown> = []; // Almacena las filas seleccionadas en selección múltiple
	check_value = false; // Indica si la selección múltiple está activada (true) o desactivada (false)
	dialogValue; // Almacena el valor ingresado en el cuadro de diálogo de filtros
	paginator_version; // Versión del paginador utilizado (por ejemplo, 'api' o 'json')
	displayedColumns: Array<string> = []; // Lista de columnas visibles en la tabla


	@ViewChild('template') customTemplate!: TemplateRef<unknown>;
	@ViewChild(MatSort) sort?: MatSort;
	@ViewChild(FomentoPaginatorComponent)
	
	private _paginator: FomentoPaginatorComponent;
	public get paginator(): FomentoPaginatorComponent {
		return this._paginator;
	}
	public set paginator(value: FomentoPaginatorComponent) {
		this._paginator = value;
	}

	constructor(public dialog: MatDialog) { }

	initTable(updateFilter?) {
		this.inputColumns = [];
		this.displayedColumns = [];

		// Inicialización de las columnas de la tabla
		this.table_headers.forEach((row: TableColumn) => {
			if (row.index !== undefined && row.visible) {
				this.displayedColumns.splice(row.index, 0, row.field);
			} else if (row.visible) {
				this.displayedColumns.push(row.field);
			}
		});

		// Incluir o excluir la columna de acciones según el valor de showActions
		if (this.show_actions) {
			if (!this.displayedColumns.includes('acciones')) {
				if (this.actions_index >= 0 && this.actions_index < this.displayedColumns.length) {
					this.displayedColumns.splice(this.actions_index, 0, 'acciones');
				} else {
					this.displayedColumns.push('acciones');
				}
			}
		} else {
			// Si showActions es false, eliminar la columna de acciones si existe
			const index = this.displayedColumns.indexOf('acciones');
			if (index !== -1) {
				this.displayedColumns.splice(index, 1);
			}
		}

		// Agrega la columna de selección múltiple si está habilitada
		if (this.multicheck) {
			if (this.multi_check_index >= 0 && this.multi_check_index < this.displayedColumns.length) {
				this.displayedColumns.splice(this.multi_check_index, 0, 'seleccion');
			} else {
				this.displayedColumns.push('seleccion');
			}
		}

		// Prepara las columnas de entrada para los filtros
		this.displayedColumns.forEach((row) => this.inputColumns.push('input' + row));

		this.formArray = new FormArray(
			this.table_headers.map(() =>
				new FormGroup({
					filterValue: new FormControl(''),
				}),
			),
		);

		this.auxInitTable(updateFilter); // Método que puede ser sobrescrito
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['showActions']) {
			this.initTable(); // Reconfigura las columnas cuando cambia showActions
		}
	}


	auxInitTable(updateFilter?) {
		//console.log('Sobreescribir en el componente implementado', updateFilter);
	}

	ngAfterViewInit() {
		this.dataSource.sort = this.sort;
	}

	getFieldValue(data, field): string {
		const fields = field.split('.');
		let value = data;
		for (const f of fields) {
			if (value && typeof value === 'object') {
				if (value instanceof Array) {
					value = value.map((x) => x[f]);
				} else {
					value = value[f];
				}
			} else {
				return '';
			}
		}
		return value || '';
	}

	isCheck(checked: unknown, rowData) {
		const parse_checked = checked as boolean;
		if (parse_checked) {
			this.rowSelected.push(rowData);
		} else {
			this.rowSelected.splice(this.rowSelected.indexOf(rowData), 1);
		}
	}

	controlCheck(checked: unknown) {
		this.check_value = checked as boolean;
		if (checked) {
			this.rowSelected = this.table_data;
		} else {
			this.rowSelected = [];
		}
	}

	onColumnsChange(updatedColumns: unknown): void {
		// Simplemente actualiza el array de columnas con la nueva visibilidad

		this.table_headers = updatedColumns as TableColumn[];

		this.initTable();
	}

	openDialog(): void {
		this.dialog.open(this.customTemplate, {
			width: '50%',
			height: '30%',
		});
	}

	emitHelpIconEvent() {
		this.helpIconAction.emit();
	}

	emitDownloadEvent() {
		this.downloadAction.emit(this.table_headers);
	}

	emitCheckEvent() {
		this.checkAction.emit(this.rowSelected);
	}

	getControl(index: string, controlName: string): FormControl {
		const aux: string[] = [];
		this.table_headers.forEach((x) => aux.push(x.field));
		return (this.formArray.at(aux.indexOf(index)) as FormGroup).get(
			controlName,
		) as FormControl;
	}

	reiniciarPaginador() {
		this.paginator.firstPage()
	}
}