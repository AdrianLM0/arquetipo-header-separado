import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoDisclaimerComponent } from './ejemplo-fomento-disclaimer.component';

describe('EjemploFomentoDisclaimerComponent', () => {
	let component: EjemploFomentoDisclaimerComponent;
	let fixture: ComponentFixture<EjemploFomentoDisclaimerComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoDisclaimerComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoDisclaimerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
