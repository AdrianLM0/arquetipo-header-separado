import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule, registerLocaleData } from '@angular/common';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { IERFWebLibraryModule } from '@fomento/i-rf-web-component-node-lib';
import { AppRoutingModule } from './app-routing.module';

import {
	SecurityModule,
	SecurityModuleConfig,
} from './shared/security.module';
import { FormsModule } from '@angular/forms';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es');
// Configuración específica de Keycloak para este proyecto
const keycloakConfig: SecurityModuleConfig = {
	config: {
		url: 'https://keycloak-factoria.emergyalabs.com', // Actualizado con el nuevo 'auth-server-url'
		realm: 'Reutilizacion-Proxya', // Actualizado con el nuevo 'realm'
		clientId: 'herramienta_centralizada_reutilizacion', // Actualizado con el nuevo 'resource'
	},
	initOptions: {
		onLoad: 'login-required',
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
		AppRoutingModule,
		FormsModule,

		// Configura SecurityModule con la configuración de Keycloak
		SecurityModule.forRoot(keycloakConfig),
	],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	providers: [{ provide: LOCALE_ID, useValue: 'es' }],
})
export class AppModule {}
