import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonToggleAppearance, MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
	selector: 'lib-fomento-button-toggle',
	templateUrl: './fomento.button-toggle.component.html',
	styleUrls: ['./fomento.button-toggle.component.scss'],
})
export class FomentoButtonToggleComponent {
	@Output() onclickevent = new EventEmitter<MatButtonToggleChange>();

	@Input() appearance: MatButtonToggleAppearance = 'standard';
	@Input() label: string;
	@Input() disabled: boolean;
	@Input() ariaLabel: string;
	@Input() ariaLabelledby: string | null;
	@Input() checked: boolean;
	@Input() disableRipple: boolean;
	@Input() id: string;
	@Input() value;
	@Input() name: string;
	@Input() multiple: boolean;
	@Input() vertical: boolean;

	@Input() toggleGroup: Array<{
		disabled: boolean,
		ariaLabel: string,
		ariaLabelledby: string | null,
		checked: boolean,
		disabledRipple: boolean,
		id: string,
		value: string,
		name: string,
		label: string,
	}> = [];

	clickbutton(event) {
		this.onclickevent.emit(event);
	}
}
