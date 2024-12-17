import {
	Component,
	Input,
	OnChanges,
	OnInit,
	ViewChild,
} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { FomentoPaginatorComponent } from '../fomento.paginator/fomento.paginator.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';

export interface filterPreselected {
	key: string;
	value: number;
}

@Component({
	selector: 'lib-fomento-table',
	templateUrl: './fomento.table.component.html',
	styleUrls: ['./fomento.table.component.scss'],
})
export class FomentoTableComponent implements OnInit, OnChanges {

	
	rangeFechaGeneracion = new FormGroup({
		start: new FormControl('', Validators.required),
		end: new FormControl('', Validators.required),
	});
	rangeFechaFirma = new FormGroup({
		start: new FormControl('', Validators.required),
		end: new FormControl('', Validators.required),
	});

	constructor(
	){}

	cualquiera = -1;
	inputColumns;

	@ViewChild(MatSort, { static: false }) set sort(val: MatSort) {
		if (val) {
			this.dataSource.sort = val;
		}
	}

	@ViewChild(FomentoPaginatorComponent, { static: false }) set paginator(
		val: FomentoPaginatorComponent,
	) {
		if (val) {
			this.dataSource.paginator = val;
		}
	}

	select = [{value: "Nombre", description: "Nombre"}];

	@ViewChild(MatTable) table!: MatTable<unknown>;
	//@Output() propagar = new EventEmitter<unknown>();
	//@Output() propagarCheck = new EventEmitter<unknown>();
	//@Output() filtroBusquedaColumnas = new EventEmitter<unknown>();
	//@Output() emittEvent = new EventEmitter<unknown>();
	//@Input() disableNotis = false;
	dataSource = new MatTableDataSource<unknown>();
	@Input() element_data = [];
	@Input() initColumns = [];
	//@Input() filters = [];
	//@Input() tittle = '';
	//@Input() habilitaDescarga = true;
	//@Input() opcionesAdicionale = [];
	//@Input() mostrarCrear = false;
	//@Input() mostrarVolver = false;
	//@Input() rutaVolver = '#';
	//@Input() mostrarGenerados = true;
	//@Input() quitarCualquiera = true;
	//@Input() mostrarBorrar = true;
	//@Input() listaOpcionesBusqueda = [];
	//@Input() listadoAcciones = [];
	//@Input() puedeCrear = true;
	//@Input() filterPreselected = [];
	//@Input() depfilters;
	@Input() isLoading = false;
	@Input() tableDescription: string = 'Descripción aria para descripción de tabla';

	//@Input() firmadoOK = true;
	filtersParent = {};
	previousIndex = 0;
	displayedColumns = [];
	panelOpenState = false;
	mostrarFiltrado = false;
	textSearch = '';
	mySubscription;
	familiaPreseleccionada = '';
	public selectedItems: number[] = [];
	checked = false;
	checkedAll = false;
	rangoFecha = [];

	noMasiva = true;
	selectedTotal = 0;

	ngOnInit(): void {
		this.displayedColumns = this.initColumns.map((col) => col.id);
		//this.filtersParent = new Array(this.filters.length);
		//this.filterPreselected = [];
		this.initTable();
	}

	ngOnChanges(): void {
		this.selectedItems.length = 0;
		this.displayedColumns = this.initColumns.map((col) => col.id);
		this.initTable();
	}


	initTable() {
		this.checked = false;
		this.checkedAll = false;
		this.dataSource = new MatTableDataSource(this.element_data);
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
	  }
	  
}

