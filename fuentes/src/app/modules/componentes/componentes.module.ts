import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesRoutingModule } from './componentes-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EjemploFomentoNavComponent } from './ejemplo-fomento-nav/ejemplo-fomento-nav.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatCommonModule, MatNativeDateModule, MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatTreeModule } from '@angular/material/tree';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FomentoBrandComponent } from './fomento.brand/fomento.brand.component';
import { FomentoButtonComponent } from './fomento.button/fomento.button.component';
import { MatButtonModule } from '@angular/material/button';
import { FomentoCabeceraComponent } from './fomento.header/fomento.header.component';
import { FomentoMenuComponent } from './fomento.menu/fomento.menu.component';
import { FomentoNavComponent } from './fomento.nav/fomento.nav.component';
import { FomentoSelectComponent } from './fomento.select/fomento.select.component';
import { FomentoUserComponent } from './fomento.user/fomento.user.component';
import { MatMenuModule } from '@angular/material/menu';
import { DirectivesModule } from './keycloak/directivaPermisos.module';
import { FomentoAlertsModule } from './fomento.alerts/fomento.alerts.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSortModule } from '@angular/material/sort';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
/*import { LocalDatePipe } from './pipes/local-date.pipe';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';


import { FomentoCardComponent } from '../componentes/componentes-web/components/fomento.card/fomento.card.component';
import { FomentoBreadcrumbComponent } from '../componentes/componentes-web/components/fomento.breadcrumb/fomento.breadcrumb.component';
import { FomentoInputComponent } from '../componentes/componentes-web/components/fomento.input/fomento.input.component';

import { FomentoLayoutComponent } from '../componentes/componentes-web/components/fomento.layout/fomento.layout.component';
import { FomentoInputGroupComponent } from '../componentes/componentes-web/components/fomento.input-group/fomento.input-group.component';
import { FomentoSpinnerComponent } from '../componentes/componentes-web/components/fomento.spinner/fomento.spinner.component';
import { FomentoStepperComponent } from '../componentes/componentes-web/components/fomento.stepper/fomento.stepper.component';
import { FomentoRadioComponent } from '../componentes/componentes-web/components/fomento.radio/fomento.radio.component';
import { FomentoCheckboxComponent } from '../componentes/componentes-web/components/fomento.checkbox/fomento.checkbox.component';
import { FomentoDialogComponent } from '../componentes/componentes-web/components/fomento.dialog/fomento.dialog.component';
import { FomentoIconComponent } from '../componentes/componentes-web/components/fomento.icon/fomento.icon.component';
import { FomentoFiltroColumnasTablaComponent } from '../componentes/componentes-web/components/fomento.filtro-columnas-tabla/fomento.filtro-columnas-tabla.component';
import { FomentoTabsComponent } from '../componentes/componentes-web/components/fomento.tabs/fomento.tabs.component';
import { FomentoProgressBarComponent } from '../componentes/componentes-web/components/fomento.progress-bar/fomento.progress-bar.component';
import { FomentoTableComponent } from '../componentes/componentes-web/components/fomento.table/fomento.table.component';
import { FomentoPaginatorComponent } from '../componentes/componentes-web/components/fomento.paginator/fomento.paginator.component';
import { FomentoTooltipComponent } from '../componentes/componentes-web/components/fomento.tooltip/fomento.tooltip.component';
import { FomentoFormFieldComponent } from '../componentes/componentes-web/components/fomento.form-field/fomento.form-field.component';
import { FomentoListComponent } from '../componentes/componentes-web/components/fomento.list/fomento.list.component';
import { FomentoChipsComponent } from '../componentes/componentes-web/components/fomento.chips/fomento.chips.component';
import { FomentoDividerComponent } from '../componentes/componentes-web/components/fomento.divider/fomento.divider.component';
import { FomentoRippleComponent } from '../componentes/componentes-web/components/fomento.ripple/fomento.ripple.component';
import { FomentoSidenavComponent } from '../componentes/componentes-web/components/fomento.sidenav/fomento.sidenav.component';
import { FomentoExpansionPanelComponent } from '../componentes/componentes-web/components/fomento.expansion-panel/fomento.expansion-panel.component';
import { FomentoAutocompleteComponent } from '../componentes/componentes-web/components/fomento.autocomplete/fomento.autocomplete.component';
import { FomentoBadgeComponent } from '../componentes/componentes-web/components/fomento.badge/fomento.badge.component';

import { FomentoGridListComponent } from '../componentes/componentes-web/components/fomento.grid-list/fomento.grid-list.component';
import { FomentoButtonToggleComponent } from '../componentes/componentes-web/components/fomento.button-toggle/fomento.button-toggle.component';

import { FomentoTreeComponent } from '../componentes/componentes-web/components/fomento.tree/fomento.tree.component';
import { FomentoSlideToggleComponent } from '../componentes/componentes-web/components/fomento.slide-toggle/fomento.slide-toggle.component';

import { FomentoSliderComponent } from '../componentes/componentes-web/components/fomento.slider/fomento.slider.component';
import { FomentoSnackbarComponent } from '../componentes/componentes-web/components/fomento.snackbar/fomento.snackbar.component';
import { FomentoDisclaimerComponent } from '../componentes/componentes-web/components/fomento.disclaimer/fomento.disclaimer.component';

//import { FomentoNotificacionesComponent } from '../componentes/componentes-web/components/fomento.notificaciones/fomento.notificaciones.component';
//import { FomentoPropagarcambiosseguridadComponent } from '../componentes/componentes-web/components/fomento.propagarcambiosseguridad/fomento.propagarcambiosseguridad.component';
*/
@NgModule({
	declarations: [
		
		EjemploFomentoNavComponent,
		FomentoBrandComponent,
		FomentoButtonComponent,
		FomentoCabeceraComponent,
		FomentoMenuComponent,
		FomentoNavComponent,
		FomentoSelectComponent,
		FomentoUserComponent,
	//	LocalDatePipe,
	//	SanitizeHtmlPipe,

	],
	//exports:[
		//LocalDatePipe,
		//SanitizeHtmlPipe],
	imports: [
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
		MatIconModule,
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
		FomentoAlertsModule
	],

	
	providers: [{ provide: LOCALE_ID, useValue: 'es' }],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentesModule {}
