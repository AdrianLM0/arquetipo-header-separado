import { Component } from '@angular/core';

@Component({
	selector: 'app-ejemplo-fomento-disclaimer',
	templateUrl: './ejemplo-fomento-disclaimer.component.html',
	styleUrls: ['./ejemplo-fomento-disclaimer.component.scss'],
})
export class EjemploFomentoDisclaimerComponent {
	isVisible = true;

	//Atributos disclaimer
	titulo = 'Obligaciones para el uso de Sistema';
	parrafo =
		"Para la ultilización de esta aplicación informática se debe tener en consideración el <a href='https://www.juntadeandalucia.es/boja/2020/208/34'>Código de Conducta</a> en el uso de las Tecnologías de la Información y la Comunicación para profesionales públicos de la Administracion de la Junta de Andalucía (Boja núm. 22 de Octubre de 2020).";
	usuario: string;
	ultimoAcceso: string;
	ultimoCierreSesion: string;

	//Atributos button
	labelAceptar = 'Aceptar';
	labelCerrar = 'Cerrar Sesión';

	buttonAceptar() {
		this.isVisible = !this.isVisible;
	}

	buttonCloseSesion() {
		this.isVisible = !this.isVisible;
	}
}
