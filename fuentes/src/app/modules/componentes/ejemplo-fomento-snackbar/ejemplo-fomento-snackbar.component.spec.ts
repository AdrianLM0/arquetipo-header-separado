import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjemploFomentoSnackbarComponent } from './ejemplo-fomento-snackbar.component';

describe('EjemploFomentoSnackbarComponent', () => {
	let component: EjemploFomentoSnackbarComponent;
	let fixture: ComponentFixture<EjemploFomentoSnackbarComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoSnackbarComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoSnackbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
