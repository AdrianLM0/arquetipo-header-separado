import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	OnInit,
	ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { FomentoPlantillaListadoComponent } from '@fomento/i-rf-web-component-node-lib';

@Component({
	selector: 'app-ejemplo-fomento-plantilla-listado',
	templateUrl: './ejemplo-fomento-plantilla-listado.component.html',
	styleUrls: ['./ejemplo-fomento-plantilla-listado.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EjemploFomentoPlantillaListadoComponent
	implements AfterViewInit, OnInit
{
	@ViewChild(FomentoPlantillaListadoComponent)
	componentePlantillaListado!: FomentoPlantillaListadoComponent;

	title = 'Listados';
	valores_demo = [
		{ iconTitle: 'building', title: 'Promociones' },
		{ iconTitle: 'user-friends', title: 'Interesados' },
		{ iconTitle: 'sitemap', title: 'Organización' },
		{ iconTitle: 'home', title: 'Viviendas' },
	];

	config_Card;

	constructor(private router: Router) {}

	ngOnInit() {
		this.config_Card = this.generarCard();
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

	generarCard() {
		const res = [];
		this.valores_demo.forEach((i) => {
			res.push({
				label: '',
				typeStyle: 'material',
				iconTitle: `fas fa-${i.iconTitle}`,
				title: i.title,
				data: ['Consultar listado por defecto'],
				iconEye: 'fas fa-eye',
				iconFileCsv: 'fas fa-file-csv',
				labelButtonCsv: 'LISTADOS EXPORTADOS',
			});
		});
		return res;
	}
}
