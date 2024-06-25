import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoPlantillaListadoComponent } from './ejemplo-fomento-plantilla-listado.component';

describe('EjemploFomentoPlantillaListadoComponent', () => {
	let component: EjemploFomentoPlantillaListadoComponent;
	let fixture: ComponentFixture<EjemploFomentoPlantillaListadoComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoPlantillaListadoComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoPlantillaListadoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
