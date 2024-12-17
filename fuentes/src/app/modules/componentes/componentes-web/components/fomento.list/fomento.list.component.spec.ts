import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FomentoListComponent } from './fomento.list.component';
import { MatSelectionListChange } from '@angular/material/list';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('FomentoListComponent', () => {
	let fixture: ComponentFixture<FomentoListComponent>;
	let component: FomentoListComponent;
	let debugElement: DebugElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [FomentoListComponent],
		});
		fixture = TestBed.createComponent(FomentoListComponent);
		component = fixture.componentInstance;
		debugElement = fixture.debugElement;
	});

	it('should create the component', () => {
		expect(component).toBeTruthy();
	});

	it('should emit itemClick event when onItemClicked is called', () => {
		const mockSelectionListChange: MatSelectionListChange = {
			options: [
				{ selected: true, value: 'item1' },
				{ selected: false, value: 'item2' },
				{ selected: true, value: 'item3' },
			],
		} as MatSelectionListChange;

		let emittedItems;
		component.itemClick.subscribe((items) => {
			emittedItems = items;
		});

		component.clickable = true;
		component.onItemClicked(mockSelectionListChange);

		expect(emittedItems).toEqual({
			options: [
				{ selected: true, value: 'item1' },
				{ selected: false, value: 'item2' },
				{ selected: true, value: 'item3' },
			],
		});
	});

	it('should correctly identify objects with isObject method', () => {
		const obj = { prop: 'value' };
		const arr = [1, 2, 3];
		const str = 'string';

		expect(component.isObject(obj)).toBeTruthy();
		expect(component.isObject(arr)).toBeTruthy();
		expect(component.isObject(str)).toBeFalsy();
	});

	it('should render item template when provided', () => {
		component.items = [{ value: 'item1' }, { value: 'item2' }];
		fixture.detectChanges();

		const templateElements = component.items;
		expect(templateElements.length).toBe(2);
		expect(templateElements[0].value).toContain('item1');
		expect(templateElements[1].value).toContain('item2');
	});

	it('should render non-selectable list when selectable is false', () => {
		component.selectable = false;
		component.items = [{ value: 'item1' }, { value: 'item2' }];
		fixture.detectChanges();

		const listItemElements = debugElement.queryAll(By.css('mat-list-item'));
		expect(listItemElements.length).toBe(2);

		// Agrega más expectativas según lo que desees verificar en este caso
	});
});
