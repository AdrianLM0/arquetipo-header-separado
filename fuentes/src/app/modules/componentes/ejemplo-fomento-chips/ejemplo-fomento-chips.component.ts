import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
	selector: 'app-ejemplo-fomento-chips',
	templateUrl: './ejemplo-fomento-chips.component.html',
	styleUrls: ['./ejemplo-fomento-chips.component.scss'],
})
export class EjemploFomentoChipsComponent {
	ariaDescrption: string | null = '';
	ariaLabel: string | null = '';
	value = '';
	id = '';
	color: ThemePalette = 'primary';
	disabled = true;
	selected = true;
}
