import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomentoPlantillaConsultaComponent } from './fomento.plantilla.consulta.component';

describe('FomentoPlantillaConsultaComponent', () => {
	let component: FomentoPlantillaConsultaComponent;
	let fixture: ComponentFixture<FomentoPlantillaConsultaComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [FomentoPlantillaConsultaComponent],
		});
		fixture = TestBed.createComponent(FomentoPlantillaConsultaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
