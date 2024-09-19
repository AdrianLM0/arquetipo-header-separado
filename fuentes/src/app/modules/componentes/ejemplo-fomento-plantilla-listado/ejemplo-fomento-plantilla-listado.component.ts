import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
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

	constructor(private router: Router, private http: HttpClient) {}

	ngOnInit() {
		// Hacer la petición al backend para obtener los datos del select sin romper la interfaz
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

	// Método para obtener las opciones del select desde el backend
	fetchSelectOptions() {
		const endpoint = 'http://localhost:8080/api/c1/v1/formularios/list';  // Cambiar al endpoint correcto

		// Inicialmente llenamos los selects con datos vacíos para no romper la interfaz
		const defaultOptions = [{ value: 'opcion1', description: 'Opción 1' }, { value: 'opcion2', description: 'Opción 2' }];
		this.config_Card = this.generarCard(defaultOptions);

		this.http.get<any>(endpoint).subscribe(
			(data) => {
				if (data && data.content) {
					const options = data.content.map((item) => ({
						value: item.id,  // id para manejar los datos
						description: item.nombre,  // nombre para mostrar en el select
					}));

					// Volvemos a generar las tarjetas con las opciones reales del backend
					this.config_Card = this.generarCard(options);
				}
			},
			(error) => {
				console.error('Error al obtener los datos del select:', error);
			}
		);
	}

	generarCard(options: { value: string, description: string }[]) {
		const res = [];
		this.valores_demo.forEach((i) => {
			res.push({
				label: '',
				typeStyle: 'material',
				iconTitle: `fas fa-${i.iconTitle}`,
				title: i.title,
				data: options,  // Asignamos las opciones obtenidas del backend
				iconEye: 'fas fa-eye',
				iconFileCsv: 'fas fa-file-csv',
				labelButtonCsv: 'LISTADOS EXPORTADOS',
			});
		});
		return res;
	}
}
