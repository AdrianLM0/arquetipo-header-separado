import { Component, Input, HostListener, ElementRef } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
	selector: 'lib-fomento-tooltip',
	templateUrl: './fomento.tooltip.component.html',
	styleUrls: ['./fomento.tooltip.component.scss'],
})
export class FomentoTooltipComponent {
	@Input() description = "Esto es un 'tooltip'";
	@Input() position: TooltipPosition = 'below';
	@Input() delay_hide = 0;
	@Input() delay_show = 0;
	@Input() tooltipEnabled = true;

	// Accesibilidad
	@Input() ariaLabel = `Tooltip: ${this.description}`; // Etiqueta descriptiva
	@Input() ariaLive: 'off' | 'polite' | 'assertive' = 'polite'; // Controla el comportamiento en lectores de pantalla
	@Input() role = 'tooltip'; // Rol del elemento, por defecto 'tooltip'
	@Input() tabindex = '0'

	constructor(private el: ElementRef) { }

	ngOnInit() {
		// Asociar el tooltip con el contenido activador para accesibilidad
		const tooltipElement = this.el.nativeElement.querySelector('[matTooltip]');
		if (tooltipElement) {
			tooltipElement.setAttribute('aria-describedby', this.description);
		}
	}

	// Agregar un listener de teclado para accesibilidad
	@HostListener('keydown', ['$event'])
	handleKeyboardEvent(event: KeyboardEvent) {
		// Muestra el tooltip solo con tecla Enter o Espacio
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			// Lógica para mostrar el tooltip
		}
	}

	// Método para alternar la visibilidad del tooltip
	toggleTooltip() {
		this.tooltipEnabled = !this.tooltipEnabled;
	}


}
