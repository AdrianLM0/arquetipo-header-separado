import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'lib-fomento-footer',
	templateUrl: './fomento.footer.component.html',
	styleUrls: ['./fomento.footer.component.scss'],
})
export class FomentoFooterComponent implements OnInit {
	//Atributo de estilo material o matter
	@Input() typeStyle = 'material';

	// Atributos matter-brand
	@Input() data = '';

	@Input() ocultarSecciones = false;
	@Input() ocultarSeccionSocial = false;

	footerData;
	columns = [];
	social = [];
	links = [];
	logos = [];

	ngOnInit(): void {
		this.procesarDATA();
	}

	procesarDATA() {
		if (typeof this.data === 'string' && this.data !== '') {
			if (this.typeStyle === 'material') {
				const errores: boolean = this.inputValidation();
				if (errores) {
					return;
				}
				this.footerData = JSON.parse(this.data);
				this.columns = this.footerData.columns;
				this.social = this.footerData.social;
				this.links = this.footerData.links;
				this.logos = this.footerData.logos;

				//Preparando el array para meter el siguenos dentro de la ultima columna
				const ultimaColumna = this.columns[this.columns.length - 1];
				const arrayUltimaColumna = ultimaColumna.columna;

				//Este if es por si el input de ocultarSeccionSocial viene a true se muestre el social.
				if (this.ocultarSeccionSocial === false) {
					//Esto es lo que se modifica segun el footer que quieras
					this.columns[this.columns.length - 1].columna =
						arrayUltimaColumna.concat(this.social[this.social.length - 1]);
				}

				//Este if es por si el input de ocultarSecciones viene a true se muestre el social.
				if (this.ocultarSecciones === true) {
					this.columns = [];
				}
			}
		}
	}

	inputValidation(): boolean {
		try {
			if (this.typeStyle !== 'material' && this.typeStyle !== 'matter') {
				throw new Error(
					"El tipo del componente solo puede ser 'material' o 'matter'",
				);
			}
		} catch (err) {
			console.log('' + err);
			return true;
		}

		if (typeof this.data === 'string') {
			try {
				JSON.parse(this.data);
			} catch (err) {
				console.log('Error => ' + err);
				return true;
			}
		}

		return false;
	}
}
