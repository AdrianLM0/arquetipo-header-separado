import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoInputComponent } from './ejemplo-fomento-input.component';

describe('EjemploFomentoInputComponent', () => {
	let component: EjemploFomentoInputComponent;
	let fixture: ComponentFixture<EjemploFomentoInputComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoInputComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoInputComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
