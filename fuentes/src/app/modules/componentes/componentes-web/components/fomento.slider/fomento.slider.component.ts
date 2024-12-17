import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
	selector: 'lib-fomento-slider',
	templateUrl: './fomento.slider.component.html',
	styleUrls: ['./fomento.slider.component.scss'],
})
export class FomentoSliderComponent {
	@Input() color: ThemePalette;
	@Input() disableRipple: boolean;
	@Input() disabled: boolean;
	@Input() discrete: boolean;
	@Input() max: number;
	@Input() min: number;
	@Input() showTickMarks: boolean;
	@Input() step: number;

	@Input() displayWith: (value: number) => string;
}
