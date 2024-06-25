import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoDividerComponent } from './ejemplo-fomento-divider.component';

describe('EjemploFomentoDividerComponent', () => {
	let component: EjemploFomentoDividerComponent;
	let fixture: ComponentFixture<EjemploFomentoDividerComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoDividerComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoDividerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
