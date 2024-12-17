import {
	AfterContentInit,
	Component,
	ContentChildren,
	Input,
	QueryList,
	TemplateRef,
} from '@angular/core';

@Component({
	selector: 'lib-fomento-tabs',
	templateUrl: './fomento.tabs.component.html',
	styleUrls: ['./fomento.tabs.component.scss'],
})
export class FomentoTabsComponent implements AfterContentInit {
	@ContentChildren(TemplateRef) stepContents!: QueryList<TemplateRef<unknown>>;

	tabs: { content: TemplateRef<unknown> | null }[] = [];
	@Input() label: Array<string> = [];
	@Input() typeStyle: 'matter' | 'material' = 'material';

	@Input() content = 'https://www.mocky.io/v2/5d1c6ef4340000ad67b5fd8b';
	@Input() selected = '0';

	ngAfterContentInit() {
		this.tabs = this.stepContents.map((content) => ({ content }));
	}
}
