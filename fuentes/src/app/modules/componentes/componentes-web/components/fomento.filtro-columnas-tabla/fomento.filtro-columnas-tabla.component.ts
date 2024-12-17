import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { TableColumn } from './table-column.model';
import { Observable, map, of, startWith } from 'rxjs';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
	selector: 'lib-fomento-filtro-columnas-tabla',
	templateUrl: './fomento.filtro-columnas-tabla.component.html',
	styleUrls: ['./fomento.filtro-columnas-tabla.component.scss'],
})
export class FomentoFiltroColumnasTablaComponent implements OnInit {
	@Input() columns: TableColumn[] = [];
	@Output() columnsChange = new EventEmitter<TableColumn[]>();
	@Input() label = '';
	@Input() appearance: MatFormFieldAppearance = 'outline';
	@Input() placeholder = '';
	@Input() enableSearch: boolean = true;

	filterControl = new FormControl([]);
	searchText: string = '';
	filteredColumns: TableColumn[] = [];

	// Esta propiedad mantiene el estado de visibilidad de todas las columnas
	allColumnsVisibility: { [key: string]: boolean } = {};

	ngOnInit(): void {
		// Inicializar el registro de visibilidad
		this.columns.forEach((column) => {
			this.allColumnsVisibility[column.field] = column.visible;
		});

		// Establecer las columnas seleccionadas inicialmente en el mat-select
		this.filterControl.setValue(
			this.columns
				.filter((column) => column.visible)
				.map((column) => column.field),
		);

		this.filteredColumns = [...this.columns];

		// Suscribirse a los cambios de valor del mat-select
		this.filterControl.valueChanges.subscribe((newSelection) => {
			// Actualizar el registro de visibilidad según la nueva selección
			this.columns.forEach((column) => {
				this.allColumnsVisibility[column.field] = newSelection.includes(
					column.field,
				);
			});

			// Emitir un cambio con el registro de visibilidad actualizado
			this.emitColumnVisibilityChange();
		});
	}

	filterColumns(search: string): TableColumn[] {
		const filterText = search.toLowerCase();
		return this.columns.filter((column) =>
			column.header.toLowerCase().includes(filterText),
		);
	}

	applyFilter(): void {
		const filterValue = this.searchText.toLowerCase();
		this.filteredColumns = this.columns.filter((column) =>
		  column.header.toLowerCase().includes(filterValue),
		);
	  }

	emitColumnVisibilityChange(): void {
		// Emitir el evento con el estado actualizado de visibilidad para todas las columnas
		this.columns = this.columns.map((column) => ({
			...column,
			visible: this.allColumnsVisibility[column.field],
		  }));

		  this.columnsChange.emit(this.columns);
	}

	// Método que retorna las columnas visibles en el orden adecuado
	get displayedColumns(): string[] {
		// Filtra las columnas que son visibles y retorna su campo (field)
		return this.columns
		  .filter((column) => column.visible)
		  .map((column) => column.field);
	}

	// Método para manejar los cambios en las columnas visibles
	onColumnsChange(updatedColumns: TableColumn[]): void {
		this.columns = updatedColumns;// Actualiza el array de columnas
	}

	clearSearch(): void {
		// Desmarca todas las selecciones
		this.filterControl.setValue([]);
		// Actualiza el estado de visibilidad de las columnas
		this.columns.forEach((column) => {
			column.visible = false;
		});
		// Emite el cambio para actualizar la tabla
		this.columnsChange.emit(this.columns);
	}
}
