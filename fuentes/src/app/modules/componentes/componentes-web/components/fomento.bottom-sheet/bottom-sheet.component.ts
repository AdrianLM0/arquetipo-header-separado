import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: 'bottom-sheet.html',
  styleUrls: ['./bottom-sheet.scss'], 

})
export class BottomSheetOverviewExampleComponent {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: { links: Array<{ title: string; url: string; subtitle?: string }> }
  ) {}

  openLink(event: MouseEvent, url: string): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
    setTimeout(() => {
      window.location.href = url;
    }, 300);
  }
}
