import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class WebsocketConfig {
	//Conexión por defecto
	connectionUrl: string;
	//Broker por defecto
	broker: string;
	//Canal al que mandar mensajes por defecto
	message: string;
}
