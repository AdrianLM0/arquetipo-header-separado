import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
	MatTreeFlatDataSource,
	MatTreeFlattener,
} from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';

export interface TreeNode {
	name: string;
	children?: TreeNode[];
}

export interface ExampleFlatNode {
	expandable: boolean;
	name: string;
	level: number;
}

@Component({
	selector: 'lib-fomento-tree',
	templateUrl: './fomento.tree.component.html',
	styleUrls: ['./fomento.tree.component.scss'],
})
export class FomentoTreeComponent implements OnChanges {
	@Input() data = [];

	ngOnChanges(changes: SimpleChanges): void {
		console.log(changes);
		if (changes['data']) {
			this.dataSource.data = this.data;
		}
	}

	private _transformer(node: TreeNode, level: number) {
		return {
			expandable: !!node.children && node.children.length > 0,
			name: node.name,
			level: level,
		};
	}

	treeControl = new FlatTreeControl<ExampleFlatNode>(
		(node) => node.level,
		(node) => node.expandable,
	);

	treeFlattener = new MatTreeFlattener(
		this._transformer,
		(node) => node.level,
		(node) => node.expandable,
		(node) => node.children,
	);

	hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

	dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
}
