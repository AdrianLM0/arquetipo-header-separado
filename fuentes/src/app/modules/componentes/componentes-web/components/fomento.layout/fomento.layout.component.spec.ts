import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomentoLayoutComponent } from './fomento.layout.component';

describe('FomentoLayoutComponent', () => {
	let component: FomentoLayoutComponent;
	let fixture: ComponentFixture<FomentoLayoutComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [FomentoLayoutComponent],
		});
		fixture = TestBed.createComponent(FomentoLayoutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
