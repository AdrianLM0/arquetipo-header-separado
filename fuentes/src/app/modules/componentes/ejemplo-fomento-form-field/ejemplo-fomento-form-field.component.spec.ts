import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoFormFieldComponent } from './ejemplo-fomento-form-field.component';

describe('FomentoFormFieldComponent', () => {
	let component: EjemploFomentoFormFieldComponent;
	let fixture: ComponentFixture<EjemploFomentoFormFieldComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoFormFieldComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoFormFieldComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
