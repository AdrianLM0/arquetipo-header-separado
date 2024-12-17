import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import {
	AfterContentInit,
	Component,
	ContentChildren,
	Input,
	OnChanges,
	QueryList,
	TemplateRef,
} from '@angular/core';

@Component({
	selector: 'lib-fomento-stepper',
	templateUrl: './fomento.stepper.component.html',
	styleUrls: ['./fomento.stepper.component.scss'],
	providers: [
		{
			provide: STEPPER_GLOBAL_OPTIONS,
			useValue: { displayDefaultIndicatorType: true },
		},
	],
})
export class FomentoStepperComponent implements AfterContentInit, OnChanges {
	@Input() orientation: 'horizontal' | 'vertical' = 'horizontal';

	@ContentChildren(TemplateRef) stepContents!: QueryList<TemplateRef<unknown>>;

	steps: { content: TemplateRef<unknown> | null }[] = [];

	ngAfterContentInit() {
		this.steps = this.stepContents.map((content) => ({ content }));
	}

	ngOnChanges() {
		this.inputValidation();
	}

	activarPaso(valor: number) {
		const barrasH = document.querySelectorAll(
			'.mat-stepper-' + this.orientation + '-line',
		);
		const res = barrasH[valor] as HTMLElement;
		res.classList.add('active');
	}

	limpiarPaso() {
		const barrasH = document.querySelectorAll(
			'.mat-stepper-' + this.orientation + '-line',
		);
		barrasH.forEach((value) => {
			value.classList.remove('active');
		});
	}

	inputValidation() {
		try {
			if (this.steps.length < 2) {
				throw new Error(`El asistente de pasos debe incluir al menos más de un paso, para añadir un paso usa el componente
      <ng-template> dentro de la definición de <fomento-stepper>`);
			}
		} catch (err) {
			console.log('' + err);
		}
	}
}
