import {
	ChangeDetectorRef,
	Component,
	EventEmitter,
	Input,
	Output,
	ViewChild,
} from '@angular/core';
import { FomentoBreadcrumbComponent } from '../fomento.breadcrumb/fomento.breadcrumb.component';
import { FomentoNavComponent } from '../fomento.nav/fomento.nav.component';
import { RequestApiService } from '@fomento/i-rf-logic-component-node-lib';

@Component({
	selector: 'lib-fomento-plantilla-listado',
	templateUrl: './fomento.plantilla.listado.component.html',
	styleUrls: ['./fomento.plantilla.listado.component.scss'],
})
export class FomentoPlantillaListadoComponent {
	//Atributo plantilla
	@ViewChild(FomentoNavComponent, { static: true }) navbar: FomentoNavComponent;
	@ViewChild(FomentoBreadcrumbComponent, { static: true })
	breadCrumb: FomentoBreadcrumbComponent;

	@Output() clickButtonEye: EventEmitter<unknown> = new EventEmitter();
	@Output() clickButtonCsv: EventEmitter<unknown> = new EventEmitter();

	@Input() titlePrincipal = 'Titulo principal';

	//Atributo de estilo del card
	@Input() typeStyle = 'material';
	@Input() endpoint: string;

	// Atributos card
	@Input() config_Card;
	@Input() title = 'Título';
	@Input() data = ['Opcion1', 'Opcion2'];
	@Input() card = []; //Almacena las card del json
	@Input() isGridContainer = true;
	@Input() isGrid = true;
	@Input() isRowContainer = false;
	@Input() isRow = false;
	@Input() iconGrid = 'grid';
	@Input() iconRow = 'list';
	@Input() iconTitle = '';

	constructor(
		private requestApi: RequestApiService,
		private cdRef: ChangeDetectorRef
	){}

	ngOnInit(){
		this.fetchSelectOptions();
	}

	// Atributos del matter button
	//@Input() label: string = "";

	fetchSelectOptions() {
		this.requestApi.get<any>(this.endpoint).subscribe(
			(data) => {
				if (Array.isArray(data)) {
					const options = data.map((item) => ({
						value: item.id,
						description: item.nombre,
					}));

					// Divide las opciones en categorías
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
					this.cdRef.detectChanges();
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

	gestionBreadcrumb(fullPath: string) {
		this.breadCrumb.gestionBreadcrumbs(fullPath);
	}

	toggleGridContainer() {
		this.isGridContainer = true;
		this.isGrid = true;
		this.isRowContainer = false;
		this.isRow = false;
	}

	toggleRowContainer() {
		this.isGridContainer = false;
		this.isGrid = false;
		this.isRowContainer = true;
		this.isRow = true;
	}

	buttonEye(event) {
		this.clickButtonEye.emit(event);
	}

	buttonCsv(event) {
		this.clickButtonCsv.emit(event);
	}
}
