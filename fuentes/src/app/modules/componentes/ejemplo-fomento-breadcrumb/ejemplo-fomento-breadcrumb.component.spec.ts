import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoBreadcrumbComponent } from './ejemplo-fomento-breadcrumb.component';

describe('EjemploFomentoBreadcrumbComponent', () => {
	let component: EjemploFomentoBreadcrumbComponent;
	let fixture: ComponentFixture<EjemploFomentoBreadcrumbComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoBreadcrumbComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoBreadcrumbComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
