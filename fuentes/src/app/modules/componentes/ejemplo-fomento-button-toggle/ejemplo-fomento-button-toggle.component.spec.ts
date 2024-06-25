import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoButtonToggleComponent } from './ejemplo-fomento-button-toggle.component';

describe('EjemploFomentoButtonToggleComponent', () => {
	let component: EjemploFomentoButtonToggleComponent;
	let fixture: ComponentFixture<EjemploFomentoButtonToggleComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoButtonToggleComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoButtonToggleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
