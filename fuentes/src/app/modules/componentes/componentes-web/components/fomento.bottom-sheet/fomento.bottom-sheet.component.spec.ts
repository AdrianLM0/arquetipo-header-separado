import { FomentoBottomSheetComponent } from './fomento.bottom-sheet.component';

describe('FomentoBottomSheetComponent', () => {
	let component: FomentoBottomSheetComponent;

	beforeEach(() => {
		component = new FomentoBottomSheetComponent();
	});

	it('should emit an event when openBottomSheet is called', () => {
		const eventData = { some: 'data' };
		const emitSpy = jest.spyOn(component.bottomSheet, 'emit');

		component.openBottomSheet(eventData);

		expect(emitSpy).toHaveBeenCalledWith(eventData);
	});
});
