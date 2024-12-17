import {
	NgModule,
	CUSTOM_ELEMENTS_SCHEMA,
	NO_ERRORS_SCHEMA,
	LOCALE_ID,
} from '@angular/core';
import { IREFWebComponentNodeLibComponent } from './i-rf-web-component-node-lib.component';
import { SanitizeHtmlPipe } from '../../../componentes/pipes/sanitize-html.pipe';
import { LocalDatePipe } from '../../../componentes/pipes/local-date.pipe';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSortModule } from '@angular/material/sort';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTreeModule } from '@angular/material/tree';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { registerLocaleData } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCommonModule } from '@angular/material/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatNativeDateModule } from '@angular/material/core';

import localeEs from '@angular/common/locales/es';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { FomentoCardComponent } from './fomento.card/fomento.card.component';
import { FomentoBreadcrumbComponent } from './fomento.breadcrumb/fomento.breadcrumb.component';
import { FomentoInputComponent } from './fomento.input/fomento.input.component';

import { FomentoLayoutComponent } from './fomento.layout/fomento.layout.component';
import { FomentoInputGroupComponent } from './fomento.input-group/fomento.input-group.component';
import { FomentoSpinnerComponent } from './fomento.spinner/fomento.spinner.component';
import { FomentoStepperComponent } from './fomento.stepper/fomento.stepper.component';
import { FomentoRadioComponent } from './fomento.radio/fomento.radio.component';
import { FomentoCheckboxComponent } from './fomento.checkbox/fomento.checkbox.component';
import { FomentoDialogComponent } from './fomento.dialog/fomento.dialog.component';
import { FomentoIconComponent } from './fomento.icon/fomento.icon.component';
import { FomentoFiltroColumnasTablaComponent } from './fomento.filtro-columnas-tabla/fomento.filtro-columnas-tabla.component';
import { FomentoTabsComponent } from './fomento.tabs/fomento.tabs.component';
import { FomentoProgressBarComponent } from './fomento.progress-bar/fomento.progress-bar.component';
import { FomentoTableComponent } from './fomento.table/fomento.table.component';
import { FomentoPaginatorComponent } from './fomento.paginator/fomento.paginator.component';
import { FomentoTooltipComponent } from './fomento.tooltip/fomento.tooltip.component';
import { FomentoFormFieldComponent } from './fomento.form-field/fomento.form-field.component';
import { FomentoListComponent } from './fomento.list/fomento.list.component';
import { FomentoChipsComponent } from './fomento.chips/fomento.chips.component';
import { FomentoDividerComponent } from './fomento.divider/fomento.divider.component';
import { FomentoRippleComponent } from './fomento.ripple/fomento.ripple.component';
import { FomentoSidenavComponent } from './fomento.sidenav/fomento.sidenav.component';
import { FomentoExpansionPanelComponent } from './fomento.expansion-panel/fomento.expansion-panel.component';
import { FomentoAutocompleteComponent } from './fomento.autocomplete/fomento.autocomplete.component';
import { FomentoBadgeComponent } from './fomento.badge/fomento.badge.component';

import { FomentoGridListComponent } from './fomento.grid-list/fomento.grid-list.component';
import { FomentoButtonToggleComponent } from './fomento.button-toggle/fomento.button-toggle.component';

import { FomentoTreeComponent } from './fomento.tree/fomento.tree.component';
import { FomentoSlideToggleComponent } from './fomento.slide-toggle/fomento.slide-toggle.component';

import { FomentoSliderComponent } from './fomento.slider/fomento.slider.component'
import { FomentoSnackbarComponent } from './fomento.snackbar/fomento.snackbar.component';
import { FomentoDisclaimerComponent } from './fomento.disclaimer/fomento.disclaimer.component';

import { FomentoNotificacionesComponent } from './fomento.notificaciones/fomento.notificaciones.component';
import { FomentoPropagarcambiosseguridadComponent } from './fomento.propagarcambiosseguridad/fomento.propagarcambiosseguridad.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FomentoFormularioComponent } from './fomento.formulario/fomento.formulario.component';
import { FomentoJsonDatagridComponent } from './fomento.datagrid/fomento.jsondatagrid.component';
import { FomentoButtonComponent } from './fomento.button/fomento.button.component';
import { FomentoDatagridComponent } from './fomento.datagrid/fomento.datagrid.component';
import { FomentoBottomSheetComponent } from './fomento.bottom-sheet/fomento.bottom-sheet.component';
import { FomentoToolbarComponent } from './fomento.toolbar/fomento.toolbar.component';
import { FomentoSelectComponent } from './fomento.select/fomento.select.component';
import { FomentoFooterComponent } from './fomento.footer/fomento.footer.component';
import { FomentoAlertsModule } from './fomento.alerts/fomento.alerts.module';
import { FomentoUserComponent } from './fomento.user/fomento.user.component';
import { FomentoNavComponent } from './fomento.nav/fomento.nav.component';
import { FomentoMenuComponent } from './fomento.menu/fomento.menu.component';
import { FomentoCabeceraComponent } from './fomento.header/fomento.header.component';
import { FomentoBrandComponent } from './fomento.brand/fomento.brand.component';


/* import '@matter/matter-header/dist/matter-header';
import '@matter/matter-brand/dist/matter-brand';
import '@matter/matter-button/dist/matter-button';
import '@matter/matter-header/dist/matter-header';
import '@matter/matter-footer/dist/matter-footer';
import '@matter/matter-input/dist/matter-input';
import '@matter/matter-card/dist/matter-card';
import '@matter/matter-icon/dist/matter-icon';
import '@matter/matter-input-group/dist/matter-input-group';
import '@matter/matter-checkbox/dist/matter-checkbox';
import '@matter/matter-progress/dist/matter-progress';
import '@matter/matter-dropdown/dist/matter-dropdown';
import '@matter/matter-radio-button/dist/matter-radio-button';
import '@matter/matter-tabs/dist/matter-tabs'; */

registerLocaleData(localeEs, 'es');

@NgModule({
	declarations: [
		IREFWebComponentNodeLibComponent,
		SanitizeHtmlPipe,
		LocalDatePipe,
		FomentoBrandComponent,
		FomentoCabeceraComponent,
		FomentoMenuComponent,
		FomentoUserComponent,
		FomentoNavComponent,
		FomentoCardComponent,
		FomentoBreadcrumbComponent,
		FomentoInputComponent,
		FomentoFooterComponent,
		FomentoLayoutComponent,
		FomentoButtonComponent,
		FomentoInputGroupComponent,
		FomentoSpinnerComponent,
		FomentoStepperComponent,
		FomentoRadioComponent,
		FomentoCheckboxComponent,
		FomentoSelectComponent,
		FomentoDialogComponent,
		FomentoIconComponent,
		FomentoFiltroColumnasTablaComponent,
		FomentoTabsComponent,
		FomentoProgressBarComponent,
		FomentoTableComponent,
		FomentoPaginatorComponent,
		FomentoTooltipComponent,
		FomentoFormFieldComponent,
		FomentoListComponent,
		FomentoChipsComponent,
		FomentoDividerComponent,
		FomentoRippleComponent,
		FomentoSidenavComponent,
		FomentoExpansionPanelComponent,
		FomentoAutocompleteComponent,
		FomentoBadgeComponent,
		FomentoToolbarComponent,
		FomentoGridListComponent,
		FomentoButtonToggleComponent,
		FomentoBottomSheetComponent,
		FomentoTreeComponent,
		FomentoSlideToggleComponent,
		FomentoDatagridComponent,
		FomentoSliderComponent,
		FomentoSnackbarComponent,
		FomentoDisclaimerComponent,
		FomentoButtonComponent,
		FomentoFormularioComponent,
		FomentoJsonDatagridComponent,
		
		FomentoNotificacionesComponent,
		FomentoPropagarcambiosseguridadComponent,
	],
	imports: [
		CommonModule,
		MatToolbarModule,
		MatMenuModule,
		MatButtonModule,
		MatTooltipModule,
		MatFormFieldModule,
		MatInputModule,
		MatNativeDateModule,
		MatIconModule,
		MatCardModule,
		MatTabsModule,
		MatTableModule,
		MatPaginatorModule,
		MatProgressBarModule,
		MatStepperModule,
		MatProgressSpinnerModule,
		MatRadioModule,
		MatSelectModule,
		MatCheckboxModule,
		MatDialogModule,
		MatDatepickerModule,
		MatSortModule,
		FormsModule,
		FomentoAlertsModule,
		MatListModule,
		MatTableModule,
		MatCommonModule,
		DragDropModule,
		ReactiveFormsModule,
		MatRippleModule,
		MatChipsModule,
		MatDividerModule,
		MatExpansionModule,
		MatAutocompleteModule,
		MatRippleModule,
		MatBadgeModule,
		MatExpansionModule,
		MatSidenavModule,
		MatGridListModule,
		MatButtonToggleModule,
		MatBottomSheetModule,
		MatTreeModule,
		MatSlideToggleModule,
		MatSliderModule,
		MatSnackBarModule,
		MatDatepickerModule,
		MatNativeDateModule,
		ReactiveFormsModule,
		MatBottomSheetModule
	],
	exports: [
		IREFWebComponentNodeLibComponent,
		FomentoBrandComponent,
		FomentoCabeceraComponent,
		FomentoMenuComponent,
		FomentoNavComponent,
		FomentoUserComponent,
		FomentoAlertsModule,
		FomentoCardComponent,
		FomentoBreadcrumbComponent,
		FomentoInputComponent,
		FomentoFooterComponent,
		FomentoLayoutComponent,
		FomentoButtonComponent,
		FomentoInputGroupComponent,
		FomentoSpinnerComponent,
		FomentoStepperComponent,
		FomentoRadioComponent,
		FomentoCheckboxComponent,
		FomentoSelectComponent,
		FomentoDialogComponent,
		FomentoIconComponent,
		FomentoTabsComponent,
		FomentoProgressBarComponent,
		FomentoTableComponent,
		FomentoPaginatorComponent,
		FomentoFiltroColumnasTablaComponent,
		FomentoListComponent,
		FomentoChipsComponent,
		FomentoDividerComponent,
		FomentoRippleComponent,
		FomentoExpansionPanelComponent,
		FomentoAutocompleteComponent,
		FomentoBadgeComponent,
		FomentoSidenavComponent,
		FomentoToolbarComponent,
		FomentoGridListComponent,
		FomentoTooltipComponent,
		FomentoFormFieldComponent,
		FomentoButtonToggleComponent,
		FomentoBottomSheetComponent,
		FomentoTreeComponent,
		FomentoSlideToggleComponent,
		FomentoDatagridComponent,
		FomentoSliderComponent,
		FomentoSnackbarComponent,
		FomentoDisclaimerComponent,
		FomentoButtonComponent,
		FomentoJsonDatagridComponent,
		FomentoFormularioComponent,
		FomentoNotificacionesComponent,
		FomentoPropagarcambiosseguridadComponent,
	],
	providers: [{ provide: LOCALE_ID, useValue: 'es' }],
	schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class IERFWebLibraryModule {}
