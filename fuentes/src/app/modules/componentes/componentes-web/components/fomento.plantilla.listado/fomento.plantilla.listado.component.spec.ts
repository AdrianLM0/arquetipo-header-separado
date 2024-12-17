import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FomentoPlantillaListadoComponent } from './fomento.plantilla.listado.component';
import { FomentoNavComponent } from '../fomento.nav/fomento.nav.component';
import { FomentoBreadcrumbComponent } from '../fomento.breadcrumb/fomento.breadcrumb.component';

describe('FomentoPlantillaListadoComponent', () => {
	let component: FomentoPlantillaListadoComponent;
	let fixture: ComponentFixture<FomentoPlantillaListadoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				FomentoPlantillaListadoComponent,
				FomentoNavComponent,
				FomentoBreadcrumbComponent,
			], // Mocked or actual components
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FomentoPlantillaListadoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should initialize default values', () => {
		expect(component.titlePrincipal).toEqual('Titulo principal');
		expect(component.typeStyle).toEqual('material');
		expect(component.config_Card).toBeUndefined();
		expect(component.title).toEqual('Título');
		expect(component.data).toEqual(['Opcion1', 'Opcion2']);
		expect(component.card).toEqual([]);
		expect(component.isGridContainer).toBeTruthy();
		expect(component.isGrid).toBeTruthy();
		expect(component.isRowContainer).toBeFalsy();
		expect(component.isRow).toBeFalsy();
		expect(component.iconGrid).toEqual('grid');
		expect(component.iconRow).toEqual('list');
		expect(component.iconTitle).toEqual('');
	});

	it('should toggle grid container', () => {
		component.toggleGridContainer();
		expect(component.isGridContainer).toBeTruthy();
		expect(component.isGrid).toBeTruthy();
		expect(component.isRowContainer).toBeFalsy();
		expect(component.isRow).toBeFalsy();
	});

	it('should toggle row container', () => {
		component.toggleRowContainer();
		expect(component.isGridContainer).toBeFalsy();
		expect(component.isGrid).toBeFalsy();
		expect(component.isRowContainer).toBeTruthy();
		expect(component.isRow).toBeTruthy();
	});

	it('should emit click event for button eye', () => {
		const testValue = 'test';
		component.clickButtonEye.subscribe((value) => {
			expect(value).toEqual(testValue);
		});
		component.buttonEye(testValue);
	});

	it('should emit click event for button csv', () => {
		const testValue = 'test';
		component.clickButtonCsv.subscribe((value) => {
			expect(value).toEqual(testValue);
		});
		component.buttonCsv(testValue);
	});
});
