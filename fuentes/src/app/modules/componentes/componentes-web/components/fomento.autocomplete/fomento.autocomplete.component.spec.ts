import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FomentoAutocompleteComponent } from './fomento.autocomplete.component';
import { MockModule } from 'ng-mocks';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

describe('FomentoAutocompleteComponent', () => {
	let component: FomentoAutocompleteComponent;
	let fixture: ComponentFixture<FomentoAutocompleteComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [FomentoAutocompleteComponent],
			imports: [MockModule(MatAutocompleteModule)],
		});
		fixture = TestBed.createComponent(FomentoAutocompleteComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
