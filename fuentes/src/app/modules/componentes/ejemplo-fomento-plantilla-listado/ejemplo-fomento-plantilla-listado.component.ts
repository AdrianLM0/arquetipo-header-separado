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
		// Hacer la petición al backend para obtener los datos del select
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
	
		// Mostrar las opciones predeterminadas inicialmente para mantener la interfaz
		this.config_Card = this.generarCard([{ value: 'opcion1', description: 'Opción 1' }, { value: 'opcion2', description: 'Opción 2' }]);
	
		// Llamada HTTP al backend
		this.http.get<any>(endpoint).subscribe(
			(data) => {
				console.log('Datos del backend:', data); // <-- Verifica los datos recibidos
	
				// Verifica si es un array y mapea directamente
				if (Array.isArray(data)) {
					const options = data.map((item) => ({
						value: item.id,        // Solo obtenemos el ID
						description: item.nombre  // Solo obtenemos el nombre
					}));
	
					// Actualizar los selects con los datos del backend
					this.config_Card = this.generarCard(options);
	
					// Asignar la configuración al componente
					this.componentePlantillaListado.config_Card = this.config_Card;
	
					// Forzar la detección de cambios
					this.cdRef.detectChanges();
	
					console.log('Opciones cargadas desde el backend:', options); // <-- Verifica las opciones mapeadas
				} else {
					console.error('Error: formato de datos incorrecto o vacío.');
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
