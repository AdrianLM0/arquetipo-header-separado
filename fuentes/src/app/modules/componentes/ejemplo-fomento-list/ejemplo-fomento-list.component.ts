import { Component } from '@angular/core';

@Component({
	selector: 'app-ejemplo-fomento-list',
	templateUrl: './ejemplo-fomento-list.component.html',
	styleUrls: ['./ejemplo-fomento-list.component.scss'],
})
export class EjemploFomentoListComponent {
	items1 = [
		{ label: 'Elemento 1', icon: 'home', href: 'https://www.ejemplo1.com' },
		{ label: 'Elemento 2', icon: 'user', href: 'https://www.ejemplo2.com' },
		{ label: 'Elemento 3', icon: 'school', href: 'https://www.ejemplo3.com' },
	];

	items2 = [
		{ label: 'Elemento 1', icon: 'home' },
		{ label: 'Elemento 2', icon: 'user' },
		{ label: 'Elemento 3', icon: 'school' },
	];

	items3 = [
		{ label: 'Elemento 1' },
		{ label: 'Elemento 2' },
		{ label: 'Elemento 3' },
	];

	items4 = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4'];

	miMetodoDeManejo(item) {
		console.log('Ítem clickeado:', item);
		// Realiza las acciones necesarias aquí
	}
}
