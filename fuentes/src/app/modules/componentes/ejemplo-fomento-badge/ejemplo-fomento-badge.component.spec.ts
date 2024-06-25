import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoBadgeComponent } from './ejemplo-fomento-badge.component';

describe('FomentoBadgeComponent', () => {
	let component: EjemploFomentoBadgeComponent;
	let fixture: ComponentFixture<EjemploFomentoBadgeComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoBadgeComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoBadgeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
