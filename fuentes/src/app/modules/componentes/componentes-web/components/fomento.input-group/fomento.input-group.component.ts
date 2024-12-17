import { Component, Input } from '@angular/core';

@Component({
	selector: 'lib-fomento-input-group',
	templateUrl: './fomento.input-group.component.html',
	styleUrls: ['./fomento.input-group.component.scss'],
})
export class FomentoInputGroupComponent {
	@Input() typeStyle = 'material';

	@Input() width_input = '100%';
	@Input() input_msgError = '';
	@Input() placeholder = 'Placeholder';
	@Input() type = 'text';
	@Input() value = '';
	@Input() id = 'sample';
	@Input() name = 'name';
	@Input() button_label = '';
	@Input() button_icon = 'search';
	@Input() button_icon_theme = 'info';
	@Input() button_href = '#';
	@Input() button_target = '_self';
	@Input() disabled = false;
}
