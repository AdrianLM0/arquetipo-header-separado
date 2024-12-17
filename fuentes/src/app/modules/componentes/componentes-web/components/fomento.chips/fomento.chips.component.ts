import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
	selector: 'lib-fomento-chips',
	templateUrl: './fomento.chips.component.html',
	styleUrls: ['./fomento.chips.component.scss'],
})
export class FomentoChipsComponent {
	@Input() ariaDescription: string | null = '';
	@Input() ariaLabel: string | null = '';
	@Input() value = '';
	@Input() id = '';
	@Input() color: ThemePalette = 'primary';
	@Input() disabled = false;
	@Input() selected = false;
	@Input() chips: Array<{label: string, value?: string, id?: string, color?: ThemePalette, selected?: boolean, disabled?: boolean, ariaLabel?: string, ariaDescription?: string}> = [];
}
