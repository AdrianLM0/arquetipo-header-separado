import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoJsonDatagridComponent } from './ejemplo-fomento-jsondatagrid.component';
import { ApiEndpointsService } from '@fomento/i-rf-logic-component-node-lib';
import { HttpClientModule } from '@angular/common/http';

describe('EjemploFomentoDatagridComponent', () => {
	let component: EjemploFomentoJsonDatagridComponent;
	let fixture: ComponentFixture<EjemploFomentoJsonDatagridComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoJsonDatagridComponent],
			imports: [HttpClientModule],
			providers: [ApiEndpointsService],
		});
		fixture = TestBed.createComponent(EjemploFomentoJsonDatagridComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
