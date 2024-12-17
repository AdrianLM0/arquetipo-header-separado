import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'lib-fomento-toolbar',
	templateUrl: './fomento.toolbar.component.html',
	styleUrls: ['./fomento.toolbar.component.scss'],
})
export class FomentoToolbarComponent {
	@Input() title: string;
	@Input() iconNames: string[];
	@Input() iconActions;
	@Output() emittEvent = new EventEmitter<unknown>();
	@Input() toolbarColor = 'default'; // Color de fondo del toolbar
	@Input() iconColor = 'default'; // Color de los iconos
	@Input() textColor = 'default'; // Color del texto

	onIconClick(index: number) {
		console.log('click on', index);
		if (this.iconActions && this.iconActions[index]) {
			console.log('iconActions', this.iconActions[index]);
			this.emittEvent.emit(this.iconActions[index]);
		}
	}
}
