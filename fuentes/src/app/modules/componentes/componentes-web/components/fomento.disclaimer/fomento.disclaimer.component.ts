import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
	SecurityContext,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'lib-fomento-disclaimer',
	templateUrl: './fomento.disclaimer.component.html',
	styleUrls: ['./fomento.disclaimer.component.scss'],
})
export class FomentoDisclaimerComponent implements OnInit {
	constructor(private sanitizer: DomSanitizer) {
		//do nothing
	}

	@Input() titulo = 'Cabecera disclaimer';
	@Input() parrafo = 'Párrafo disclaimer';
	@Input() usuario = 'XXXXXXXX';
	@Input() ultimoAcceso = 'DD/MM/YYY hh:mm';
	@Input() ultimoCierreSesion = 'DD/MM/YYYY hh:mm';
	@Input() parrafoSeguro: string;

	//Atributos boton
	@Input() labelAceptar: string;
	@Input() labelCerrar: string;

	@Output() aceptarClick: EventEmitter<unknown> = new EventEmitter();
	@Output() closeSesion: EventEmitter<unknown> = new EventEmitter();

	ngOnInit(): void {
		// Sanitizar el HTML antes de asignarlo a parrafoSeguro
		this.parrafoSeguro =
			this.sanitizer.sanitize(SecurityContext.HTML, this.parrafo) || '';
	}

	buttonAceptar() {
		this.aceptarClick.emit();
	}

	buttonCloseSesion() {
		this.closeSesion.emit();
	}
}
