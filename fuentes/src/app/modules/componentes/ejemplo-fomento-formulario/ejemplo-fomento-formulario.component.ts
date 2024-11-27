import { Component } from '@angular/core';
import { Constants } from '../../../config/constants';
import { RequestApiService } from '@fomento/i-rf-logic-component-node-lib';

@Component({
	selector: 'app-ejemplo-fomento-formulario',
	templateUrl: './ejemplo-fomento-formulario.component.html',
	styleUrls: ['./ejemplo-fomento-formulario.component.scss'],
})
export class EjemploFomentoFormularioComponent {
	endpointUrl="" //Endpoint que hará la función de guardar los datos del formulario al pulsar el botón de 'submit'
	form_config = Constants.EJEMPLO_FORMULARIO;
	reset_button = 'BORRAR';
	submit_button = 'GUARDAR';
	showSubmit = true;
	showReset = true;

	constructor(private requestApi: RequestApiService) { }

	//Evento que se emite desde la librería web al pulsar el botón de guardar o submit del formulario
	//Emite un set de datos con la información del formulario
	dataEvent(data){
		// Hacer la petición POST usando RequestApiService
		console.log('DATOS GUARDADOS', data);
		// this.requestApi.post(this.endpointUrl, data).subscribe({
		// 	next: (response) => {
	  
			   
		// 	},
		// 	error: (error) => {
	  
		// 	}
		//   });
	}


	aux_button_event(data){
		console.log("Los datos del formulario son: ", data)
	}
}
