import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'lib-fomento-radio',
	templateUrl: './fomento.radio.component.html',
	styleUrls: ['./fomento.radio.component.scss'],
})
export class FomentoRadioComponent implements OnInit {
	constructor(private sanitizer: DomSanitizer) {} // Inyecta DomSanitizer aquí

	@Input() typeStyle: 'matter' | 'material' = 'material';
	@Input() disabled = false;
	@Input() labelPosition: 'before' | 'after' = 'after';
	@Input() name = '';
	@Input() required = true;
	@Input() value = '';
	@Input() checked = false;

	@Input() label = 'Input Radio';

	ngOnInit() {
		this.inputValidation();
	}

	inputValidation() {
		try {
			this.label.length === 0 || this.sanitizeContent(this.label);
		} catch (err) {
			this.label = 'Error';
			console.log(err);
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
