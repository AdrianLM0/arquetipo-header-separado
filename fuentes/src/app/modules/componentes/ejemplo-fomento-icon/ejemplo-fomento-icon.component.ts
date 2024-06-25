import { Component } from '@angular/core';

@Component({
	selector: 'app-ejemplo-fomento-icon',
	templateUrl: './ejemplo-fomento-icon.component.html',
	styleUrls: ['./ejemplo-fomento-icon.component.scss'],
})
export class EjemploFomentoIconComponent {
	//@Input() typeStyle: string = "matter";
	typeStyle = 'material';

	//Atributos matter-icon
	family = 'fa';
	icon = 'home';
	theme = '';
	color = 'green';
	className = '';
	spin = true;
	pulse = false;
	fixedWidth = false;
	inverse = false;
	border = false;
	listItem = false;
	flip = '';
	size = '';
	pull = '';
	alt = '';
	mask = '';
	transform = '';

	//Atributos mat-icon
	svgIcon = '';
	fontSet = 'fa';
	inline = false;
	fontIcon = '';
}
