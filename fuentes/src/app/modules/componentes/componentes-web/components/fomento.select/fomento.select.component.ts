import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'lib-fomento-select',
	templateUrl: './fomento.select.component.html',
	styleUrls: ['./fomento.select.component.scss'],
})
export class FomentoSelectComponent {
	@Input() data: {value: string, description: string}[];
	@Input() label = '';
	@Input() disabled: boolean;
	@Input() default = '- Elija una opción -';
	@Input() formControlName = "";
	@Input() additionalDescription =''; // Texto que aparecerá debajo del select mientras que no se seleccione ninguuna opción.
	@Input() ariaLabel = '';
	@Input() ariaLabelledby = ''; 
	@Input() isRequired = false; 
	@Input() readonly = false; 
	@Input() endpoint: string;
	
	hideRequiredMarker = false;
	hasError = false; 
	errorMessage = ''; 
	hasSelectedOption = false;	

	selectId = 'fomento-select-' + Math.random().toString(36).substring(2);
	@Output() changeOptionAction = new EventEmitter<unknown>();
	@Output() selectedChange: EventEmitter<string> = new EventEmitter<string>();
	descriptionId = 'fomento-select-description'; 
	@Input() selected = 'option1';

	constructor(
	){}
	  
	selectEvent(value: string) { 
		this.selected = value; // Actualiza el valor seleccionado
		this.selectedChange.emit(value); // Emite el cambio al componente padre
		this.changeOptionAction.emit(value); // Emite acción adicional
	  }

	
// Manejador de errores
	handleError(message: string) {
		this.hasError = true;
		this.errorMessage = message;
	}

	// Manejador de cambio de opción
	onOptionChange(selectedOption: unknown) {  // Cambiar el tipo a unknown
		if (typeof selectedOption === 'string') {
			//TODO el valor del selector puede cambiar, por lo que, de mantener esta función, habría que revisar otras posibilidades que no fueran comprobar un valor estático.
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
