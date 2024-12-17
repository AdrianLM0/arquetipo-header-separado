import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomentoTooltipComponent } from './fomento.tooltip.component';

describe('FomentoTooltipComponent', () => {
	let component: FomentoTooltipComponent;
	let fixture: ComponentFixture<FomentoTooltipComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [FomentoTooltipComponent],
		});
		fixture = TestBed.createComponent(FomentoTooltipComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
