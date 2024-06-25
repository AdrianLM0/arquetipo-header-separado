import { Component, EventEmitter } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
	selector: 'app-fomento-slide-toggle',
	templateUrl: './ejemplo-fomento-slide-toggle.component.html',
	styleUrls: ['./ejemplo-fomento-slide-toggle.component.scss'],
})
export class EjemploFomentoSlideToggleComponent {
	ariaDescribedby: string;
	ariaLabel: string | null;
	ariaLabelledby: string | null;
	checked: boolean;
	color: ThemePalette = 'primary';
	disableRipple: boolean;
	disabled = false;
	hideIcon: boolean;
	id: string;
	labelPosition: 'before' | 'after';
	name: string | null;
	required: boolean;
	label = 'Slide me!';

	change = new EventEmitter<MatSlideToggleChange>();

	clickChange(event) {
		this.change.emit(event);
		console.log(event);
	}
}
