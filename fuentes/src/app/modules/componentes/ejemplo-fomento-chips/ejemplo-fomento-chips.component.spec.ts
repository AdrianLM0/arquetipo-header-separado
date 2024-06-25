import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoChipsComponent } from './ejemplo-fomento-chips.component';

describe('EjemploFomentoChipsComponent', () => {
	let component: EjemploFomentoChipsComponent;
	let fixture: ComponentFixture<EjemploFomentoChipsComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoChipsComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoChipsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
