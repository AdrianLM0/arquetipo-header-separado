import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoCheckboxComponent } from './ejemplo-fomento-checkbox.component';

describe('EjemploFomentoCheckboxComponent', () => {
	let component: EjemploFomentoCheckboxComponent;
	let fixture: ComponentFixture<EjemploFomentoCheckboxComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoCheckboxComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoCheckboxComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
