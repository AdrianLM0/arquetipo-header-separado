import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoPlantillaConsultaComponent } from './ejemplo-fomento-plantilla-consulta.component';

describe('EjemploFomentoPlantillaConsultaComponent', () => {
	let component: EjemploFomentoPlantillaConsultaComponent;
	let fixture: ComponentFixture<EjemploFomentoPlantillaConsultaComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoPlantillaConsultaComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoPlantillaConsultaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
