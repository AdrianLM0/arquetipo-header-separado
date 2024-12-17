import { ChangeDetectorRef, Component, Input, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
	selector: 'lib-fomento-sidenav',
	templateUrl: './fomento.sidenav.component.html',
	styleUrls: ['./fomento.sidenav.component.scss'],
})
export class FomentoSidenavComponent implements OnDestroy {
	//Propiedades de mat-sidenav-container
	@Input() autosize = true;
	@Input() hasBackdrop: boolean;

	//Propiedades de mat-sidenav
	@Input() fixedBottomGap: number;
	@Input() fixedToGap: number;
	@Input() fixedInViewport = true;
	@Input() mode: MatDrawerMode = 'side';
	@Input() opened = true;
	@Input() position: 'end' | 'start' = 'start';
	@Input() title: string;
	@Input() toolbarColor = 'default'; // Color de fondo del toolbar
	@Input() iconColor = 'default'; // Color de los iconos
	@Input() textColor = 'default'; // Color del texto
	@Input() sidenavTop = '0rem';

	fillerNav = Array.from({ length: 5 }, (_, i) => `Nav Item ${i + 1}`);

	fillerContent = Array.from(
		{ length: 1 },
		() =>
			`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
	);

	mobileQuery: MediaQueryList;

	private _mobileQueryListener: () => void;

	constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);
	}

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}

	onIconsClick($event) {
		switch ($event) {
			case 'snavtoggle':
				console.log('case snavtoggle');
				break;
		}
	}
}
