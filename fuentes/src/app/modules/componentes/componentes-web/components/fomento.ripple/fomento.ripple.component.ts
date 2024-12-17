import { Component, Input } from '@angular/core';
import { RippleAnimationConfig } from '@angular/material/core';

@Component({
	selector: 'lib-fomento-ripple',
	templateUrl: './fomento.ripple.component.html',
	styleUrls: ['./fomento.ripple.component.scss'],
})
export class FomentoRippleComponent {
	@Input() matRippleAnimation: RippleAnimationConfig;
	@Input() matRippleCentered = false;
	@Input() matRippleColor: string;
	@Input() matRippleDisabled: boolean;
	@Input() matRippleRadius = 50;
	@Input() matRippleTrigger: HTMLElement;
	@Input() matRippleUnbounded = true;
}
