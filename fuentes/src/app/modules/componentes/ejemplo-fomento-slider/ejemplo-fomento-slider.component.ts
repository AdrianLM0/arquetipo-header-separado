import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
	selector: 'app-ejemplo-fomento-slider',
	templateUrl: './ejemplo-fomento-slider.component.html',
	styleUrls: ['./ejemplo-fomento-slider.component.scss'],
})
export class EjemploFomentoSliderComponent {
	color: ThemePalette = 'primary';
	disableRipple: boolean;
	disabled: boolean;
	discrete = true;
	max = 100;
	min = 0;
	showTickMarks: boolean;
	step: number;

	displayWith: (value: number) => string;
}
