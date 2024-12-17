import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FomentoFormularioComponent } from './fomento.formulario.component';
import { MockComponent, MockModule } from 'ng-mocks';
import { FomentoButtonComponent } from '../fomento.button/fomento.button.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';

const MOCK_FORM = {
	sections: [
		{
			label: 'Formulario avanzado',
			groups: [
				{
					label: 'Fitrar jugadores',
					rows: [
						{
							filters: [
								{
									header: 'Nombre de jugador',
									formControlName: 'nombre',
									type: 'input',
								},
								{
									header: 'Apellido del jugador',
									formControlName: 'apellido',
									type: 'input',
								},
								{ header: 'Equipo', formControlName: 'equipo', type: 'input' },
							],
						},
					],
				},
			],
		},
	],
};

describe('FomentoFormularioComponent', () => {
	let component: FomentoFormularioComponent;
	let fixture: ComponentFixture<FomentoFormularioComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				FomentoFormularioComponent,
				MockComponent(FomentoButtonComponent),
			],
			imports: [
				FormsModule,
				ReactiveFormsModule,
				MockModule(MatExpansionModule),
				MockModule(MatFormFieldModule),
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FomentoFormularioComponent);
		component = fixture.componentInstance;
		component.form_config = MOCK_FORM;
		//component.submitAction = new EventEmitter<unknown>();
		component.form_config = {
			sections: [{ groups: [{ rows: [{ filters: [] }] }] }],
		}; // Provide a valid form configuration
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should initialize the form correctly', () => {
		component.initializeForm();

		expect(component.form).toBeDefined();
		expect(component.form.get('nombre')).toBeDefined();
		expect(component.form.get('apellido')).toBeDefined();
		expect(component.form.get('equipo')).toBeDefined();
	});
});
