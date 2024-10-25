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
	color;
	disabled;
	selected;
	chips = [
        { id: '1', label: 'Chip 1', value: '1', color: 'primary' as ThemePalette, selected: true, ariaLabel: 'Botón chip 1', ariaDescrption: 'Boton chip con valor 1' },
        { id: '2', label: 'Chip 2', value: '2', color: 'accent' as ThemePalette, selected: false, disabled: true, ariaLabel: 'Botón chip 2', ariaDescrption: 'Boton chip deshabilitado con valor 2'},
        { id: '3', label: 'Chip 3', value: '3', color: 'warn' as ThemePalette, selected: false, ariaLabel: 'Botón chip 3', ariaDescrption: 'Boton chip con valor 3' },
    ];
}
