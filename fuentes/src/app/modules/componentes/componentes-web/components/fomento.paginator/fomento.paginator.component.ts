import { Component, Optional, Inject, ChangeDetectorRef } from '@angular/core';
import {
    MatPaginatorDefaultOptions,
    MAT_PAGINATOR_DEFAULT_OPTIONS,
    MatPaginatorIntl,
    _MatPaginatorBase,
    PageEvent,
} from '@angular/material/paginator';

@Component({
    selector: 'lib-fomento-paginator',
    templateUrl: './fomento.paginator.component.html',
    styleUrls: ['./fomento.paginator.component.scss'],
})
export class FomentoPaginatorComponent extends _MatPaginatorBase<MatPaginatorDefaultOptions> {

    private changeDetectorRef;

    constructor(
        intl: MatPaginatorIntl,
        changeDetectorRef: ChangeDetectorRef,
        @Optional()
        @Inject(MAT_PAGINATOR_DEFAULT_OPTIONS)
        defaults?: MatPaginatorDefaultOptions,
    ) {
        super(intl, changeDetectorRef, defaults);
        this.pageSize = this.pageSizeOptions[0];
        changeDetectorRef = changeDetectorRef;
    }

    onPageSizeChange(newPageSize: number): void {
        this.pageSize = newPageSize;
        this.pageIndex = 0;
        this.emitPageEvent(this.pageIndex);
        this.changeDetectorRef.markForCheck();
        this.changeDetectorRef.detectChanges(); 
    }

    emitPageEvent(nextPage: number) {
        this.pageIndex = nextPage;
        this.page.emit({
          pageIndex: this.pageIndex,
          pageSize: this.pageSize,
          length: this.length
        } as PageEvent);  // Emitir un evento PageEvent
    }

}