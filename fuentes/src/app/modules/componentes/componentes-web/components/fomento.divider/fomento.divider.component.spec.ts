import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomentoDividerComponent } from './fomento.divider.component';

describe('FomentoDividerComponent', () => {
	let component: FomentoDividerComponent;
	let fixture: ComponentFixture<FomentoDividerComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FomentoDividerComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FomentoDividerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
