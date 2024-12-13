import { TestBed } from '@angular/core/testing';
import { LocalStorageModule } from './localstorage.module';
import { ENCRYPTION_KEY, ENCRYPTED_KEYS } from './storage.tokens';

describe('LocalStorageModule', () => {
	it('should provide ENCRYPTION_KEY with the given value', () => {
		const encryptionKey = 'my-super-secret-key';
		TestBed.configureTestingModule({
			imports: [LocalStorageModule.forRoot({ encryptionKey })],
		});

		const providedEncryptionKey = TestBed.inject(ENCRYPTION_KEY);
		expect(providedEncryptionKey).toEqual(encryptionKey);
	});

	it('should provide ENCRYPTED_KEYS when given', () => {
		const encryptedKeys = ['key1', 'key2'];
		TestBed.configureTestingModule({
			imports: [
				LocalStorageModule.forRoot({
					encryptionKey: 'encryptionKey',
					encryptedKeys,
				}),
			],
		});

		const providedEncryptedKeys = TestBed.inject(ENCRYPTED_KEYS);
		expect(providedEncryptedKeys).toEqual(encryptedKeys);
	});
});
