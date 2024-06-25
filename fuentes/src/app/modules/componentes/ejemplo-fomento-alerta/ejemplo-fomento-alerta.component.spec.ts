import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoAlertaComponent } from './ejemplo-fomento-alerta.component';

describe('EjemploFomentoAlertaComponent', () => {
	let component: EjemploFomentoAlertaComponent;
	let fixture: ComponentFixture<EjemploFomentoAlertaComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoAlertaComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoAlertaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
