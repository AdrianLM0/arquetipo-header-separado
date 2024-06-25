import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoButtonComponent } from './ejemplo-fomento-button.component';

describe('IrfwebButtonComponent', () => {
	let component: EjemploFomentoButtonComponent;
	let fixture: ComponentFixture<EjemploFomentoButtonComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoButtonComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoButtonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
