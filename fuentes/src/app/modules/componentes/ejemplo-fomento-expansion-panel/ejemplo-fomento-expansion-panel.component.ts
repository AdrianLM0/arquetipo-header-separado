import { Component } from '@angular/core';
import {
	MatAccordionDisplayMode,
	MatAccordionTogglePosition,
} from '@angular/material/expansion';

@Component({
	selector: 'app-ejemplo-fomento-expansion-panel',
	templateUrl: './ejemplo-fomento-expansion-panel.component.html',
	styleUrls: ['./ejemplo-fomento-expansion-panel.component.scss'],
})
export class EjemploFomentoExpansionPanelComponent {
	//Propiedades mat-accordion
	displayMode: MatAccordionDisplayMode = 'default';
	hideToggle = false;
	multi = false;
	togglePosition: MatAccordionTogglePosition = 'after';
	id: string;
	disabled = false;
	expanded = false;
	collapsedHeight: string;
	expandedHeight: string;
}
