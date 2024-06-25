import { Component } from '@angular/core';

@Component({
	selector: 'app-ejemplo-fomento-input-group',
	templateUrl: './ejemplo-fomento-input-group.component.html',
	styleUrls: ['./ejemplo-fomento-input-group.component.scss'],
})
export class EjemploFomentoInputGroupComponent {
	typeStyle = 'material';

	width_input = '100%';
	input_msgError = '';
	placeholder = 'Placeholder';
	type = 'text';
	value = '';
	id = 'sample';
	name = 'name';
	button_label = '';
	button_icon = 'search';
	button_icon_theme = 'info';
	button_href = '#';
	button_target = '_self';
	disabled = false;
}
