import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomentoSpinnerComponent } from './fomento.spinner.component';
import { MockModule } from 'ng-mocks';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('FomentoSpinnerComponent', () => {
	let component: FomentoSpinnerComponent;
	let fixture: ComponentFixture<FomentoSpinnerComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [FomentoSpinnerComponent],
			imports: [MockModule(MatProgressSpinnerModule)],
		});
		fixture = TestBed.createComponent(FomentoSpinnerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
