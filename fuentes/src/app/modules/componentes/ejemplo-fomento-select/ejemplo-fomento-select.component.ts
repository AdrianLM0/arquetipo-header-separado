import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ejemplo-fomento-select',
	templateUrl: './ejemplo-fomento-select.component.html',
	styleUrls: ['./ejemplo-fomento-select.component.scss'],
})
export class EjemploFomentoSelectComponent implements OnInit {
	data = [
		{ value: 'opcion1', description: 'Opción 1' },
		{ value: 'opcion2', description: 'Opción 2' }
	];
	label = 'Selector';
	disabled = false;

	hostApi = 'http://localhost:8080';

	tipoChurrera = 'c1';
	
	// URL de la API desde la que se obtienen los datos
	public apiUrl = this.hostApi + '/api/' + this.tipoChurrera + '/v1/formularios/list';

	ngOnInit() {
	}
}
