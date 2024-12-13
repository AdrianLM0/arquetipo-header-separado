import {
	CUSTOM_ELEMENTS_SCHEMA,
	NO_ERRORS_SCHEMA,
	NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FomentoAlertsComponent } from './fomento.alerts.component';
import { NotifierModule, NotifierOptions } from 'angular-notifier';

const customNotifierOptions: NotifierOptions = {
	position: {
		horizontal: {
			position: 'middle',
			distance: 12,
		},
		vertical: {
			position: 'top',
			distance: 0,
			gap: 10,
		},
	},
	theme: 'material',
	behaviour: {
		autoHide: false,
		stacking: 1,
	},
	animations: {
		enabled: true,
		show: {
			preset: 'fade',
			speed: 300,
			easing: 'ease',
		},
		hide: {
			preset: 'fade',
			speed: 300,
			easing: 'ease',
			offset: 50,
		},
		shift: {
			speed: 300,
			easing: 'ease',
		},
		overlap: 150,
	},
};

@NgModule({
	declarations: [FomentoAlertsComponent],
	imports: [CommonModule, NotifierModule.withConfig(customNotifierOptions)],
	exports: [FomentoAlertsComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
	bootstrap: [FomentoAlertsComponent],
})
export class FomentoAlertsModule {}
