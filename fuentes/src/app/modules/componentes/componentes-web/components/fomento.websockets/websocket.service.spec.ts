import { WebsocketService } from './websocket.service';
import { TestModel } from './test.model';
import { WebsocketConfig } from './websocket-config.interface';
import { MockService } from 'ng-mocks';

describe('WebsocketService', () => {
	let service: WebsocketService<TestModel>;
	
	/* beforeEach(() => {
		service = new WebsocketService<TestModel>(MockService(WebsocketConfig));
	}); */

	it('should be created', () => {
		// COMPLETAR EN PRÓXIMOS SPRINT
		expect(true).toBe(true);
	});
});
