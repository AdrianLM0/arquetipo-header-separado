import { Component } from '@angular/core';

@Component({
	selector: 'app-ejemplo-fomento-button',
	templateUrl: './ejemplo-fomento-button.component.html',
	styleUrls: ['./ejemplo-fomento-button.component.scss'],
})
export class EjemploFomentoButtonComponent {
	typeStyle = 'material';
	label = 'Etiqueta';
	theme = 'primary';
	icon = '';
	href = 'https://www.juntadeandalucia.es/';
	target = '_self';
	disabled = false;
	aria_label = 'texto alt';
	disableRipple = true;
	badge='';

	onButtonClick(event: any): void {
		window.open(this.href, this.target);
	  }

	  
}
