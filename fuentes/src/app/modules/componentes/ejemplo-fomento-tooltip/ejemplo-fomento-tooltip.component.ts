import { Component } from '@angular/core';

@Component({
	selector: 'app-ejemplo-fomento-tooltip',
	templateUrl: './ejemplo-fomento-tooltip.component.html',
	styleUrls: ['./ejemplo-fomento-tooltip.component.scss'],
})
export class EjemploFomentoTooltipComponent {
	// Declaración de propiedades para el tooltip
	description: string = "Este es un tooltip de ejemplo";
	position: 'above' | 'below' | 'left' | 'right' = 'below';
	delay_hide: number = 500;
	delay_show: number = 200;
}
