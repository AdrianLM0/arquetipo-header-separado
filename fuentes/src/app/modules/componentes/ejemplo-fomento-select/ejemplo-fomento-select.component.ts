import { Component } from '@angular/core';

@Component({
	selector: 'app-ejemplo-fomento-select',
	templateUrl: './ejemplo-fomento-select.component.html',
	styleUrls: ['./ejemplo-fomento-select.component.scss'],
})
export class EjemploFomentoSelectComponent {
	data = ['Opcion1', 'Opcion2'];
	label = 'Selector';
	disabled = false;
}
