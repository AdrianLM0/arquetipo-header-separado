// This module should consist entirely of declarations, most of them exported.
// The SharedModule may re-export other widget modules, such as CommonModule, FormsModule, and modules with the UI controls that you use most widely.
// Import the SharedModule in your feature modules, both those loaded when the app starts and those you lazy load later.

// Angular Modules
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
// Application Pipes

// Application Components
import { CustomMaterialModule } from '../shared/custom-material/custom-material.module';
import { LayoutComponent } from './componentes/layout/layout.component';
//import { IERFWebLibraryModule } from '@fomento/i-rf-web-component-node-lib';
import { IERFWebLibraryModule } from '../modules/componentes/componentes-web/components/i-rf-web-component-node-lib.module';
import { ComponentesModule } from '../modules/componentes/componentes.module';
import { MatCommonModule, MatNativeDateModule, MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSortModule } from '@angular/material/sort';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { DirectivesModule } from '@fomento/i-rf-security-component-node-lib';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTreeModule } from '@angular/material/tree';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { ComponentesRoutingModule } from '../modules/componentes/componentes-routing.module';

import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es');

@NgModule({
	declarations: [
		// Application Pipes
		LayoutComponent,
		// Application Components
	],
	exports: [
		// Angular Modules
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		// Application Components
		CustomMaterialModule,
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
		
		ComponentesModule,
		MatInputModule,
		MatFormFieldModule,
		CommonModule,
		ComponentesRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatListModule,
		MatTableModule,
		MatPaginatorModule,
		MatProgressBarModule,
		NgxMatSelectSearchModule,
		MatSelectModule,
		ReactiveFormsModule,
		MatCheckboxModule,
		MatChipsModule,
		MatDividerModule,
		MatRippleModule,
		MatExpansionModule,
		MatSidenavModule,
		MatBadgeModule,
		MatAutocompleteModule,
		MatGridListModule,
		MatButtonToggleModule,
		MatIconModule,
		MatBottomSheetModule,
		MatTreeModule,
		MatSlideToggleModule,
		MatSliderModule,
		MatSnackBarModule,
		MatDialogModule,
		FormsModule,
		DirectivesModule,
		MatOptionModule,
		MatButtonModule,
		MatMenuModule,
		//BrowserAnimationsModule,
		
		MatToolbarModule,
		
		MatTooltipModule,
		
		MatNativeDateModule,
		
		MatCardModule,
		MatTabsModule,
		
		MatStepperModule,
		MatProgressSpinnerModule,
		MatRadioModule,
		
		MatDatepickerModule,
		MatSortModule,
	
		MatCommonModule,
		
		MatDatepickerModule,
		MatNativeDateModule,
		
	],
	providers: [{ provide: LOCALE_ID, useValue: 'es' }],
	schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SharedModule {}
