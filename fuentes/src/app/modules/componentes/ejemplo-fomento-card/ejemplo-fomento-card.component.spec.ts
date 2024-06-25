import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoCardComponent } from './ejemplo-fomento-card.component';

describe('EjemploFomentoCardComponent', () => {
	let component: EjemploFomentoCardComponent;
	let fixture: ComponentFixture<EjemploFomentoCardComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoCardComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
