import { Injectable } from '@angular/core';
import { WebsocketConfig } from '@fomento/i-rf-logic-component-node-lib/lib/components/fomento.websockets/websocket-config.interface';

@Injectable({
	providedIn: 'root',
})
export class NotificationWebsocketConfig implements WebsocketConfig {
	broker: string = '/topic/notification';
	message: string = '/app/message';
	connectionUrl: string = 'ws://localhost:8085/ws';
}
