import { Injectable, Inject, Optional } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { ENCRYPTION_KEY, ENCRYPTED_KEYS } from './storage.tokens';

@Injectable({
	providedIn: 'root',
})
export class LocalstorageService {
	private localStorage: Storage = window.localStorage;
	private encryptionKey: string;
	private encryptedKeys: string[];

	constructor(
		@Inject(ENCRYPTION_KEY) encryptionKey: string,
		@Optional() @Inject(ENCRYPTED_KEYS) encryptedKeys: string[] = [],
	) {
		this.encryptionKey = encryptionKey;
		this.encryptedKeys = encryptedKeys;
	}

	get(key: string) {
		if (!this.isLocalStorageSupported) {
			return null;
		}

		let item = this.localStorage.getItem(key);
		if (!item) {
			return null;
		}

		if (this.encryptedKeys.includes(key)) {
			const bytes = CryptoJS.AES.decrypt(item, this.encryptionKey);
			item = bytes.toString(CryptoJS.enc.Utf8);
		}

		try {
			return JSON.parse(item);
		} catch {
			return null;
		}
	}

	set(key: string, value): boolean {
		if (!this.isLocalStorageSupported) {
			return false;
		}

		let item = value;
		if (typeof value !== 'string') {
			item = JSON.stringify(value);
		}

		if (this.encryptedKeys.includes(key)) {
			item = CryptoJS.AES.encrypt(item, this.encryptionKey).toString();
		}

		this.localStorage.setItem(key, item);
		return true;
	}

	remove(key: string): boolean {
		if (!this.isLocalStorageSupported) {
			return false;
		}

		this.localStorage.removeItem(key);
		return true;
	}

	get isLocalStorageSupported(): boolean {
		return !!this.localStorage;
	}
}
