import {
	Component,
	ContentChild,
	EventEmitter,
	Input,
	Output,
	TemplateRef,
} from '@angular/core';

@Component({
	selector: 'lib-fomento-grid-list',
	templateUrl: './fomento.grid-list.component.html',
	styleUrls: ['./fomento.grid-list.component.scss'],
})
export class FomentoGridListComponent {
	@Input() columns = 3; // Número predeterminado de columnas
	@Input() rowHeight = '1:1'; // Altura de fila predeterminada
	@Input() gutterSize = '1px'; // Tamaño del gutter predeterminado
	@Input() data = []; // Datos vacíos por defecto
	@Input() selectable = false; // Deshabilita la selección por defecto
	@Input() highlightColor = 'lightblue'; // Color de resaltado predeterminado
	@Input() emptyMessage = 'No hay datos disponibles'; // Mensaje predeterminado cuando no hay datos
	@Input() isLoading = false; // Estado de carga desactivado por defecto
	@Input() loadingTemplate: TemplateRef<unknown>; // Plantilla de carga, no hay predeterminada
	@Input() errorMessage = ''; // Mensaje de error vacío por defecto
	@Input() pageSize = 10; // Tamaño de página predeterminado para paginación
	@Input() enablePagination = false; // Paginación desactivada por defecto

	@Output() selectEvent: EventEmitter<unknown> = new EventEmitter();
	@Output() pageChangeEvent: EventEmitter<number> = new EventEmitter();

	@ContentChild(TemplateRef) itemTemplate: TemplateRef<unknown>;

	currentPage = 1; // Control de la página actual para la paginación

	onSelect(item): void {
		if (this.selectable) {
			this.selectEvent.emit(item);
		}
	}

	onPageChange(page: number): void {
		if (page >= 1) {
			this.currentPage = page;
			this.pageChangeEvent.emit(page);
		}
	}

	get showEmptyMessage(): boolean {
		return !this.isLoading && this.data.length === 0 && !this.errorMessage;
	}

	get showError(): boolean {
		return !this.isLoading && this.errorMessage !== '';
	}
}
