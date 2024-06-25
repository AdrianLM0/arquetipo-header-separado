import { Component } from '@angular/core';

@Component({
	selector: 'app-ejemplo-fomento-brand',
	templateUrl: './ejemplo-fomento-brand.component.html',
	styleUrls: ['./ejemplo-fomento-brand.component.scss'],
})
export class EjemploFomentoBrandComponent {
	logo = true;
	src = '';
	name = 'Fomento';
	caption = 'Consejería de Fomento, Articulación del Territorio';
	fontSize = '22px';
	brandStyle = 'material';
}
