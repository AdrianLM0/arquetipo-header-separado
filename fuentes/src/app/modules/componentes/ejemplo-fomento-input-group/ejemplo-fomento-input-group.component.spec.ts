import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoInputGroupComponent } from './ejemplo-fomento-input-group.component';

describe('EjemploFomentoInputGroupComponent', () => {
	let component: EjemploFomentoInputGroupComponent;
	let fixture: ComponentFixture<EjemploFomentoInputGroupComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoInputGroupComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoInputGroupComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
