import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoDialogComponent } from './ejemplo-fomento-dialog.component';

describe('EjemploFomentoDialogComponent', () => {
	let component: EjemploFomentoDialogComponent;
	let fixture: ComponentFixture<EjemploFomentoDialogComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoDialogComponent],
		});
		fixture = TestBed.createComponent(EjemploFomentoDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
