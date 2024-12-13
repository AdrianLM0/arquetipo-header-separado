import { InjectionToken } from '@angular/core';

export const ENCRYPTION_KEY = new InjectionToken<string>('ENCRYPTION_KEY');
export const ENCRYPTED_KEYS = new InjectionToken<string[]>('ENCRYPTED_KEYS');
