import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoProgressComponent } from './ejemplo-fomento-progress.component';

describe('EjemploFomentoProgressComponent', () => {
	let component: EjemploFomentoProgressComponent;
	let fixture: ComponentFixture<EjemploFomentoProgressComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoProgressComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoProgressComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
