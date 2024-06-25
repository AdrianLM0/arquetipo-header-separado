import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoTableComponent } from './ejemplo-fomento-table.component';

describe('EjemploFomentoTableComponent', () => {
	let component: EjemploFomentoTableComponent;
	let fixture: ComponentFixture<EjemploFomentoTableComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoTableComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
