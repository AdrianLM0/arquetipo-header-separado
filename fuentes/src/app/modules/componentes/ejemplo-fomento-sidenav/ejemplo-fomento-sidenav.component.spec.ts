import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoSidenavComponent } from './ejemplo-fomento-sidenav.component';

describe('EjemploFomentoSidenavComponent', () => {
	let component: EjemploFomentoSidenavComponent;
	let fixture: ComponentFixture<EjemploFomentoSidenavComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoSidenavComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoSidenavComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
