import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoSpinnerComponent } from './ejemplo-fomento-spinner.component';

describe('EjemploFomentoSpinnerComponent', () => {
	let component: EjemploFomentoSpinnerComponent;
	let fixture: ComponentFixture<EjemploFomentoSpinnerComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoSpinnerComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoSpinnerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
