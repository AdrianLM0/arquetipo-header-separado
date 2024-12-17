import {
	Component,
	EventEmitter,
	Input,
	OnChanges,
	Output,
	SecurityContext,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// import '@matter/matter-button/dist/matter-button';

@Component({
	selector: 'lib-fomento-button',
	templateUrl: './fomento.button.component.html',
	styleUrls: ['./fomento.button.component.scss'],
})
export class FomentoButtonComponent implements OnChanges {
	constructor(private sanitizer: DomSanitizer) {} // Inyecta DomSanitizer aquí

	@Input() type: 'button'|'submit'|'reset' = 'button'

	//Atributos matter-button
	@Input() label = '';
	@Input() theme = 'primary';
	@Input() icon = '';
	@Input() href = '';
	@Input() target = '';
	@Input() disabled = false;
	@Input() aria_label = '';
	@Input() disableRipple = true;
	@Input() badge = '';

// TODO Añadir input para que acepte una función que permita darle funcionalidad al botón

	@Output() onclickevent = new EventEmitter<unknown>();	

	validIcon: boolean;

	clickbutton(event: Event) {
		if (this.href) {
		  if (this.target === '_blank') {
			window.open(this.href, '_blank'); // Abre en nueva pestaña si target es _blank
		  } else {
			window.location.href = this.href; // Redirige a la URL especificada en href
		  }
		}
		this.onclickevent.emit(event);
	  }

	ngOnChanges() {
		this.inputValidation();
	}

	inputValidation() {
		if (this.label === '' && this.icon === '') {
			// Lanza un error solo si ambos, label e icon, están vacíos.
			throw new Error(
				"Los campos 'label' e 'icono' no pueden ser ambos a la vez vacíos",
			);
		}

		// Solo sanitiza y asigna un nuevo valor a label si no está vacío.
		if (this.label !== '') {
			try {
				this.sanitizeContent(this.label);
			} catch (err) {
				this.label = 'Error';
				this.icon = 'times-circle';
				console.error(err.message);
			}
		}
	}

	private sanitizeContent(content: string): string {
		// Usa DomSanitizer para sanitizar el contenido
		const sanitizedContent = this.sanitizer.sanitize(
			SecurityContext.HTML,
			content,
		);
		if (!sanitizedContent) {
			throw new Error("Intento de ataque vía 'HTML injection'");
		}
		return sanitizedContent;
	}
}
