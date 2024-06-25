import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
	selector: 'app-ejemplo-fomento-sidenav',
	templateUrl: './ejemplo-fomento-sidenav.component.html',
	styleUrls: ['./ejemplo-fomento-sidenav.component.scss'],
})
export class EjemploFomentoSidenavComponent implements OnDestroy {
	//Propiedades de mat-sidenav-container
	autosize = true;
	hasBackdrop = false;

	//Propiedades de mat-sidenav
	fixedBottomGap: number;
	fixedToGap: number;
	fixedInViewport = false;
	mode: MatDrawerMode = 'side';
	opened = true;
	position: 'end' | 'start' = 'start';

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
}
