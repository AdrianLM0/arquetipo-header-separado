import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFiltroColumnasTablaComponent } from './ejemplo-filtro-columnas-tabla.component';

describe('EjemploFiltroColumnasTablaComponent', () => {
	let component: EjemploFiltroColumnasTablaComponent;
	let fixture: ComponentFixture<EjemploFiltroColumnasTablaComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFiltroColumnasTablaComponent],
		});
		fixture = TestBed.createComponent(EjemploFiltroColumnasTablaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
