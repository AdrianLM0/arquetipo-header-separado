import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-ejemplo-fomento-select',
	templateUrl: './ejemplo-fomento-select.component.html',
	styleUrls: ['./ejemplo-fomento-select.component.scss'],
})
export class EjemploFomentoSelectComponent implements OnInit {
	data = [
		{ value: 'opcion1', description: 'Opción 1' },
		{ value: 'opcion2', description: 'Opción 2' }
	];
	label = 'Selector';
	disabled = false;

	constructor(private http: HttpClient) {}

	ngOnInit() {
		this.fetchSelectOptions();
	}

	fetchSelectOptions() {
		const endpoint = 'http://localhost:8080/api/c1/v1/formularios/list'; 

		this.http.get<any>(endpoint).subscribe(
			(data) => {
				console.log('Datos del backend:', data); 

				if (Array.isArray(data)) {
					this.data = data.map((item) => ({
						value: item.id,      
						description: item.nombre  
					}));

					console.log('Opciones cargadas desde el backend:', this.data); 
				} else {
					console.error('Error: formato de datos incorrecto o vacío.');
				}
			},
			(error) => {
				console.error('Error al obtener los datos del select:', error);
			}
		);
	}
}
