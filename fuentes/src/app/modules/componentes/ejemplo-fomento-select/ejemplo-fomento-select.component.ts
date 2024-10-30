import { Component, OnInit } from '@angular/core';
import { RequestApiService } from '@fomento/i-rf-logic-component-node-lib';

@Component({
	selector: 'app-ejemplo-fomento-select',
	templateUrl: './ejemplo-fomento-select.component.html',
	styleUrls: ['./ejemplo-fomento-select.component.scss'],
})
export class EjemploFomentoSelectComponent implements OnInit {
	data = [
		{value: '1', description: 'Opcion 1'},
		{value: '2', description: 'Opcion 2'},
	]; 
	label = 'Selector'; 
	disabled = false;
	placeholder = 'Elije una opción'

	hostApi = 'http://localhost:8080';

	tipoChurrera = 'c1';
	isRequired = true; 
	defaultOptionText = '- Elija una opción -'; 
	additionalDescription = 'Seleccione una opción para continuar';
	hasError = false; 
	errorMessage = ''; 
	hasSelectedOption = false; 

	// URL de la API desde la que se obtienen los datos
	apiUrl = this.hostApi + '/api/' + this.tipoChurrera + '/v1/formularios/list'; // Si se deja vacío se usaran los datos de "data".

	constructor(private requestApi: RequestApiService) {}

	ngOnInit() {
		if (this.apiUrl){
			this.fetchSelectOptions(); 
		}
	}

	fetchSelectOptions() {
		this.requestApi.get<any>(this.apiUrl).subscribe(
			(data) => {
				console.log('Datos del backend:', data);

				if (Array.isArray(data)) {
					this.data = data.map((item) => ({
						value: item.id,
						description: item.nombre,
					}));

					console.log('Opciones cargadas desde el backend:', this.data);
				} else {
					this.handleError('Error: formato de datos incorrecto o vacío.');
				}
			},
			(error) => {
				this.handleError('Error al obtener los datos del select: ' + error.message);
			}
		);
	}

	// Manejador de errores
	handleError(message: string) {
		this.hasError = true;
		this.errorMessage = message;
	}

	// Manejador de cambio de opción
	onOptionChange(selectedOption: unknown) {  // Cambiar el tipo a unknown
		if (typeof selectedOption === 'string') {
		  if (selectedOption !== 'option1') {
			this.hasSelectedOption = true;
			this.additionalDescription = ''; 
		  } else {
			this.hasSelectedOption = false;
			this.additionalDescription = 'Seleccione una opción para continuar'; 
		  }
		  console.log('Opción seleccionada:', selectedOption);
		} else {
		  console.error('El valor seleccionado no es un string:', selectedOption);
		}
	  }
	  
}
