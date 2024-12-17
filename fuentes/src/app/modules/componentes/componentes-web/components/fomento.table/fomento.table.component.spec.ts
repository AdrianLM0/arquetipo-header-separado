import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomentoTableComponent } from './fomento.table.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MockComponent, MockModule } from 'ng-mocks';
import { FomentoButtonComponent } from '../fomento.button/fomento.button.component';
import { FomentoSelectComponent } from '../fomento.select/fomento.select.component';
import { FomentoPaginatorComponent } from '../fomento.paginator/fomento.paginator.component';

describe('FomentoTableComponent', () => {
	let component: FomentoTableComponent;
	let fixture: ComponentFixture<FomentoTableComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FomentoTableComponent],
			imports: [
				MockModule(MatTableModule),
				MockComponent(FomentoButtonComponent),
				MockComponent(FomentoSelectComponent),
				MockComponent(FomentoPaginatorComponent),
			],
		}).compileComponents();

		fixture = TestBed.createComponent(FomentoTableComponent);
		component = fixture.componentInstance;
	});

	describe('Ciclo de vida del componente', () => {
		describe('NgOnInit', () => {
			it('should call "initTable"', () => {
				const initSpy = jest.spyOn(component, 'initTable');
				component.ngOnInit();
				expect(initSpy).toHaveBeenCalledTimes(1);
			});
		});
		describe('NgOnChanges', () => {
			it('should call "initTable"', () => {
				const initSpy = jest.spyOn(component, 'initTable');
				component.ngOnChanges();
				expect(initSpy).toHaveBeenCalledTimes(1);
			});
		});
	});

	describe('InitTable', () => {
		it('should work properly', () => {
			const res = new MatTableDataSource(component.element_data);
			component.initTable();
			fixture.detectChanges();
			expect(component.dataSource.data).toEqual(res.data);
		});
	});
});
