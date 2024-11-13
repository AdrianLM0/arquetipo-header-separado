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

	dataEvent(data){
		// Hacer la petición POST usando RequestApiService
		this.requestApi.post(this.endpointUrl, data).subscribe({
			next: (response) => {
	  
			  console.log('DATOS GUARDADOS', data); 
			},
			error: (error) => {
	  
			}
		  });
	}
}
