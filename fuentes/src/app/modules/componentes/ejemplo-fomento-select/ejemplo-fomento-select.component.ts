import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-ejemplo-fomento-select',
	templateUrl: './ejemplo-fomento-select.component.html',
	styleUrls: ['./ejemplo-fomento-select.component.scss'],
})
export class EjemploFomentoSelectComponent implements OnInit {
	data = []; 
	label = 'Selector'; 
	disabled = false;
	isRequired = true; 
	defaultOptionText = '- Elija una opción -'; 
	additionalDescription = 'Seleccione una opción para continuar';
	hasError = false; 
	errorMessage = ''; 
	hasSelectedOption = false; 

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
		if (selectedOption !== 'option1') {
			this.hasSelectedOption = true;
			this.additionalDescription = ''; 
		} else {
			this.hasSelectedOption = false;
			this.additionalDescription = 'Seleccione una opción para continuar'; 
		}
		console.log('Opción seleccionada:', selectedOption);
	}
}
