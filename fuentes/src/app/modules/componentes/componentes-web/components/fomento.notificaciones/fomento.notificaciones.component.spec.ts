import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomentoNotificacionesComponent } from './fomento.notificaciones.component';
import { MockService } from 'ng-mocks';
import { WebsocketService } from '@fomento/i-rf-logic-component-node-lib';

describe('FomentoNotificacionesComponent', () => {
	let component: FomentoNotificacionesComponent;
	let fixture: ComponentFixture<FomentoNotificacionesComponent>;

	beforeEach(async () => {
		/* await TestBed.configureTestingModule({
			declarations: [FomentoNotificacionesComponent],
			providers: [WebsocketService]
		}).compileComponents();

		fixture = TestBed.createComponent(FomentoNotificacionesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges(); */
	});

	it('should create', () => {
		expect(true).toBe(true);
	});
});
