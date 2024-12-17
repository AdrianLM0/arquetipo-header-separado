import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomentoSliderComponent } from './fomento.slider.component';

describe('FomentoSliderComponent', () => {
	let component: FomentoSliderComponent;
	let fixture: ComponentFixture<FomentoSliderComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [FomentoSliderComponent],
		});
		fixture = TestBed.createComponent(FomentoSliderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
