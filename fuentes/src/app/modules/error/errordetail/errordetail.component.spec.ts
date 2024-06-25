import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDetailComponent } from './errordetail.component';

describe('ErrorDetailComponent', () => {
	let component: ErrorDetailComponent;
	let fixture: ComponentFixture<ErrorDetailComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ErrorDetailComponent],
		});
		fixture = TestBed.createComponent(ErrorDetailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
