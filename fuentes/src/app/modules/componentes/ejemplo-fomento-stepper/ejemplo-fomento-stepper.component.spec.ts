import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoStepperComponent } from './ejemplo-fomento-stepper.component';

describe('EjemploFomentoStepperComponent', () => {
	let component: EjemploFomentoStepperComponent;
	let fixture: ComponentFixture<EjemploFomentoStepperComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoStepperComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoStepperComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
