import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomentoFormFieldComponent } from './fomento.form-field.component';

describe('FomentoFormFieldComponent', () => {
	let component: FomentoFormFieldComponent;
	let fixture: ComponentFixture<FomentoFormFieldComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [FomentoFormFieldComponent],
		});
		fixture = TestBed.createComponent(FomentoFormFieldComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
