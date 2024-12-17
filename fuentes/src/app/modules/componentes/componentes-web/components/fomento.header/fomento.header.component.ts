import {
	Component,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	SecurityContext,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'lib-fomento-header',
	templateUrl: './fomento.header.component.html',
	styleUrls: ['./fomento.header.component.scss'],
})
export class FomentoCabeceraComponent implements OnInit, OnDestroy, OnChanges {
	constructor(private sanitizer: DomSanitizer) {} // Inyecta DomSanitizer aquí

	time = new Date();
	interval;
	@Input() version = '';
	@Input() mostrarfecha = true;
	@Input() mostrarhora = true;
	@Input() urlAyuda = '';
	@Input() mostrarAyuda = true;

	version_pattern = '';
	pattern = '';

	ngOnInit() {
		this.interval = setInterval(() => {
			this.time = new Date();
		}, 1000);

		this.gestionResponsividad();

		window.addEventListener('resize', () => {
			this.gestionResponsividad();
		});
	}

	ngOnDestroy() {
		clearInterval(this.interval);
	}

	ngOnChanges() {
		this.inputValidation();
	}

	gestionResponsividad() {
		if (this.mostrarfecha) {
			let res = "dd 'de' MMMM y";

			if (window.innerWidth < 480) {
				res = 'dd/mm/y';
			}

			this.pattern = res;
		}

		if (this.version) {
			let res = 'Versión ';

			if (window.innerWidth < 480) {
				res = 'v';
			}

			this.version_pattern = res;
		}
	}

	inputValidation() {
		if (this.version) {
			const versionRegExp = new RegExp(/^\d*\.\d*\.\d*$/);
			try {
				if (!versionRegExp.test(this.version)) {
					throw new Error(
						'La versión ' +
							this.version +
							' debe seguir la estructura X.Y.Z, utilizando valores numéricos',
					);
				}
			} catch (err) {
				this.version = '';
				console.log(err);
			}
		}

		try {
			this.urlAyuda.length === 0 || this.sanitizeContent(this.urlAyuda);
		} catch (err) {
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
		this.urlAyuda = sanitizedContent;
		return sanitizedContent;
	}
}
