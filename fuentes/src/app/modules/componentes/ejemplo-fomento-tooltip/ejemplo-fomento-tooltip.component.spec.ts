import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoTooltipComponent } from './ejemplo-fomento-tooltip.component';

describe('EjemploFomentoTooltipComponent', () => {
	let component: EjemploFomentoTooltipComponent;
	let fixture: ComponentFixture<EjemploFomentoTooltipComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoTooltipComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoTooltipComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
