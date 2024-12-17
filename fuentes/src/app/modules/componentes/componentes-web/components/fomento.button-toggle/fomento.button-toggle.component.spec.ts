import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FomentoButtonToggleComponent } from './fomento.button-toggle.component';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

describe('FomentoButtonToggleComponent', () => {
	let fixture: ComponentFixture<FomentoButtonToggleComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [FomentoButtonToggleComponent],
		});

		fixture = TestBed.createComponent(FomentoButtonToggleComponent);
		fixture.detectChanges();
	});

	it('should emit the click event', () => {
		const component = fixture.componentInstance;
		const emittedEvent: MatButtonToggleChange[] = [];

		component.onclickevent.subscribe((event: MatButtonToggleChange) => {
			emittedEvent.push(event);
		});

		component.clickbutton({
			/* mock your event here */
		});

		expect(emittedEvent.length).toBe(1);
		// You may add additional assertions for the emitted event if needed.
	});
});
