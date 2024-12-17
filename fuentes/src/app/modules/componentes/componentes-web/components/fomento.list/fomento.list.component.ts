import {
	Component,
	EventEmitter,
	Input,
	Output,
	TemplateRef,
	ViewChild,
} from '@angular/core';

@Component({
	selector: 'lib-fomento-list',
	templateUrl: './fomento.list.component.html',
	styleUrls: ['./fomento.list.component.scss'],
})
export class FomentoListComponent {
	@ViewChild('itemTemplate') itemTemplate: TemplateRef<unknown>;

	// @Input() itemTemplate: TemplateRef<unknown> | null = null;
	@Input() items = [];
	@Input() theme = 'primary'; // Tema para estilos
	@Input() icon = ''; // Icono genérico para elementos de la lista
	@Input() href = ''; // Href genérico para elementos de la lista
	@Input() target = '_self'; // Target para el enlace
	@Input() disabled = false; // Estado deshabilitado
	@Input() ariaLabel = ''; // ARIA label
	@Input() disableRipple = false; // Desactivar efecto ripple
	@Input() displayProperty = '';
	@Input() clickable = false; // Controlar si los elementos son clickeables
	@Input() selectable = false; // Lista con selección de elementos
	@Input() isNavList = false; // Cambiar entre MatList y MatNavList
	@Input() iconColor = ''; // Color del icono
	@Input() textColor = ''; // Color del texto
	@Input() avatar = '';
	@Input() listItemStyle = {};
	@Input() alignItems = 'flex-start';
	@Input() justifyContent = 'flex-start';
	@Input() rippleColor = '';
	@Input() rippleDuration = 600;
	@Input() multiple = false; // Propiedad para habilitar selección múltiple

	@Output() itemClick = new EventEmitter<unknown>();

	isObject(item): boolean {
		return typeof item === 'object' && item !== null;
	}

	onItemClicked(event): void {
		if (this.selectable) {
			const selectedItems = event.options
				.filter((option) => option.selected)
				.map((option) => option.value);
			this.itemClick.emit(selectedItems);
		} else if (this.clickable) {
			this.itemClick.emit(event);
		}
	}
}
