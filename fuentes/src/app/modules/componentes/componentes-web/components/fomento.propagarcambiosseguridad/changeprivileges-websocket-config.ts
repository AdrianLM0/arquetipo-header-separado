import { Injectable } from '@angular/core';
import { WebsocketConfig } from '../fomento.websockets/websocket-config.interface';
@Injectable({
	providedIn: 'root',
})
export class ChangePrivilegesWebsocketConfig implements WebsocketConfig {
	broker: string = '/topic/changeprivileges';
	message: string = '/app/eventchangeprivileges';
	connectionUrl: string = 'ws://localhost:8085/ws';

	aplicativo: string;
	baseUrl: string;
	customPath?: string;
}
