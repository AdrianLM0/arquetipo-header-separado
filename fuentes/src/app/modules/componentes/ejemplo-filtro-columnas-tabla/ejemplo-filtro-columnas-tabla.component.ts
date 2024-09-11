import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableColumn } from '@fomento/i-rf-web-component-node-lib';

@Component({
	selector: 'app-ejemplo-filtro-columnas-tabla',
	templateUrl: './ejemplo-filtro-columnas-tabla.component.html',
	styleUrls: ['./ejemplo-filtro-columnas-tabla.component.scss'],
})
export class EjemploFiltroColumnasTablaComponent implements OnInit {
	// Actualizamos las columnas para que coincidan con las del datagrid
	columns: TableColumn[] = [
		{ header: 'Código', field: 'codigo', visible: true },
		{ header: 'Nombre', field: 'nombre', visible: true },
		{ header: 'Descripción', field: 'descripcion', visible: true },
		{ header: 'Fecha Creación', field: 'audAlta', visible: true },
		{ header: 'Usuario Modificación', field: 'usuModifica', visible: true },
	];

	dataSource = [];

	private apiUrl = 'http://localhost:8080/api/c1/v1/formularios/listbyquerydsl'; // Endpoint del backend

	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		this.fetchData();
	}

	// Método para obtener datos desde el backend
	fetchData(): void {
		this.http.get<any>(this.apiUrl).subscribe(
			(data) => {
				// Asigna los datos traídos del backend, asegurándonos de usar 'content'
				this.dataSource = data.content || data;
			},
			(error) => {
				console.error('Error fetching data from API', error);
			}
		);
	}

	get displayedColumns(): string[] {
		// Solo mostramos las columnas que están marcadas como visibles
		return this.columns
			.filter((column) => column.visible)
			.map((column) => column.field);
	}

	onColumnsChange(updatedColumns: TableColumn[]): void {
		// Actualizamos las columnas con la visibilidad nueva
		this.columns = updatedColumns;
	}
}
