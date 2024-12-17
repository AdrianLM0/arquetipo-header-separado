import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomentoRippleComponent } from './fomento.ripple.component';

describe('FomentoRippleComponent', () => {
	let component: FomentoRippleComponent;
	let fixture: ComponentFixture<FomentoRippleComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FomentoRippleComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FomentoRippleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
