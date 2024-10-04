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

	constructor(private http: HttpClient) {}

	ngOnInit() {
		this.fetchSelectOptions();
	}

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

	handleError(message: string) {
		this.hasError = true;
		this.errorMessage = message;
	}

	onOptionChange(selectedOption: string) {
		console.log('Opción seleccionada:', selectedOption);
	}
}
