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
}
