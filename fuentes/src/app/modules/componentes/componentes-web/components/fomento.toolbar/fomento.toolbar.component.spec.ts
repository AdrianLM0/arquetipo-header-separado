import { FomentoToolbarComponent } from './fomento.toolbar.component';

describe('FomentoToolbarComponent', () => {
	let component: FomentoToolbarComponent;

	beforeEach(() => {
		component = new FomentoToolbarComponent();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should handle icon click and emit the expected action', () => {
		const mockAction = jest.fn();
		component.iconActions = [mockAction];

		// Se suscribe al EventEmitter para capturar el valor emitido
		let emittedValue = null;
		component.emittEvent.subscribe((action) => (emittedValue = action));

		component.onIconClick(0);

		// Verifica que el valor emitido sea igual al mockAction
		expect(emittedValue).toBe(mockAction);
	});

	it('should not fail if icon action is undefined', () => {
		expect(() => component.onIconClick(0)).not.toThrow();
	});

	it('should have default color values', () => {
		expect(component.toolbarColor).toBe('default');
		expect(component.iconColor).toBe('default');
		expect(component.textColor).toBe('default');
	});

	it('should accept input values', () => {
		component.title = 'Test Title';
		component.toolbarColor = 'red';
		component.iconColor = 'blue';
		component.textColor = 'green';

		expect(component.title).toBe('Test Title');
		expect(component.toolbarColor).toBe('red');
		expect(component.iconColor).toBe('blue');
		expect(component.textColor).toBe('green');
	});
});
