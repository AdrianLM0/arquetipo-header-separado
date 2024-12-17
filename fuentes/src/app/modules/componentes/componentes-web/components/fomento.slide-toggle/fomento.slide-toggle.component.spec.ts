import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomentoSlideToggleComponent } from './fomento.slide-toggle.component';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

describe('FomentoSlideToggleComponent', () => {
	let component: FomentoSlideToggleComponent;
	let fixture: ComponentFixture<FomentoSlideToggleComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FomentoSlideToggleComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FomentoSlideToggleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should emit change event on click', () => {
		const mockEvent = {
			source: component,
			checked: true,
		} as unknown as MatSlideToggleChange;

		const emitSpy = jest.spyOn(component.changeEvent, 'emit');

		component.clickChange(mockEvent);

		expect(emitSpy).toHaveBeenCalledWith(mockEvent);
	});
});
