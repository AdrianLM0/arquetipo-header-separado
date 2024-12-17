import { Component, Input } from '@angular/core';

/* import '@matter/matter-icon/dist/matter-icon'; */

@Component({
	selector: 'lib-fomento-icon',
	templateUrl: './fomento.icon.component.html',
	styleUrls: ['./fomento.icon.component.scss'],
})
export class FomentoIconComponent {
	
	@Input() typeStyle = 'material';
	@Input() icon = 'book';
	@Input() color = '';
	
	//Atributos mat-icon
	@Input() svgIcon = '';
	@Input() fontSet = 'fa';
	@Input() inline = false;
	@Input() fontIcon = '';
}
