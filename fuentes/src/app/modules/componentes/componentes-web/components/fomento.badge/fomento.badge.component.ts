import { Component, Input } from '@angular/core';
import { MatBadgePosition, MatBadgeSize } from '@angular/material/badge';
import { ThemePalette } from '@angular/material/core';

@Component({
	selector: 'lib-fomento-badge',
	templateUrl: './fomento.badge.component.html',
	styleUrls: ['./fomento.badge.component.scss'],
})
export class FomentoBadgeComponent {
	@Input() badgeColor: ThemePalette;
	@Input() badge: string | number | undefined;
	@Input() badgeDescripcion: string;
	@Input() badgeDisabled: boolean;
	@Input() badgeHiden: boolean;
	@Input() badgeOverlap: boolean;
	@Input() badgePosition: MatBadgePosition;
	@Input() badgeSize: MatBadgeSize;
}
