import { Component, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-fomento-bottom-sheet',
  templateUrl: './fomento.bottom-sheet.component.html',
  styleUrls: ['./fomento.bottom-sheet.component.scss'],
  encapsulation: ViewEncapsulation.None 
})
export class FomentoBottomSheetComponent {
  @Input() label = '';
  @Input() theme = 'primary';
  @Input() icon = '';
  @Input() disabled = false;
  @Input() aria_label = '';
  @Input() disableRipple = true;

  @Output() bottomSheet = new EventEmitter<Event>(); 


  openBottomSheet(event) {
    this.bottomSheet.emit(event);
  }
}
