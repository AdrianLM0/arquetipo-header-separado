import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IERFWebLibraryModule } from '@fomento/i-rf-web-component-node-lib';
import { AppRoutingModule } from './app-routing.module';

import {
	SecurityModule,
	SecurityModuleConfig,
} from '@fomento/i-rf-security-component-node-lib';
import { FormsModule } from '@angular/forms';

// Configuración específica de Keycloak para este proyecto
const keycloakConfig: SecurityModuleConfig = {
	config: {
		url: 'https://keycloak-factoria.emergyalabs.com', // Actualizado con el nuevo 'auth-server-url'
		realm: 'Reutilizacion-Proxya', // Actualizado con el nuevo 'realm'
		clientId: 'herramienta_centralizada_reutilizacion', // Actualizado con el nuevo 'resource'
	},
	initOptions: {
		//onLoad: 'login-required',
		checkLoginIframe: true,
 		checkLoginIframeInterval: 25
	},
};

@NgModule({
	declarations: [AppComponent],
	imports: [
		// Angular Modules
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		// Application Modules
		CoreModule,
		SharedModule,
		IERFWebLibraryModule,
		AppRoutingModule,
		FormsModule,

		// Configura SecurityModule con la configuración de Keycloak
		SecurityModule.forRoot(keycloakConfig),
	],
	providers: [],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
