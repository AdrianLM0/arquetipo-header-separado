import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FomentoTreeComponent, TreeNode } from './fomento.tree.component';
import { SimpleChange } from '@angular/core';

describe('FomentoTreeComponent', () => {
	let component: FomentoTreeComponent;
	let fixture: ComponentFixture<FomentoTreeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FomentoTreeComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FomentoTreeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should set data to dataSource on ngOnChanges', () => {
		const mockData: TreeNode[] = [
			{ name: 'Node 1', children: [{ name: 'Child 1' }, { name: 'Child 2' }] },
			{ name: 'Node 2' },
		];

		component.data = mockData;
		const mockChange = { data: new SimpleChange(component.data, true, true) };
		component.ngOnChanges(mockChange);

		expect(component.dataSource.data).toMatchObject(mockData);
	});

	it('should return correct value from hasChild method', () => {
		const node = { expandable: true, name: 'Node', level: 0 };
		expect(component.hasChild(0, node)).toBe(true);

		const leaf = { expandable: false, name: 'Leaf', level: 0 };
		expect(component.hasChild(0, leaf)).toBe(false);
	});
});
