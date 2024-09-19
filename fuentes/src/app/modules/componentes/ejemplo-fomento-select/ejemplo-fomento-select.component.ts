import { Component } from '@angular/core';

@Component({
	selector: 'app-ejemplo-fomento-select',
	templateUrl: './ejemplo-fomento-select.component.html',
	styleUrls: ['./ejemplo-fomento-select.component.scss'],
})
export class EjemploFomentoSelectComponent {
	data = [
		{ value: 'opcion1', description: 'Opción 1' },
		{ value: 'opcion2', description: 'Opción 2' }
	];
	label = 'Selector';
	disabled = false;
}
