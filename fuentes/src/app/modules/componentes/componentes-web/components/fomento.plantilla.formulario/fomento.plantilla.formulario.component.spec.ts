import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomentoPlantillaFormularioComponent } from './fomento.plantilla.formulario.component';
import { FormBuilder } from '@angular/forms';

describe('FomentoPlantillaFormularioComponent', () => {
	let component: FomentoPlantillaFormularioComponent;
	let fixture: ComponentFixture<FomentoPlantillaFormularioComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FomentoPlantillaFormularioComponent],
			providers: [FormBuilder],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FomentoPlantillaFormularioComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the component', () => {
		expect(component).toBeTruthy();
	});

	it('should initialize form with form group', () => {
		expect(component.form).toBeDefined();
	});
});
