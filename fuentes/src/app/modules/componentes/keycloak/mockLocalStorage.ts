const mockGetItem = jest.fn();
const mockSetItem = jest.fn();
const mockRemoveItem = jest.fn();
Object.defineProperty(window, 'localStorage', {
	value: {
		getItem: (...args: string[]) => mockGetItem(...args),
		setItem: (...args: string[]) => mockSetItem(...args),
		removeItem: (...args: string[]) => mockRemoveItem(...args),
	},
});
