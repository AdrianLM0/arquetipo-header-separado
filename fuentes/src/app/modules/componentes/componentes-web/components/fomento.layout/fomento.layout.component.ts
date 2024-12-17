import { Component, Input } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
	selector: 'lib-fomento-layout',
	templateUrl: './fomento.layout.component.html',
	styleUrls: ['./fomento.layout.component.scss'],
})
export class FomentoLayoutComponent {
	//Atributo de estilo
	@Input() brandStyle = 'material';

	// Atributos matter-brand
	@Input() logo = true;
	@Input() src = '';
	@Input() brandName = 'Arquetipo Fomento';
	@Input() brandCaption = 'Consejería de Fomento, Articulación del Territorio';
	@Input() fontSize = '22px';
	@Input() version = '';
	@Input() mostrarfecha = true;
	@Input() mostrarhora = true;
	@Input() mostrar_perfil = true;
	@Input() urlAyuda = '';

	@Input() navTypeStyle = 'material';

	@Input() data_matter = '';
	@Input() data_mat = '';

	@Input() footerStyle = 'material';
	@Input() data_footer = '';
	@Input() ocultarSecciones = false;
	@Input() ocultarSeccionSocial = false;

	@Input() routerOutlet: RouterOutlet;

	constructor(public router: Router) {
		//do nothing
	}
}
