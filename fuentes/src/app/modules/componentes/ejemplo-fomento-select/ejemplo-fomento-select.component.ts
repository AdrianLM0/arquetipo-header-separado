import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-ejemplo-fomento-select',
	templateUrl: './ejemplo-fomento-select.component.html',
	styleUrls: ['./ejemplo-fomento-select.component.scss'],
})
export class EjemploFomentoSelectComponent implements OnInit {
	data = []; // Opciones que se cargarán desde el backend
	label = 'Selector'; // Etiqueta del select
	disabled = false; // Si el select está deshabilitado
	isRequired = true; // Si es requerido
	defaultOptionText = '- Elija una opción -'; // Texto de la opción por defecto
	additionalDescription = 'Seleccione una opción para continuar'; // Descripción accesible
	hasError = false; // Si hay un error
	errorMessage = ''; // Mensaje de error

	constructor(private http: HttpClient) {}

	ngOnInit() {
		this.fetchSelectOptions();
	}

	// Cargar las opciones del select desde el backend
	fetchSelectOptions() {
		const endpoint = 'http://localhost:8080/api/c1/v1/formularios/list'; 

		this.http.get<any>(endpoint).subscribe(
			(data) => {
				if (Array.isArray(data)) {
					this.data = data.map((item) => ({
						value: item.id,
						description: item.nombre
					}));
				} else {
					this.handleError('Error: formato de datos incorrecto o vacío.');
				}
			},
			(error) => {
				this.handleError('Error al obtener los datos del select.');
			}
		);
	}

	// Manejador de errores
	handleError(message: string) {
		this.hasError = true;
		this.errorMessage = message;
	}

	// Manejador de cambio de opción
	onOptionChange(selectedOption: string) {
		console.log('Opción seleccionada:', selectedOption);
		// Aquí puedes manejar lo que ocurre al cambiar de opción
	}
}
