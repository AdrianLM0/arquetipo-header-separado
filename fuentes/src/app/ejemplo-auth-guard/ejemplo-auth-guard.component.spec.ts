import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploAuthGuardComponent } from './ejemplo-auth-guard.component';

describe('EjemploAuthGuardComponent', () => {
	let component: EjemploAuthGuardComponent;
	let fixture: ComponentFixture<EjemploAuthGuardComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploAuthGuardComponent],
		});
		fixture = TestBed.createComponent(EjemploAuthGuardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
