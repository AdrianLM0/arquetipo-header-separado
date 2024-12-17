import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomentoChipsComponent } from './fomento.chips.component';

describe('FomentoChipsComponent', () => {
	let component: FomentoChipsComponent;
	let fixture: ComponentFixture<FomentoChipsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FomentoChipsComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FomentoChipsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
