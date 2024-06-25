// Create a CoreModule with providers for the singleton services you load when the application starts.
// Import CoreModule in the root AppModule only. Never import CoreModule in any other module.
// Consider making CoreModule a pure services module with no declarations.

// Angular Modules
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application Interceptors
import { HttpClientModule } from '@angular/common/http';

// Application Services

// Application Utilities

// Application Factories

// Application Guards

@NgModule({
	imports: [
		// Angular Modules
		CommonModule,
		HttpClientModule,
	],
	providers: [],
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error(
				'CoreModule is already loaded. Import it in the AppModule only',
			);
		}
	}
}
