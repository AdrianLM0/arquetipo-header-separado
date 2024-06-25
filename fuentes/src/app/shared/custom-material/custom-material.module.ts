import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
/*Importaciones unificadadas de todos los componentes de Material utilizados*/

export const MY_FORMATS = {
	parse: {
		dateInput: 'DD MMM YYYY',
	},
	display: {
		dateInput: 'DD MMM YYYY',
		monthYearLabel: 'MMM YYYY',
		dateA11yLabel: 'LL',
		monthYearA11yLabel: 'MMMM YYYY',
	},
};

@NgModule({
	imports: [CommonModule],
	exports: [CommonModule],
	providers: [{ provide: LOCALE_ID, useValue: 'es-ES' }],
	declarations: [],
})
export class CustomMaterialModule {
	static forRoot() {
		return {
			ngModule: CustomMaterialModule,
			providers: [],
		};
	}
}
