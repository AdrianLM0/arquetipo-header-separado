import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockComponent, MockModule } from 'ng-mocks';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FomentoFiltroColumnasTablaComponent } from '../../fomento.filtro-columnas-tabla/fomento.filtro-columnas-tabla.component';
import { FomentoButtonComponent } from '../../fomento.button/fomento.button.component';
import { FomentoPaginatorComponent } from '../../fomento.paginator/fomento.paginator.component';
import { FomentoSelectComponent } from '../../fomento.select/fomento.select.component';
import { MatSort } from '@angular/material/sort';
import {
	ApiEndpointsService,
	FomentoGestionFiltrosService,
} from '@fomento/i-rf-logic-component-node-lib';
import { FomentoFormularioComponent } from '../../fomento.formulario/fomento.formulario.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { KeycloakService } from 'keycloak-angular';
import { FomentoJsonDatagridComponent } from '../fomento.jsondatagrid.component';
import { MatMenuModule } from '@angular/material/menu';

describe('FomentoJsonDatagridComponent', () => {
	let component: FomentoJsonDatagridComponent;
	let fixture: ComponentFixture<FomentoJsonDatagridComponent>;
	let keycloakServiceStub: Partial<KeycloakService>;

	// Mock para MatDialog
	const matDialogStub = {};

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FomentoJsonDatagridComponent],
			imports: [
				MockComponent(FomentoPaginatorComponent),
				MockComponent(FomentoFiltroColumnasTablaComponent),
				MockModule(ReactiveFormsModule),
				MockModule(MatTableModule),
				MockComponent(FomentoButtonComponent),
				MockComponent(FomentoFormularioComponent),
				MockComponent(FomentoSelectComponent),
				MockModule(MatMenuModule),
				HttpClientTestingModule,
				FomentoGestionFiltrosService,
				ApiEndpointsService,
				FomentoSelectComponent,
				MatDialogModule,
			],

			providers: [
				{ provide: MatDialog, useValue: matDialogStub },
				{ provide: 'name', useValue: 'test' },
				{ provide: KeycloakService, useValue: keycloakServiceStub },
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FomentoJsonDatagridComponent);
		component = fixture.debugElement.componentInstance;
		fixture.detectChanges();
	});

	afterEach(() => {
		jest.resetAllMocks();
	});

	describe('FomentoDatagridComponent', () => {
		describe('Ciclo de vida del componente', () => {
			describe('ngOnInit', () => {
				it('should call "initTable" if api is set to "false"', () => {
					const initTableSpy = jest.spyOn(component, 'initTable');
					//component.endpoint = ''
					component.ngOnInit();
					expect(initTableSpy).toHaveBeenCalledTimes(1);
				});
			});
			describe('ngAfterViewInit', () => {
				it('should modify "datasource" with the "sort"', () => {
					component.dataSource = new MatTableDataSource([]);
					const mock_sort = new MatSort();
					component.sort = mock_sort;
					component.ngAfterViewInit();
					expect(component.dataSource.sort).toEqual(mock_sort);
				});
			});
		});

		describe('initTable method', () => {
			it('should call TableFilter method', () => {
				const tableFilterSpy = jest.spyOn(component, 'tableFilter');
				component.initTable();
				expect(tableFilterSpy).toHaveBeenCalledTimes(1);
			});

			it('should generate "actions column"', () => {
				component.actions = true;
				component.initTable();
				expect(component.displayedColumns).toContain('acciones');
			});

			it('should generate columns correctly', () => {
				component.table_headers = [
					{ header: 'prueba', field: 'p', visible: true },
				];
				component.actions = true;
				component.multicheck = false;
				component.initTable();
				// Verificar que 'acciones' y 'p' estén presentes en displayedColumns sin preocuparse por el orden
				expect(component.displayedColumns).toContain('acciones');
				expect(component.displayedColumns).toContain('p');
			});
		});

		describe('Output event emitters', () => {

			it('should emit checkEvent', () => {
				const checkSpy = jest.spyOn(component.checkAction, 'emit');
				component.emitCheckEvent();
				expect(checkSpy).toHaveBeenCalledTimes(1);
			});

			it('should emit downloadEvent', () => {
				const downloadSpy = jest.spyOn(component.downloadAction, 'emit');
				component.emitDownloadEvent();
				expect(downloadSpy).toHaveBeenCalledTimes(1);
			});
		});

		describe('Filter control method', () => {
			describe('CleanFilter method', () => {
				it('should reset filter form', () => {
					component.table_headers = [
						{ header: 'prueba', field: 'p', visible: true },
					];
					component.initTable();
					component.formArray.value = [{ filterValue: 'Prueba' }];
					component.cleanFilterEvent();
					const res = component.formArray.value;
					expect(res).toEqual([{ filterValue: null }]);
				});
			});

			describe('SaveFilter method', () => {
				it('update filter correctly', () => {
					const filtroSeleccionado = fixture.debugElement.query(
						By.css('.fomento-select'),
					).nativeElement as HTMLSelectElement;
					filtroSeleccionado.innerText = 'hola';
					fixture.detectChanges();
					const consoleSpy = jest.spyOn(component, 'getSavedFilterEvent');
					const data = { results: [{}] };

					component.saveFilterEvent(data);
					expect(consoleSpy).toHaveBeenCalledTimes(1);
				});
			});
		});

		describe('Filter columns functionality', () => {
			describe('tableFilter method', () => {
				it('should work correctly', () => {
					const filter = function (data, filter): boolean {
						let res = true;
						const values: Array<string> = Object.values(data);
						for (let i = 0; i < filter.length; i++) {
							res =
								res &&
								(filter[i].filterValue === null
									? true
									: values[i]
											.toLowerCase()
											.includes(filter[i].filterValue.toLowerCase()));
						}
						return res;
					};

					expect(component.tableFilter().length).toEqual(filter.length);
				});

				it('should get field-value correctly', () => {
					const res = component.getFieldValue(
						[{ atributo1: { atributo2: 'prueba' } }],
						'atributo1.atributo2',
					);
					expect(res[0]).toEqual('prueba');
				});

				it('should define the correct function', () => {
					const aux = [{ filterValue: 'a' }, { filterValue: null }];
					const data1 = { nombre: 'ana', apellido: 'aaa' };
					const data2 = { nombre: 'oliver', apellido: 'b' };
					const filter = component.tableFilter();

					expect(filter(data1, aux)).toEqual(true);
					expect(filter(data2, aux)).toEqual(false);
				});

				it('should global filter correctly', () => {
					const filter = function (data, filter): boolean {
						let res = false;
						const values: Array<string> = Object.values(data);
						for (const value of values) {
							res =
								res || filter === null
									? true
									: value.toLowerCase().includes(filter.toLowerCase());
						}

						return res;
					};

					const res = component.globalFilter();
					expect(res.length).toEqual(filter.length);
				});
			});

			describe('onColumnsChange method', () => {
				it('should modify values correctly', () => {
					component.multicheck = false;
					component.actions = true;
					component.onColumnsChange([
						{ header: 'prueba', field: 'p', visible: true },
					]);
					expect(component.inputColumns).toEqual(['inputp', 'inputacciones']);
				});
			});
		});
	});

	describe('Multicheck event', () => {
		it('should update checked rows correctly', () => {
			const rowData = 'row1';
			component.rowSelected = [];
			component.isCheck(true, rowData);
			expect(component.rowSelected).toEqual(['row1']);
		});

		it('should update checked rows correctly (from checked => not checked)', () => {
			const rowData = 'row1';
			component.rowSelected = ['row1'];
			component.isCheck(false, rowData);
			expect(component.rowSelected).toEqual([]);
		});

		it('should check all boxes if click the button', () => {
			component.table_data = [{ data: 'row1' }];
			component.controlCheck(true);
			expect(component.rowSelected).toEqual(component.table_data);
		});

		it('should not check all boxes if you not check the "all" button', () => {
			component.rowSelected = ['row1'];
			component.controlCheck(false);
			expect(component.rowSelected).toEqual([]);
		});
	});
});
