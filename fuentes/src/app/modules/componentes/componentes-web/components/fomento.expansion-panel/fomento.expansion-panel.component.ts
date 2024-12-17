import { Component, Input } from '@angular/core';
import {
	MatAccordionDisplayMode,
	MatAccordionTogglePosition,
} from '@angular/material/expansion';

@Component({
	selector: 'lib-fomento-expansion-panel',
	templateUrl: './fomento.expansion-panel.component.html',
	styleUrls: ['./fomento.expansion-panel.component.scss'],
})
export class FomentoExpansionPanelComponent {
	//Propiedades mat-accordion
	@Input() displayMode: MatAccordionDisplayMode = 'default';
	@Input() hideToggle = false;
	@Input() multi = false;
	@Input() togglePosition: MatAccordionTogglePosition = 'after';
	@Input() id: string;

	//Propiedades mat-expansion-panel
	@Input() disabled = true;
	@Input() expanded = true;

	//Propiedades mat-expansion-panel-header
	@Input() collapsedHeight: string;
	@Input() expandedHeight: string;
	
	// Textos personalizables
	@Input() panelTitle: string = 'Título de expansion panel';
	@Input() panelDescription: string = 'Resumen del contenido';
	@Input() panelContent: string = 'Contenido de expansion panel';
}
