import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'lib-fomento-brand',
	templateUrl: './fomento.brand.component.html',
	styleUrls: ['./fomento.brand.component.scss'],
})
export class FomentoBrandComponent implements OnInit {
	//Atributo de estilo
	@Input() brandStyle = 'matter';

	// Atributos matter-brand
	@Input() logo = true;
	@Input() name: unknown;
	@Input() caption: unknown;
	@Input() fontSize = '';
	@Input() href_logo = '';
	@Input() href_caption = '';
	@Input() src= '';
	@Input() alt_text= '';

	caption_parse: string[];
	name_parse: string[];

	ngOnInit() {
		this.caption_parse = String(this.caption).split(/,(.*)/s);
		this.name_parse = String(this.name).split(/,(.*)/s);

		this.actualizarCSS();
	}

	actualizarCSS() {
		if (this.name_parse.length > 1) {
			document.querySelectorAll('.title').forEach((x) => {
				x.classList.add('split');
			});
		}
	}
}
