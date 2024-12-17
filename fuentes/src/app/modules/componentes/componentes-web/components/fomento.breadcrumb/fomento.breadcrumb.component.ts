import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router, Event } from '@angular/router';
import { filter } from 'rxjs';

@Component({
	selector: 'lib-fomento-breadcrumb',
	templateUrl: './fomento.breadcrumb.component.html',
	styleUrls: ['./fomento.breadcrumb.component.scss'],
})
export class FomentoBreadcrumbComponent {
	gestionBreadcrumbs2(currentUrl: string[]) {
		const formatedBreadcrumbs = this.formatBreadcrumbs();
		const auxBreadcrumbList = [];
		currentUrl.forEach((param) => {
			const foundBread = formatedBreadcrumbs.find((e) => {
				return e.path === param;
			});
			if (foundBread && auxBreadcrumbList.length > 0) {
				const lastPath = auxBreadcrumbList[auxBreadcrumbList.length - 1].path;
				foundBread.path = lastPath + '/' + foundBread?.path;
			}
			if (foundBread) {
				auxBreadcrumbList.push(foundBread);
			}
		});
		this.breadcrumbList = auxBreadcrumbList;
	}

	getRoutes() {
		return this.router.config;
	}

	formatBreadcrumbs(): { path: string; label }[] {
		const breadcrumbs = this.getRoutes();

		const formatedBreadcrumbs: { path: string; label }[] = [];

		breadcrumbs.forEach(({ path, data, children }) => {
			if (path) {
				this.recursiveBreadcrumb(formatedBreadcrumbs, path, data, children);
			}
		});

		return formatedBreadcrumbs;
	}

	recursiveBreadcrumb(output, path: string, data, children?) {
		if (path != undefined && data && data['breadcrumb']) {
			output.push({ path: path, label: data['breadcrumb'] });

			if (children) {
				children.forEach((child) => {
					this.recursiveBreadcrumb(
						output,
						child.path,
						child.data,
						child.children,
					);
				});
			}
		}
	}

	@Input() breadcrumbList: { path: string; label: string }[] = [];

	constructor(
		private router: Router,
		private location: Location,
	) {
		this.router.events
			.pipe(filter((event: Event) => event instanceof NavigationEnd))
			.subscribe(() => {
				const fullPath = this.router.url; // Obtiene la ruta completa
				this.gestionBreadcrumbs(fullPath);
				//this.gestionBreadcrumbs2(this.location.path().split('/').slice(1)) // pendiente de revisión
			});
	}

	gestionBreadcrumbs(fullPath: string) {
		//Divide la ruta completa en segmentos, eliminando el primero que está vacío
		const segments = fullPath.split('/').slice(1);

		//Inicializa la miga de pan con el segmento 'Home'
		this.breadcrumbList = [{ path: 'home', label: 'Home' }];

		let currentPath = 'home';

		//Itera sobre cada segmento de la ruta
		segments.forEach((segment) => {
			//Verifica si el segmento actual no es 'components'
			if (segment !== 'components') {
				//Concatena el segmento actual con la ruta actual
				currentPath += '/' + segment;
				// Agrega un objeto a la lista de migas de pan con la ruta actual y el segmento actual
				this.breadcrumbList.push({ path: currentPath, label: segment });
			}
		});
		// Verifica si la lista de migas de pan tiene más de un elemento y si el segundo elemento tiene la etiqueta 'home'
		if (
			this.breadcrumbList.length > 1 &&
			this.breadcrumbList[1].label === 'home'
		) {
			// Elimina el segundo elemento de la lista de migas de pan
			this.breadcrumbList.splice(1, 1);
		}
	}
}
