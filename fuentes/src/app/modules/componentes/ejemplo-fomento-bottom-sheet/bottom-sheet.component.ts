import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

@Component({
	selector: 'app-bottom-sheet',
	templateUrl: 'bottom-sheet.html',
	standalone: true,
	imports: [MatListModule],
})
export class BottomSheetOverviewExampleComponent {
	constructor(
		private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleComponent>,
	) {}

	openLink(event: MouseEvent, url: string): void {
		this._bottomSheetRef.dismiss();
		event.preventDefault();

		setTimeout(() => {
			window.location.href = url;
		}, 300);
		event.preventDefault();
	}
}
