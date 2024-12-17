import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomentoExpansionPanelComponent } from './fomento.expansion-panel.component';

describe('FomentoExpansionPanelComponent', () => {
	let component: FomentoExpansionPanelComponent;
	let fixture: ComponentFixture<FomentoExpansionPanelComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FomentoExpansionPanelComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FomentoExpansionPanelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
