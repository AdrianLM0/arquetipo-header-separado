import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomentoSelectComponent } from './fomento.select.component';

describe('FomentoSelectComponent', () => {
	let component: FomentoSelectComponent;
	let fixture: ComponentFixture<FomentoSelectComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [FomentoSelectComponent],
		});
		fixture = TestBed.createComponent(FomentoSelectComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
