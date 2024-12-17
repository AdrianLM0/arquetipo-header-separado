import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomentoBadgeComponent } from './fomento.badge.component';

describe('FomentoBadgeComponent', () => {
	let component: FomentoBadgeComponent;
	let fixture: ComponentFixture<FomentoBadgeComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [FomentoBadgeComponent],
		});
		fixture = TestBed.createComponent(FomentoBadgeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
