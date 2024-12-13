import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivaPermisos } from './directivaPermisos.directive';

@NgModule({
	declarations: [DirectivaPermisos],
	imports: [CommonModule],
	exports: [DirectivaPermisos],
})
export class DirectivesModule {}
