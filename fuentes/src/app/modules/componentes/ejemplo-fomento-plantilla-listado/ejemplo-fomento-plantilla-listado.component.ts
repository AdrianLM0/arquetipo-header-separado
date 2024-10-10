import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FomentoPlantillaListadoComponent } from '@fomento/i-rf-web-component-node-lib';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-ejemplo-fomento-plantilla-listado',
	templateUrl: './ejemplo-fomento-plantilla-listado.component.html',
	styleUrls: ['./ejemplo-fomento-plantilla-listado.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EjemploFomentoPlantillaListadoComponent implements AfterViewInit, OnInit {
	@ViewChild(FomentoPlantillaListadoComponent)
	componentePlantillaListado!: FomentoPlantillaListadoComponent;

	title = 'Listados';
	valores_demo = [
		{ iconTitle: 'building', title: 'Promociones' },
		{ iconTitle: 'user-friends', title: 'Interesados' },
		{ iconTitle: 'sitemap', title: 'Organización' },
		{ iconTitle: 'home', title: 'Viviendas' },
	];

	config_Card = [];

	constructor(private router: Router,) {}

    hostApi = 'http://localhost:8080';

	tipoChurrera = 'c1';
	
	// URL de la API desde la que se obtienen los datos
	public apiUrl = this.hostApi + '/api/' + this.tipoChurrera + '/v1/formularios/list';

	ngOnInit() {
	}

	ngAfterViewInit() {
		this.componentePlantillaListado?.gestionBreadcrumb(this.router.url);
	}

	buttonEye(event) {
		console.log(event);
	}

	buttonCsv(event) {
		console.log(event);
	}

generarCard(
    optionsPromociones: { value: string, description: string }[],
    optionsInteresados: { value: string, description: string }[],
    optionsOrganizacion: { value: string, description: string }[],
    optionsViviendas: { value: string, description: string }[]
) {
    return [
        {
            label: '',
            typeStyle: 'material',
            iconTitle: 'fas fa-building',
            title: 'Promociones',
            data: optionsPromociones, 
            iconEye: 'fas fa-eye',
            iconFileCsv: 'fas fa-file-csv',
            labelButtonCsv: 'LISTADOS EXPORTADOS',
        },
        {
            label: '',
            typeStyle: 'material',
            iconTitle: 'fas fa-user-friends',
            title: 'Interesados',
            data: optionsInteresados, 
            iconEye: 'fas fa-eye',
            iconFileCsv: 'fas fa-file-csv',
            labelButtonCsv: 'LISTADOS EXPORTADOS',
        },
        {
            label: '',
            typeStyle: 'material',
            iconTitle: 'fas fa-sitemap',
            title: 'Organización',
            data: optionsOrganizacion,  
            iconEye: 'fas fa-eye',
            iconFileCsv: 'fas fa-file-csv',
            labelButtonCsv: 'LISTADOS EXPORTADOS',
        },
        {
            label: '',
            typeStyle: 'material',
            iconTitle: 'fas fa-home',
            title: 'Viviendas',
            data: optionsViviendas, 
            iconEye: 'fas fa-eye',
            iconFileCsv: 'fas fa-file-csv',
            labelButtonCsv: 'LISTADOS EXPORTADOS',
        }
    ];
}


}
