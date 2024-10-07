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
	name = 'chx';
	label = 'Marcar opción';
}
