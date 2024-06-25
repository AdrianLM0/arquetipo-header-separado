import { Component } from '@angular/core';
import { TableColumn } from '@fomento/i-rf-web-component-node-lib';

@Component({
	selector: 'app-ejemplo-filtro-columnas-tabla',
	templateUrl: './ejemplo-filtro-columnas-tabla.component.html',
	styleUrls: ['./ejemplo-filtro-columnas-tabla.component.scss'],
})
export class EjemploFiltroColumnasTablaComponent {
	columns: TableColumn[] = [
		{ header: 'ID', field: 'id', visible: true },
		{ header: 'Nombre', field: 'name', visible: true },
		{ header: 'Edad', field: 'age', visible: true },
		{ header: 'Ciudad', field: 'city', visible: true },
		{ header: 'Profesión', field: 'profession', visible: true },
	];

	dataSource = [
		{
			id: 1,
			name: 'Juan Pérez',
			age: 30,
			city: 'Madrid',
			profession: 'Ingeniero',
		},
		{
			id: 2,
			name: 'Laura Martínez',
			age: 25,
			city: 'Barcelona',
			profession: 'Diseñadora',
		},
		{
			id: 3,
			name: 'Carlos Gómez',
			age: 40,
			city: 'Sevilla',
			profession: 'Arquitecto',
		},
		{
			id: 4,
			name: 'Ana López',
			age: 35,
			city: 'Valencia',
			profession: 'Doctora',
		},
		{
			id: 5,
			name: 'Pedro González',
			age: 28,
			city: 'Bilbao',
			profession: 'Abogado',
		},
	];

	get displayedColumns(): string[] {
		return this.columns
			.filter((column) => column.visible)
			.map((column) => column.field);
	}

	onColumnsChange(updatedColumns: unknown): void {
		// Simplemente actualiza el array de columnas con la nueva visibilidad
		this.columns = updatedColumns as TableColumn[];
	}
}
