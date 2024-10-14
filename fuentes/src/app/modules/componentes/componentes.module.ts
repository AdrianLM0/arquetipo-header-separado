import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesRoutingModule } from './componentes-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { EjemploFomentoBrandComponent } from './ejemplo-fomento-brand/ejemplo-fomento-brand.component';
import { EjemploFomentoButtonComponent } from './ejemplo-fomento-button/ejemplo-fomento-button.component';
import { EjemploFomentoNavComponent } from './ejemplo-fomento-nav/ejemplo-fomento-nav.component';
import { EjemploFomentoInputComponent } from './ejemplo-fomento-input/ejemplo-fomento-input.component';
import { EjemploFomentoAlertaComponent } from './ejemplo-fomento-alerta/ejemplo-fomento-alerta.component';
import { FomentoAlertsModule } from '@fomento/i-rf-web-component-node-lib';
import { EjemploFomentoCardComponent } from './ejemplo-fomento-card/ejemplo-fomento-card.component';
import { EjemploFomentoBreadcrumbComponent } from './ejemplo-fomento-breadcrumb/ejemplo-fomento-breadcrumb.component';
import { EjemploFomentoStepperComponent } from './ejemplo-fomento-stepper/ejemplo-fomento-stepper.component';
import { EjemploFomentoCheckboxComponent } from './ejemplo-fomento-checkbox/ejemplo-fomento-checkbox.component';
import { EjemploFomentoDialogComponent } from './ejemplo-fomento-dialog/ejemplo-fomento-dialog.component';
import { EjemploFomentoIconComponent } from './ejemplo-fomento-icon/ejemplo-fomento-icon.component';
import { EjemploFomentoInputGroupComponent } from './ejemplo-fomento-input-group/ejemplo-fomento-input-group.component';
import { EjemploFomentoSpinnerComponent } from './ejemplo-fomento-spinner/ejemplo-fomento-spinner.component';
import { EjemploFomentoSelectComponent } from './ejemplo-fomento-select/ejemplo-fomento-select.component';
import { EjemploFiltroColumnasTablaComponent } from './ejemplo-filtro-columnas-tabla/ejemplo-filtro-columnas-tabla.component';
import { EjemploFomentoChipsComponent } from './ejemplo-fomento-chips/ejemplo-fomento-chips.component';
import { EjemploFomentoDividerComponent } from './ejemplo-fomento-divider/ejemplo-fomento-divider.component';
import { EjemploFomentoRippleComponent } from './ejemplo-fomento-ripple/ejemplo-fomento-ripple.component';
import { EjemploFomentoExpansionPanelComponent } from './ejemplo-fomento-expansion-panel/ejemplo-fomento-expansion-panel.component';
import { EjemploFomentoSidenavComponent } from './ejemplo-fomento-sidenav/ejemplo-fomento-sidenav.component';
import { EjemploFomentoAutocompleteComponent } from './ejemplo-fomento-autocomplete/ejemplo-fomento-autocomplete.component';

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
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { EjemploFomentoBadgeComponent } from './ejemplo-fomento-badge/ejemplo-fomento-badge.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { EjemploFomentoValidacionesComponent } from './ejemplo-fomento-validaciones/ejemplo-fomento-validaciones.component';
import { EjemploFomentoProgressComponent } from './ejemplo-fomento-progress/ejemplo-fomento-progress.component';
import { EjemploFomentoTableComponent } from './ejemplo-fomento-table/ejemplo-fomento-table.component';
import { EjemploFomentoTabsComponent } from './ejemplo-fomento-tabs/ejemplo-fomento-tabs.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { EjemploFomentoTooltipComponent } from './ejemplo-fomento-tooltip/ejemplo-fomento-tooltip.component';
import { EjemploFomentoListComponent } from './ejemplo-fomento-list/ejemplo-fomento-list.component';
import { EjemploFomentoToolbarComponent } from './ejemplo-fomento-toolbar/ejemplo-fomento-toolbar.component';
import { EjemploFomentoGridListComponent } from './ejemplo-fomento-grid-list/ejemplo-fomento-grid-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { EjemploFomentoButtonToggleComponent } from './ejemplo-fomento-button-toggle/ejemplo-fomento-button-toggle.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { EjemploFomentoBottomSheetComponent } from './ejemplo-fomento-bottom-sheet/ejemplo-fomento-bottom-sheet.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { EjemploFomentoFormFieldComponent } from './ejemplo-fomento-form-field/ejemplo-fomento-form-field.component';
import { EjemploFomentoTreeComponent } from './ejemplo-fomento-tree/ejemplo-fomento-tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { EjemploFomentoSlideToggleComponent } from './ejemplo-fomento-slide-toggle/ejemplo-fomento-slide-toggle.component';
import { EjemploFomentoSliderComponent } from './ejemplo-fomento-slider/ejemplo-fomento-slider.component';
import { EjemploFomentoSnackbarComponent } from './ejemplo-fomento-snackbar/ejemplo-fomento-snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EjemploFomentoDisclaimerComponent } from './ejemplo-fomento-disclaimer/ejemplo-fomento-disclaimer.component';
import { EjemploFomentoDatagridComponent } from './ejemplo-fomento-datagrid/ejemplo-fomento-datagrid.component';
import { EjemploFomentoApiServiceComponent } from './ejemplo-fomento-api-service/ejemplo-fomento-api-service.component';
import { EjemploFomentoFormularioComponent } from './ejemplo-fomento-formulario/ejemplo-fomento-formulario.component';
import { EjemploFomentoPlantillaFormularioComponent } from './ejemplo-fomento-plantilla-formulario/ejemplo-fomento-plantilla-formulario.component';
import { EjemploFomentoPlantillaConsultaComponent } from './ejemplo-fomento-plantilla-consulta/ejemplo-fomento-plantilla-consulta.component';
import { EjemploFomentoGestionTokenComponent } from './ejemplo-fomento-gestionToken/ejemplo-fomento-gestion-token.component';
import { EjemploFomentoPlantillaListadoComponent } from './ejemplo-fomento-plantilla-listado/ejemplo-fomento-plantilla-listado.component';
import { DirectivesModule } from '@fomento/i-rf-security-component-node-lib';
import { EjemploFomentoNotificacionComponent } from './ejemplo-fomento-notificacion/ejemplo-fomento-notificacion.component';
import { EjemploFomentoPropagarcambiosSeguridadComponent } from './ejemplo-fomento-propagarcambios-seguridad/ejemplo-fomento-propagarcambios-seguridad.component';
import { EjemploFomentoPlantillaAccesoDenegadoComponent } from './ejemplo-fomento-plantilla-acceso-denegado/ejemplo-fomento-plantilla-acceso-denegado.component';
import { EjemploFomentoJsonDatagridComponent } from './ejemplo-fomento-jsondatagrid/ejemplo-fomento-jsondatagrid.component';
import { EjemploAuthGuardComponent } from './ejemplo-auth-guard/ejemplo-auth-guard.component';

@NgModule({
	declarations: [
		EjemploFomentoButtonComponent,
		EjemploFomentoBrandComponent,
		EjemploFomentoNavComponent,
		EjemploFomentoInputComponent,
		EjemploFomentoAlertaComponent,
		EjemploFomentoCardComponent,
		EjemploFomentoBreadcrumbComponent,
		EjemploFiltroColumnasTablaComponent,
		EjemploFomentoBreadcrumbComponent,
		EjemploFomentoStepperComponent,
		EjemploFomentoCheckboxComponent,
		EjemploFomentoDialogComponent,
		EjemploFomentoIconComponent,
		EjemploFomentoInputGroupComponent,
		EjemploFomentoSpinnerComponent,
		EjemploFomentoSelectComponent,
		EjemploFomentoProgressComponent,
		EjemploFomentoTableComponent,
		EjemploFomentoTabsComponent,
		EjemploFomentoChipsComponent,
		EjemploFomentoDividerComponent,
		EjemploFomentoRippleComponent,
		EjemploFomentoExpansionPanelComponent,
		EjemploFomentoSidenavComponent,
		EjemploFomentoAutocompleteComponent,
		EjemploFomentoBadgeComponent,
		EjemploFomentoListComponent,
		EjemploFomentoToolbarComponent,
		EjemploFomentoGridListComponent,
		EjemploFomentoTooltipComponent,
		EjemploFomentoButtonToggleComponent,
		EjemploFomentoValidacionesComponent,
		EjemploFomentoBottomSheetComponent,
		EjemploFomentoFormFieldComponent,
		EjemploFomentoSnackbarComponent,
		EjemploFomentoTreeComponent,
		EjemploFomentoSlideToggleComponent,
		EjemploFomentoSliderComponent,
		EjemploFomentoDisclaimerComponent,
		EjemploFomentoDatagridComponent,
		EjemploFomentoApiServiceComponent,
		EjemploFomentoFormularioComponent,
		EjemploFomentoPlantillaFormularioComponent,
		EjemploFomentoPlantillaConsultaComponent,
		EjemploFomentoGestionTokenComponent,
		EjemploFomentoPlantillaListadoComponent,
		EjemploFomentoPlantillaAccesoDenegadoComponent,
		EjemploFomentoJsonDatagridComponent,
		EjemploAuthGuardComponent,
		EjemploFomentoNotificacionComponent,
		EjemploFomentoPropagarcambiosSeguridadComponent,
	],
	imports: [
		CommonModule,
		ComponentesRoutingModule,
		SharedModule,
		FomentoAlertsModule,
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
	],

	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentesModule {}
