import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoSliderComponent } from './ejemplo-fomento-slider.component';

describe('FomentoSliderComponent', () => {
	let component: EjemploFomentoSliderComponent;
	let fixture: ComponentFixture<EjemploFomentoSliderComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoSliderComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoSliderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
