import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjemploFomentoAutocompleteComponent } from './ejemplo-fomento-autocomplete.component';

describe('FomentoAutocompleteComponent', () => {
	let component: EjemploFomentoAutocompleteComponent;
	let fixture: ComponentFixture<EjemploFomentoAutocompleteComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoAutocompleteComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoAutocompleteComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
