import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnChanges } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';

@Component({
	selector: 'lib-fomento-menu',
	templateUrl: './fomento.menu.component.html',
	styleUrls: ['./fomento.menu.component.scss'],
})
export class FomentoMenuComponent implements OnChanges {
	@Input() DATA:any;
	@Input() nombre_usuario = '';
	@Input() mostrarmenu_usuario = true;
	@Input() listaPrivilegios = [];
	@Input() ultimoAcceso = '';
	@Input() type = '';
	errores = false;

	ngOnChanges() {
		this.inputValidation();
	}

	changeFocus(name: string) {
		const el = document.getElementById('header-' + name) as HTMLInputElement;
		el.focus();
	}

	inputValidation() {
		if (typeof this.DATA === 'string') {
			try {
				this.DATA = JSON.parse(this.DATA);
			} catch (err) {
				this.errores = true;
				console.log('Error => JSON no valido');
			}
		}
	}
}
