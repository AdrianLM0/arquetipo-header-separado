import { Component } from '@angular/core';

@Component({
	selector: 'app-ejemplo-fomento-checkbox',
	templateUrl: './ejemplo-fomento-checkbox.component.html',
	styleUrls: ['./ejemplo-fomento-checkbox.component.scss'],
})
export class EjemploFomentoCheckboxComponent {
	typeStyle = 'material'; 
	checked = false; 
	disabled = false; 
	readonly = false; 
	name = 'chx'; 
	label = 'Marcar opción';
	ariaLabel = 'Seleccionar esta opción'; 
	ariaDescribedBy = 'description-id'; 
	errorMessage = ''; 
	errorLive = true;

	// Aquí definimos la propiedad `value` para pasarla al componente hijo
	value = 'checkboxValue';

	// Función que maneja el evento de cambio del checkbox
	handleCheck(checked: boolean) {
		this.checked = checked;
		if (!this.checked) {
			this.errorMessage = 'Debe marcar esta opción.';
		} else {
			this.errorMessage = ''; 
		}
	}
}
