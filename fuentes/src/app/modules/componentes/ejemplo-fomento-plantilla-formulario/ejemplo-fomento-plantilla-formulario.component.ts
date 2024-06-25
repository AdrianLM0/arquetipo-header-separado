import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
	Notification,
	FomentoPlantillaFormularioComponent,
} from '@fomento/i-rf-web-component-node-lib';
import { Location } from '@angular/common';
import { Constants } from '../../../config/constants';

@Component({
	selector: 'app-ejemplo-fomento-plantilla-formulario',
	templateUrl: './ejemplo-fomento-plantilla-formulario.component.html',
	styleUrls: ['./ejemplo-fomento-plantilla-formulario.component.scss'],
})
export class EjemploFomentoPlantillaFormularioComponent
	implements AfterViewInit
{
	@ViewChild(FomentoPlantillaFormularioComponent)
	componentePlantilla!: FomentoPlantillaFormularioComponent;

	title = 'Edición de expediente';

	notificationsArray: Notification[] = [
		{
			title: 'Información de la inconsistencia',
			message:
				'Debe rellenar todos los campos. Consulte los campos marcados en rojo para solucionar los errores.',
		},
	];

	form_config = Constants.EJEMPLO_FORMULARIO;

	reset_button = 'TRAMITAR';
	submit_button = 'GUARDAR';
	showSubmit = true;
	showReset = true;

	constructor(
		private router: Router,
		private location: Location,
	) {}

	ngAfterViewInit() {
		this.invocarShowNotification(this.notificationsArray, 'error');
		this.componentePlantilla.gestionBreadcrumb(this.router.url);
	}

	invocarShowNotification(notificationsArray: Notification[], tipo: string) {
		this.componentePlantilla.showNotification(notificationsArray, tipo);
	}
}
