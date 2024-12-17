import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FomentoGridListComponent } from './fomento.grid-list.component';
import { spyOn } from 'jest-mock';

describe('FomentoGridListComponent', () => {
	let component: FomentoGridListComponent;
	let fixture: ComponentFixture<FomentoGridListComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FomentoGridListComponent],
			// Añade aquí cualquier módulo o servicio necesario
		}).compileComponents();

		fixture = TestBed.createComponent(FomentoGridListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	// Test para propiedades @Input
	it('debe crear con valores predeterminados de @Input', () => {
		expect(component.columns).toBe(3);
		expect(component.rowHeight).toBe('1:1');
		// Añade aquí las demás expectativas
	});

	// Test para eventos @Output

	it('debe emitir un evento pageChangeEvent en el cambio de página', () => {
		const newPage = 2;
		const emitSpy = spyOn(component.pageChangeEvent, 'emit');
		component.onPageChange(newPage);
		expect(emitSpy).toHaveBeenCalledWith(newPage);
	});

	// Test para getters
	it('debe mostrar el mensaje vacío cuando no hay datos y no está cargando', () => {
		component.data = [];
		component.isLoading = false;
		component.errorMessage = '';
		expect(component.showEmptyMessage).toBeTruthy();
	});

	it('debe mostrar el mensaje de error cuando hay un mensaje de error y no está cargando', () => {
		component.errorMessage = 'Error';
		component.isLoading = false;
		expect(component.showError).toBeTruthy();
	});

	// Añade aquí más tests según sea necesario
});
