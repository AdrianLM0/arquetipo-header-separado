import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoExpansionPanelComponent } from './ejemplo-fomento-expansion-panel.component';

describe('EjemploFomentoExpansionPanelComponent', () => {
	let component: EjemploFomentoExpansionPanelComponent;
	let fixture: ComponentFixture<EjemploFomentoExpansionPanelComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoExpansionPanelComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoExpansionPanelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
