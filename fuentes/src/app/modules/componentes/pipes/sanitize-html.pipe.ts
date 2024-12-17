import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
	name: 'sanitizeHtml',
})
export class SanitizeHtmlPipe implements PipeTransform {
	constructor(private sanitizer: DomSanitizer) {
		//do nothing
	}

	transform(context: SecurityContext, value: string): SafeHtml {
		return this.sanitizer.sanitize(context, value);
	}
}
