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

	constructor(private router: Router, private http: HttpClient, private cdRef: ChangeDetectorRef) {}

	ngOnInit() {
		this.fetchSelectOptions();
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

fetchSelectOptions() {
    const endpoint = 'http://localhost:8080/api/c1/v1/formularios/list'; 

    this.config_Card = this.generarCard(
        [{ value: 'opcion1', description: 'Opción 1' }],
        [{ value: 'opcion2', description: 'Opción 2' }],
        [{ value: 'opcion3', description: 'Opción 3' }],
        [{ value: 'opcion4', description: 'Opción 4' }]
    );

    this.http.get<any>(endpoint).subscribe(
        (data) => {
            console.log('Datos del backend:', data); 

            if (Array.isArray(data)) {
                const options = data.map((item) => ({
                    value: item.id,        
                    description: item.nombre 
                }));

                
                const optionsPromociones = options.slice(0, 2);  
                const optionsInteresados = options.slice(2, 4);  
                const optionsOrganizacion = options.slice(4, 7); 
                const optionsViviendas = options.slice(7, 10);  

                this.config_Card = this.generarCard(
                    optionsPromociones,
                    optionsInteresados,
                    optionsOrganizacion,
                    optionsViviendas
                );

                this.componentePlantillaListado.config_Card = this.config_Card;

                this.cdRef.detectChanges();

                console.log('Opciones cargadas desde el backend:', options); 
            } else {
                console.error('Error: formato de datos incorrecto o vacío.');
            }
        },
        (error) => {
            console.error('Error al obtener los datos del select:', error);
        }
    );
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
