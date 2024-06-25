import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDetailComponent } from './errordetail/errordetail.component';
import { ErrorRoutingModule } from './error-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
	declarations: [ErrorDetailComponent],
	imports: [CommonModule, ErrorRoutingModule, SharedModule],
})
export class ErrorModule {}
