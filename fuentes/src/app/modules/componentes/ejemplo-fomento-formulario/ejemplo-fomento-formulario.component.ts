import { Component } from '@angular/core';
import { Constants } from '../../../config/constants';

@Component({
	selector: 'app-ejemplo-fomento-formulario',
	templateUrl: './ejemplo-fomento-formulario.component.html',
	styleUrls: ['./ejemplo-fomento-formulario.component.scss'],
})
export class EjemploFomentoFormularioComponent {
	form_config = Constants.EJEMPLO_FORMULARIO;
	reset_button = 'TRAMITAR';
	submit_button = 'GUARDAR';
	showSubmit = true;
	showReset = true;

	prueba(data) {
		console.log('FORMULARIO RECIBIDO', data);
	}
}