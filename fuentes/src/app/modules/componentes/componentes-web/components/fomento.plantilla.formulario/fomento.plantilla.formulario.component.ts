import {
	Component,
	EventEmitter,
	Input,
	Output,
	ViewChild,
} from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import {
	Notification,
	FomentoAlertsComponent,
} from '../fomento.alerts/fomento.alerts.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FomentoBreadcrumbComponent } from '../fomento.breadcrumb/fomento.breadcrumb.component';

@Component({
	selector: 'lib-fomento-plantilla-formulario',
	templateUrl: './fomento.plantilla.formulario.component.html',
	styleUrls: ['./fomento.plantilla.formulario.component.scss'],
})
export class FomentoPlantillaFormularioComponent {
	@ViewChild(FomentoBreadcrumbComponent, { static: true })
	breadCrumb: FomentoBreadcrumbComponent;
	@ViewChild(FomentoAlertsComponent, { static: true })
	notification: FomentoAlertsComponent;

	//Atributos del formulario
	@Input() form_config;
	@Input() reset_button = 'TRAMITAR';
	@Input() submit_button = 'GUARDAR';
	@Input() showSubmit = true;
	@Input() showReset = true;
	@Input() validate_form = false;
	@Output() submitAction = new EventEmitter<unknown>(); //Emite un evento cuando se quiere hacer submit en el formulario.
	@Output() changeSelectorAction = new EventEmitter<unknown>(); //Emite un evento cuando se cambia la opción de algún selector del formulario.
	form: FormGroup = this.fb.group({}); //Almacena el formulario.
	rows = []; //Almacena las filas del formulario.

	//Atributos del breadcrum
	navigationStart?: Observable<NavigationEnd>;
	currentRoute = '';
	@Input() breadcrumbList: { path: string; label: string }[] = [];

	//Atributos del titulo principal
	@Input() title = '';

	constructor(private fb: FormBuilder) {
		//do nothing
	}

	showNotification(notificationsArray: Notification[], tipo: string) {
		this.notification.showPagedNotification(notificationsArray, tipo);
	}

	gestionBreadcrumb(fullPath: string) {
		this.breadCrumb.gestionBreadcrumbs(fullPath);
	}
}
