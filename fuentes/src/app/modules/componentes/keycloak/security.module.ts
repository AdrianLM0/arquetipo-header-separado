import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

export interface SecurityModuleConfig {
	config: Keycloak.KeycloakConfig;
	initOptions?: Keycloak.KeycloakInitOptions;
	bearerExcludedUrls?: string[];
}

@NgModule({
	imports: [KeycloakAngularModule],
	// No providers here, they will be provided via forRoot
})
export class SecurityModule {
	static forRoot(
		config: SecurityModuleConfig,
	): ModuleWithProviders<SecurityModule> {
		return {
			ngModule: SecurityModule,
			providers: [
				{
					provide: 'KEYCLOAK_CONFIG',
					useValue: config,
				},
				KeycloakService,
				{
					provide: APP_INITIALIZER,
					useFactory: kcFactory,
					deps: [KeycloakService, 'KEYCLOAK_CONFIG'],
					multi: true,
				},
			],
		};
	}
}

export function kcFactory(
	keycloakService: KeycloakService,
	config: SecurityModuleConfig,
) {
	return () =>
		keycloakService.init({
			config: config.config,
			initOptions: config.initOptions || {},
			bearerExcludedUrls: config.bearerExcludedUrls || [],
		});
}
