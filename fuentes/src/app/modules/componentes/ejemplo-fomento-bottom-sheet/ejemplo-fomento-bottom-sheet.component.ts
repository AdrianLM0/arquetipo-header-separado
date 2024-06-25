import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetOverviewExampleComponent } from './bottom-sheet.component';

/*Componente principal (elemento click)*/

@Component({
	selector: 'app-ejemplo-fomento-bottom-sheet',
	templateUrl: './ejemplo-fomento-bottom-sheet.component.html',
	styleUrls: ['./ejemplo-fomento-bottom-sheet.component.scss'],
})
export class EjemploFomentoBottomSheetComponent {
	constructor(private _bottomSheet: MatBottomSheet) {}

	procesaEventoBottomSheet(event) {
		this._bottomSheet.open(BottomSheetOverviewExampleComponent);
		console.log(event);
	}

	//Atributos matter-button
	label = 'bottom sheet';
	theme = 'primary';
	icon = '';
	disabled = false;
	aria_label = '';
	disableRipple = true;
	validIcon: boolean;
}
