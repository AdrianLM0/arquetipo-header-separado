import { Component } from '@angular/core';

@Component({
	selector: 'app-fomento-tree',
	templateUrl: './ejemplo-fomento-tree.component.html',
	styleUrls: ['./ejemplo-fomento-tree.component.scss'],
})
export class EjemploFomentoTreeComponent {
	data = [
		{
			name: 'Estudiar',
			children: [
				{ name: 'Becas y ayudas al estudio' },
				{ name: 'Primaria y ESO' },
				{ name: 'Bachillerato' },
			],
		},
		{
			name: 'Trabajar',
			children: [
				{
					name: 'Buscar trabajo',
					children: [
						{ name: 'Búsqueda activa de empleo' },
						{ name: 'Ayudas a la búsqueda de empleo' },
					],
				},
				{
					name: 'Perder el trabajo',
					children: [
						{ name: 'Demanda de empleo' },
						{ name: 'Prestaciones y subsidios por desempleo' },
					],
				},
			],
		},
	];
}
