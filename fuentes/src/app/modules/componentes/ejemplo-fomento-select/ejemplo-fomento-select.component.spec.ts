import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoSelectComponent } from './ejemplo-fomento-select.component';

describe('EjemploFomentoSelectComponent', () => {
	let component: EjemploFomentoSelectComponent;
	let fixture: ComponentFixture<EjemploFomentoSelectComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoSelectComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoSelectComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
