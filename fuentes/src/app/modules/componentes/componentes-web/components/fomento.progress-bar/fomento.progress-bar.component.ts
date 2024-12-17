import {
	AfterViewInit,
	Component,
	Input,
	OnChanges,
	OnInit,
	SecurityContext,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'lib-fomento-progress-bar',
	templateUrl: './fomento.progress-bar.component.html',
	styleUrls: ['./fomento.progress-bar.component.scss'],
})
export class FomentoProgressBarComponent
	implements OnInit, OnChanges, AfterViewInit
{
	constructor(private sanitizer: DomSanitizer) {} // Inyecta DomSanitizer aquí

	@Input() progress = 50;
	@Input() title = 'Título';
	@Input() typeStyle: 'matter' | 'material' = 'material';

	ngOnInit() {
		this.inputValidation();
	}

	ngAfterViewInit() {
		this.borderConf();
	}

	ngOnChanges() {
		this.borderConf();
	}

	inputValidation() {
		try {
			this.title.length === 0 || this.sanitizeContent(this.title);
		} catch (err) {
			this.title = 'Error';
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

	borderConf() {
		if (this.progress === 100) {
			const barraProgreso = document.getElementsByClassName(
				'mdc-linear-progress__bar-inner',
			)[0];
			barraProgreso.classList.add('allBorder');
		}
	}
}
