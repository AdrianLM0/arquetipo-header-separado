import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent, MockComponents } from 'ng-mocks';
import { MatPaginator } from '@angular/material/paginator';
import { FomentoButtonComponent } from '../fomento.button/fomento.button.component';
import { MatIcon } from '@angular/material/icon';
import { MatFormField } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { FomentoPaginatorComponent } from './fomento.paginator.component';

describe('FomentoPaginatorComponent', () => {
	let component: FomentoPaginatorComponent;
	let fixture: ComponentFixture<FomentoPaginatorComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				FomentoPaginatorComponent,
				MockComponent(MatPaginator),
				MockComponents(
					FomentoButtonComponent,
					MatIcon,
					MatFormField,
					MatSelect,
				),
			],
		}).compileComponents();

		fixture = TestBed.createComponent(FomentoPaginatorComponent);
		component = fixture.componentInstance;
	});

	it('should change page correctly', () => {
		component.emitPageEvent(2);
		fixture.detectChanges();
		expect(component.pageIndex).toEqual(2);
	});
});
