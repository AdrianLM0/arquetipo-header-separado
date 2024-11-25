import { Component } from '@angular/core';

@Component({
	selector: 'app-ejemplo-fomento-icon',
	templateUrl: './ejemplo-fomento-icon.component.html',
	styleUrls: ['./ejemplo-fomento-icon.component.scss'],
})
export class EjemploFomentoIconComponent {
	//@Input() typeStyle: string = "matter";
	typeStyle = 'material';

	//Atributos mat-icon
	icon = 'home';
	color = 'green';
	svgIcon = '';
	fontSet = 'fa';
	inline = false;
	fontIcon = '';
}
