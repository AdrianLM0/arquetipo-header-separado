import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoTreeComponent } from './ejemplo-fomento-tree.component';

describe('FomentoTreeComponent', () => {
	let component: EjemploFomentoTreeComponent;
	let fixture: ComponentFixture<EjemploFomentoTreeComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoTreeComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoTreeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
