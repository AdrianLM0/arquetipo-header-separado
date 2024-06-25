import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FomentoPlantillaAccesoDenegadoComponent } from '@fomento/i-rf-web-component-node-lib';

@Component({
	selector: 'app-ejemplo-fomento-plantilla-acceso-denegado',
	templateUrl: './ejemplo-fomento-plantilla-acceso-denegado.component.html',
	styleUrls: ['./ejemplo-fomento-plantilla-acceso-denegado.component.scss'],
})
export class EjemploFomentoPlantillaAccesoDenegadoComponent {
	@ViewChild(FomentoPlantillaAccesoDenegadoComponent, { static: false })
	componentePlantilla!: FomentoPlantillaAccesoDenegadoComponent;

	title = 'Lo sentimos, no tienes privilegios suficientes.';
	parrafo =
		'No tiene privilegios para acceder a esta funcionalidad. Póngase en contacto con el administrador si lo cree necesario.';

	constructor(private router: Router) {}

	ngAfterViewInit() {
		this.componentePlantilla?.gestionBreadcrumb(this.router.url);
	}
}
