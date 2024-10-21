import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ejemplo-fomento-select',
	templateUrl: './ejemplo-fomento-select.component.html',
	styleUrls: ['./ejemplo-fomento-select.component.scss'],
})
export class EjemploFomentoSelectComponent implements OnInit {
	data = []; 
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

	ngOnInit() {
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
