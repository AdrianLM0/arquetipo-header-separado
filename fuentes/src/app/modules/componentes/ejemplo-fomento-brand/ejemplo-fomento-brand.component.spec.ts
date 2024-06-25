import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoBrandComponent } from './ejemplo-fomento-brand.component';

describe('IrfwebBrandComponent', () => {
	let component: EjemploFomentoBrandComponent;
	let fixture: ComponentFixture<EjemploFomentoBrandComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoBrandComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoBrandComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
