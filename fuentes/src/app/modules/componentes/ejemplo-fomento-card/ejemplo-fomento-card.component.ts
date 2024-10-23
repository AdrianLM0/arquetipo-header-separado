import { Component } from '@angular/core';

@Component({
	selector: 'app-ejemplo-fomento-card',
	templateUrl: './ejemplo-fomento-card.component.html',
	styleUrls: ['./ejemplo-fomento-card.component.scss'],
})
export class EjemploFomentoCardComponent {

	// Atributos card
	title = 'Título';
	size = 'm';
	text = 'Texto de la tarjeta';

	// Atributos del matter button
	label = 'Etiqueta';
	icon = 'book';
	enableHover = true;
}
