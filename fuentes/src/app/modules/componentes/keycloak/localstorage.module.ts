import { NgModule, ModuleWithProviders } from '@angular/core';
import { LocalstorageService } from './localstorage.service';
import { ENCRYPTION_KEY, ENCRYPTED_KEYS } from './storage.tokens';

@NgModule({})
export class LocalStorageModule {
	static forRoot(config: {
		encryptionKey: string;
		encryptedKeys?: string[];
	}): ModuleWithProviders<LocalStorageModule> {
		return {
			ngModule: LocalStorageModule,
			providers: [
				{
					provide: ENCRYPTION_KEY,
					useValue: config.encryptionKey,
				},
				{
					provide: ENCRYPTED_KEYS,
					useValue: config.encryptedKeys || [],
				},
				LocalstorageService,
			],
		};
	}
}
