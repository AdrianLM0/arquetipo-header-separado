import { Component } from '@angular/core';

@Component({
	selector: 'app-ejemplo-fomento-grid-list',
	templateUrl: './ejemplo-fomento-grid-list.component.html',
	styleUrls: ['./ejemplo-fomento-grid-list.component.scss'],
})
export class EjemploFomentoGridListComponent {
	miData = [
		{ title: 'Item 1', content: 'Contenido 1', image: 'url-imagen-1.jpg' },
		{ title: 'Item 2', content: 'Contenido 2', image: 'url-imagen-2.jpg' },
		{ title: 'Item 3', content: 'Contenido 3', image: 'url-imagen-3.jpg' },
		{ title: 'Item 4', content: 'Contenido 4', image: 'url-imagen-4.jpg' },
		{ title: 'Item 5', content: 'Contenido 5', image: 'url-imagen-5.jpg' },
		{ title: 'Item 6', content: 'Contenido 6', image: 'url-imagen-6.jpg' },
		// Más objetos...
	];

	miData2 = [
		'Elemento 1',
		'Elemento 2',
		'Elemento 3',
		'Elemento 4',
		'Elemento 5',
		'Elemento 6',
	];
}
