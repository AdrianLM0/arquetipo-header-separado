import {
	Component,
	Input,
	OnInit,
	SecurityContext,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'lib-fomento-card',
	templateUrl: './fomento.card.component.html',
	styleUrls: ['./fomento.card.component.scss'],
})
export class FomentoCardComponent implements OnInit {
	constructor(private sanitizer: DomSanitizer) {} // Inyecta DomSanitizer aquí


	@Input() title = '';
	@Input() size = 'M';
	@Input() text = '';

	@Input() label = '';
	@Input() icon = 'book';
	@Input() iconTitle = '';

	@Input() enableHover = true;

	
	ngOnInit() {
		this.inputValidation();
	}

	inputValidation() {
		try {
			// Sanitiza el contenido de 'text' y 'title'
			this.text.length === 0 || this.sanitizeContent(this.text);
			this.title.length === 0 || this.sanitizeContent(this.title);
		} catch (err) {
			// Si se lanza una excepción, asigna valores vacíos y registra el error en la consola
			this.title = '';
			this.text = '';
			console.log(err.message);
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
