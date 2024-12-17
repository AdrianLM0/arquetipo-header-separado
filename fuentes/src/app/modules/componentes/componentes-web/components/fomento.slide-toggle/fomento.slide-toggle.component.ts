import {
	Component,
	EventEmitter,
	Input,
	Output,
	booleanAttribute,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
	selector: 'lib-fomento-slide-toggle',
	templateUrl: './fomento.slide-toggle.component.html',
	styleUrls: ['./fomento.slide-toggle.component.scss'],
})
export class FomentoSlideToggleComponent {
	@Input() ariaDescribedby: string;
	@Input() ariaLabel: string | null;
	@Input() ariaLabelledby: string | null;
	@Input() checked: boolean;
	@Input() color: ThemePalette;
	@Input({ transform: booleanAttribute }) disableRipple: boolean;
	@Input({ transform: booleanAttribute }) disabled: boolean;
	@Input({ transform: booleanAttribute }) hideIcon: boolean;
	@Input() id: string;
	@Input() labelPosition: 'before' | 'after';
	@Input() name: string | null;
	@Input() required: boolean;
	@Input() label: string;

	@Output() changeEvent = new EventEmitter<MatSlideToggleChange>();

	clickChange(event) {
		this.changeEvent.emit(event);
	}
}
