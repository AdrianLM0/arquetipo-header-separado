import { Inject, Injectable, OnDestroy, Optional } from '@angular/core';
import { CompatClient, Stomp, StompSubscription } from '@stomp/stompjs';
import { WebsocketConfig } from './websocket-config.interface';

export type ListenerCallBack<T> = (message: T) => void;

@Injectable()
export class WebsocketService<T> implements OnDestroy {
	private connection: CompatClient | undefined = undefined;
	private subscription: StompSubscription | undefined;

	//TODO: Conexión segura
	constructor(private config: WebsocketConfig) {
		this.connection = Stomp.client(this.config.connectionUrl);
		this.connection.connect({}, () => {});
	}

	public send(message: T): void {
		if (this.connection && this.connection.connected) {
			this.connection.send(this.config.message, {}, JSON.stringify(message));
		}
	}

	public listen(fun: ListenerCallBack<T>): void {
		//TODO: Bearer token y refresco del token para conexión
		if (this.connection) {
			this.connection.connect({}, () => {
				this.subscription = this.connection.subscribe(
					this.config.broker,
					(message) => fun(JSON.parse(message.body)),
				);
			});
		}
	}

	ngOnDestroy(): void {
		if (this.subscription) {
			this.subscription.unsubscribe();
		}
	}
}
