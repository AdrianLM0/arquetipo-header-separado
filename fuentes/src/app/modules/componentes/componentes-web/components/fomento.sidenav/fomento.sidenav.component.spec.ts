import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomentoSidenavComponent } from './fomento.sidenav.component';

describe('FomentoSidenavComponent', () => {
	let component: FomentoSidenavComponent;
	let fixture: ComponentFixture<FomentoSidenavComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [FomentoSidenavComponent],
		});
		fixture = TestBed.createComponent(FomentoSidenavComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
