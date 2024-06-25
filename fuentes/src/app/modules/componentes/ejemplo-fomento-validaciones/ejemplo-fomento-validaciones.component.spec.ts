import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoValidacionesComponent } from './ejemplo-fomento-validaciones.component';

describe('EjemploFomentoValidacionesComponent', () => {
	let component: EjemploFomentoValidacionesComponent;
	let fixture: ComponentFixture<EjemploFomentoValidacionesComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoValidacionesComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoValidacionesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
