import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoSlideToggleComponent } from './ejemplo-fomento-slide-toggle.component';

describe('FomentoSlideToggleComponent', () => {
	let component: EjemploFomentoSlideToggleComponent;
	let fixture: ComponentFixture<EjemploFomentoSlideToggleComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoSlideToggleComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoSlideToggleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
