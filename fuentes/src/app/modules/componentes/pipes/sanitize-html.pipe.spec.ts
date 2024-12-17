import { TestBed } from '@angular/core/testing';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

describe('SanitizeHtmlPipe', () => {
	let sanitizer;
	let pipe: SanitizeHtmlPipe;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [BrowserModule],
		});

		sanitizer = TestBed.inject(DomSanitizer);
		pipe = new SanitizeHtmlPipe(sanitizer);
	});

	it('should create an instance', () => {
		expect(pipe).toBeTruthy();
	});
});
