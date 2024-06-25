import { Component, Input } from '@angular/core';
import { RippleAnimationConfig } from '@angular/material/core';

@Component({
	selector: 'app-ejemplo-fomento-ripple',
	templateUrl: './ejemplo-fomento-ripple.component.html',
	styleUrls: ['./ejemplo-fomento-ripple.component.scss'],
})
export class EjemploFomentoRippleComponent {
	@Input() matRippleAnimation: RippleAnimationConfig;
	@Input() matRippleCentered = false;
	@Input() matRippleColor: string;
	@Input() matRippleDisabled: boolean;
	@Input() matRippleRadius = 50;
	@Input() matRippleTrigger: HTMLElement;
	@Input() matRippleUnbounded = true;
}
