import { Component } from '@angular/core';

@Component({
	selector: 'app-ejemplo-fomento-stepper',
	templateUrl: './ejemplo-fomento-stepper.component.html',
	styleUrls: ['./ejemplo-fomento-stepper.component.scss'],
})
export class EjemploFomentoStepperComponent {
	orientation: 'horizontal' | 'vertical' = 'horizontal';
}
