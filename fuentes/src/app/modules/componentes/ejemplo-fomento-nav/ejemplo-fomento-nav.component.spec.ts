import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoNavComponent } from './ejemplo-fomento-nav.component';

describe('EjemploFomentoNavComponent', () => {
	let component: EjemploFomentoNavComponent;
	let fixture: ComponentFixture<EjemploFomentoNavComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoNavComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoNavComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
