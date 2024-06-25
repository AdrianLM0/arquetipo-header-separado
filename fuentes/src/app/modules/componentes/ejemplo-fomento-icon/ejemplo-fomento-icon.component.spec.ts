import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoIconComponent } from './ejemplo-fomento-icon.component';

describe('EjemploFomentoIconComponent', () => {
	let component: EjemploFomentoIconComponent;
	let fixture: ComponentFixture<EjemploFomentoIconComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoIconComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoIconComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
