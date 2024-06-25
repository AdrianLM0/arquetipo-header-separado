import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoTabsComponent } from './ejemplo-fomento-tabs.component';

describe('EjemploFomentoTabsComponent', () => {
	let component: EjemploFomentoTabsComponent;
	let fixture: ComponentFixture<EjemploFomentoTabsComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoTabsComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoTabsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
