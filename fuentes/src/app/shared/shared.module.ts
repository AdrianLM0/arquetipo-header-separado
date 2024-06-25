// This module should consist entirely of declarations, most of them exported.
// The SharedModule may re-export other widget modules, such as CommonModule, FormsModule, and modules with the UI controls that you use most widely.
// Import the SharedModule in your feature modules, both those loaded when the app starts and those you lazy load later.

// Angular Modules
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
// Application Pipes

// Application Components
import { CustomMaterialModule } from '../shared/custom-material/custom-material.module';
import { LayoutComponent } from './componentes/layout/layout.component';
import { IERFWebLibraryModule } from '@fomento/i-rf-web-component-node-lib';
import { IRfLogicComponentNodeLibModule } from '@fomento/i-rf-logic-component-node-lib';

//Application Service

@NgModule({
	declarations: [
		// Application Pipes
		LayoutComponent,
		// Application Components
	],
	providers: [],
	exports: [
		// Angular Modules
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		// Application Pipes

		// Application Components
		CustomMaterialModule,
		IERFWebLibraryModule,
		IRfLogicComponentNodeLibModule,
	],
	imports: [
		// Angular Modules
		RouterModule,
		CustomMaterialModule,
		NotifierModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		IERFWebLibraryModule,
		IRfLogicComponentNodeLibModule,
		MatInputModule,
		MatFormFieldModule,
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
