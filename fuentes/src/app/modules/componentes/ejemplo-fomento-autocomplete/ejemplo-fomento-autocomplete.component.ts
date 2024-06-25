import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-fomento-autocomplete',
	templateUrl: './ejemplo-fomento-autocomplete.component.html',
	styleUrls: ['./ejemplo-fomento-autocomplete.component.scss'],
})
export class EjemploFomentoAutocompleteComponent {
	//Propiedades de mat-autocomplete

	ariaLabel: string;
	ariaLabelledby: string;
	autoActiveFirstOption = false;
	disabledRipple = false;
	hideSingleSelectionIndicator = false;
	panelWidth: string | number;
	requireSelection: boolean;

	myControl = new FormControl('');
	label = 'Entidades y organismos adscritos';
	options: string[] = [
		'Agencia de Vivienda y Rehabilitación de Andalucía',
		'Agencia de Obra Pública de la Junta de Andalucía',
		'Agencia Pública de Puertos de Andalucía',
		'Red Logística de Andalucía, S.A.',
		'Consorcio de Transporte Metropolitano del Área de Almería',
		'Consorcio Metropolitano de Transportes de la Bahía de Cádiz',
		'Consorcio de Transporte Metropolitano del Campo de Gibraltar',
		'Consorcio de Transporte Metropolitano del Área de Córdoba',
		'Consorcio de Transporte Metropolitano del Área de Granada',
		'Consorcio de Transporte Metropolitano de la Costa de Huelva',
		'Consorcio de Transporte Metropolitano del Área de Jaén',
		'Consorcio de Transporte Metropolitano del Área de Málaga',
		'Consorcio de Transporte Metropolitano del Área de Sevilla',
		'Consorcio Palacio de Exposiciones y Congresos de Granada',
		'Cetursa Sierra Nevada, S.A.',
		'Apartahotel Trevenque, S.A.',
	];
}
