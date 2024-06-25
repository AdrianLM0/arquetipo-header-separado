import { Component } from '@angular/core';
import { MatBadgePosition, MatBadgeSize } from '@angular/material/badge';
import { ThemePalette } from '@angular/material/core';

@Component({
	selector: 'app-ejemplo-fomento-badge',
	templateUrl: './ejemplo-fomento-badge.component.html',
	styleUrls: ['./ejemplo-fomento-badge.component.scss'],
})
export class EjemploFomentoBadgeComponent {
	typeStyle = 'material';
	label = 'Botón';
	theme = 'secondary';
	icon = '';
	href = 'https://www.juntadeandalucia.es/';
	target = '_self';
	disabled = false;
	aria_label = 'texto alt';
	disableRipple = true;

	//Atributos del badge
	badgeColor: ThemePalette;
	badge: string | number | undefined = 5;
	badgeDescripcion: string;
	badgeDisabled: boolean;
	badgeHiden: boolean;
	badgeOverlap = true;
	badgePosition: MatBadgePosition = 'above before';
	badgeSize: MatBadgeSize = 'small';
}