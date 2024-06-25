import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploFomentoDatagridComponent } from './ejemplo-fomento-datagrid.component';
import { ApiEndpointsService } from '@fomento/i-rf-logic-component-node-lib';
import { HttpClientModule } from '@angular/common/http';

describe('EjemploFomentoDatagridComponent', () => {
	let component: EjemploFomentoDatagridComponent;
	let fixture: ComponentFixture<EjemploFomentoDatagridComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EjemploFomentoDatagridComponent],
			imports: [HttpClientModule],
			providers: [ApiEndpointsService],
		});
		fixture = TestBed.createComponent(EjemploFomentoDatagridComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
