import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoRippleComponent } from './ejemplo-fomento-ripple.component';

describe('EjemploFomentoRippleComponent', () => {
	let component: EjemploFomentoRippleComponent;
	let fixture: ComponentFixture<EjemploFomentoRippleComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoRippleComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoRippleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
