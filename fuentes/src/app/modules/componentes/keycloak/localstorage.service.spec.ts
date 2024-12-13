import { LocalstorageService } from './localstorage.service';

describe('LocalstorageService', () => {
	let service: LocalstorageService;

	beforeEach(() => {
		Storage.prototype.getItem = jest.fn(() => 'testValue');

		service = new LocalstorageService('encryptionKey', ['key1', 'key2']);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should set and get values from local storage', () => {
		const setItemSpy = jest.spyOn(
			Object.getPrototypeOf(window.localStorage),
			'setItem',
		);
		const getItemSpy = jest.spyOn(
			Object.getPrototypeOf(window.localStorage),
			'getItem',
		);
		service.set('testKey', 'testValue');
		expect(setItemSpy).toHaveBeenCalledTimes(1);
		expect(setItemSpy).toHaveBeenCalledWith('testKey', 'testValue');
		service.get('testKey');
		expect(getItemSpy).toHaveBeenCalledTimes(1);
		expect(getItemSpy).toHaveBeenCalledWith('testKey');
		//expect(getItemSpy).toHaveBeenCalledWith('testKey').toEqual('testValue');
		//expect(service.get('testKey')).toEqual('testValue');
	});

	/*it('should remove values from local storage', () => {
    service.set('testKey', 'testValue');
    service.remove('testKey');
    expect(service.get('testKey')).toBeNull();
  });

  it('should return null for non-existing keys', () => {
    expect(service.get('nonExistingKey')).toBeNull();
  });*/

	// Add more test cases as needed
});
