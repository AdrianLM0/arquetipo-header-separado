import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EjemploFomentoBrandComponent } from './ejemplo-fomento-brand/ejemplo-fomento-brand.component';
import { LayoutComponent } from 'src/app/shared/componentes/layout/layout.component';
import { EjemploFomentoButtonComponent } from './ejemplo-fomento-button/ejemplo-fomento-button.component';
import { EjemploFomentoNavComponent } from './ejemplo-fomento-nav/ejemplo-fomento-nav.component';
import { EjemploFomentoInputComponent } from './ejemplo-fomento-input/ejemplo-fomento-input.component';
import { EjemploFomentoAlertaComponent } from './ejemplo-fomento-alerta/ejemplo-fomento-alerta.component';
import { EjemploFomentoCardComponent } from './ejemplo-fomento-card/ejemplo-fomento-card.component';
import { EjemploFomentoStepperComponent } from './ejemplo-fomento-stepper/ejemplo-fomento-stepper.component';
import { EjemploFomentoCheckboxComponent } from './ejemplo-fomento-checkbox/ejemplo-fomento-checkbox.component';
import { EjemploFomentoDialogComponent } from './ejemplo-fomento-dialog/ejemplo-fomento-dialog.component';
import { EjemploFomentoIconComponent } from './ejemplo-fomento-icon/ejemplo-fomento-icon.component';
import { EjemploFomentoInputGroupComponent } from './ejemplo-fomento-input-group/ejemplo-fomento-input-group.component';
import { EjemploFomentoSelectComponent } from './ejemplo-fomento-select/ejemplo-fomento-select.component';
import { EjemploFomentoSpinnerComponent } from './ejemplo-fomento-spinner/ejemplo-fomento-spinner.component';
import { EjemploFiltroColumnasTablaComponent } from './ejemplo-filtro-columnas-tabla/ejemplo-filtro-columnas-tabla.component';
import { EjemploFomentoChipsComponent } from './ejemplo-fomento-chips/ejemplo-fomento-chips.component';
import { EjemploFomentoDividerComponent } from './ejemplo-fomento-divider/ejemplo-fomento-divider.component';
import { EjemploFomentoRippleComponent } from './ejemplo-fomento-ripple/ejemplo-fomento-ripple.component';
import { EjemploFomentoExpansionPanelComponent } from './ejemplo-fomento-expansion-panel/ejemplo-fomento-expansion-panel.component';
import { EjemploFomentoSidenavComponent } from './ejemplo-fomento-sidenav/ejemplo-fomento-sidenav.component';
import { EjemploFomentoAutocompleteComponent } from './ejemplo-fomento-autocomplete/ejemplo-fomento-autocomplete.component';
import { EjemploFomentoProgressComponent } from './ejemplo-fomento-progress/ejemplo-fomento-progress.component';
import { EjemploFomentoTabsComponent } from './ejemplo-fomento-tabs/ejemplo-fomento-tabs.component';
import { EjemploFomentoTableComponent } from './ejemplo-fomento-table/ejemplo-fomento-table.component';
import { EjemploFomentoListComponent } from './ejemplo-fomento-list/ejemplo-fomento-list.component';
import { EjemploFomentoBadgeComponent } from './ejemplo-fomento-badge/ejemplo-fomento-badge.component';
import { EjemploFomentoToolbarComponent } from './ejemplo-fomento-toolbar/ejemplo-fomento-toolbar.component';
import { EjemploFomentoGridListComponent } from './ejemplo-fomento-grid-list/ejemplo-fomento-grid-list.component';
import { EjemploFomentoTooltipComponent } from './ejemplo-fomento-tooltip/ejemplo-fomento-tooltip.component';
import { EjemploFomentoBottomSheetComponent } from './ejemplo-fomento-bottom-sheet/ejemplo-fomento-bottom-sheet.component';
import { EjemploFomentoButtonToggleComponent } from './ejemplo-fomento-button-toggle/ejemplo-fomento-button-toggle.component';
import { EjemploFomentoFormFieldComponent } from './ejemplo-fomento-form-field/ejemplo-fomento-form-field.component';
import { EjemploFomentoTreeComponent } from './ejemplo-fomento-tree/ejemplo-fomento-tree.component';
import { EjemploFomentoSlideToggleComponent } from './ejemplo-fomento-slide-toggle/ejemplo-fomento-slide-toggle.component';
import { EjemploFomentoDatagridComponent } from './ejemplo-fomento-datagrid/ejemplo-fomento-datagrid.component';
import { EjemploFomentoSliderComponent } from './ejemplo-fomento-slider/ejemplo-fomento-slider.component';
import { EjemploFomentoSnackbarComponent } from './ejemplo-fomento-snackbar/ejemplo-fomento-snackbar.component';
import { EjemploFomentoDisclaimerComponent } from './ejemplo-fomento-disclaimer/ejemplo-fomento-disclaimer.component';
import { EjemploFomentoApiServiceComponent } from './ejemplo-fomento-api-service/ejemplo-fomento-api-service.component';
import { EjemploFomentoFormularioComponent } from './ejemplo-fomento-formulario/ejemplo-fomento-formulario.component';
import { EjemploFomentoPlantillaFormularioComponent } from './ejemplo-fomento-plantilla-formulario/ejemplo-fomento-plantilla-formulario.component';
import { EjemploFomentoPlantillaConsultaComponent } from './ejemplo-fomento-plantilla-consulta/ejemplo-fomento-plantilla-consulta.component';
import { EjemploFomentoGestionTokenComponent } from './ejemplo-fomento-gestionToken/ejemplo-fomento-gestion-token.component';
import { EjemploFomentoPlantillaListadoComponent } from './ejemplo-fomento-plantilla-listado/ejemplo-fomento-plantilla-listado.component';
import { EjemploFomentoNotificacionComponent } from './ejemplo-fomento-notificacion/ejemplo-fomento-notificacion.component';
import { EjemploFomentoPropagarcambiosSeguridadComponent } from './ejemplo-fomento-propagarcambios-seguridad/ejemplo-fomento-propagarcambios-seguridad.component';
import { AuthGuard } from '@fomento/i-rf-security-component-node-lib';
import { EjemploFomentoPlantillaAccesoDenegadoComponent } from './ejemplo-fomento-plantilla-acceso-denegado/ejemplo-fomento-plantilla-acceso-denegado.component';
import { EjemploFomentoJsonDatagridComponent } from './ejemplo-fomento-jsondatagrid/ejemplo-fomento-jsondatagrid.component';
import { EjemploAuthGuardComponent } from './ejemplo-auth-guard/ejemplo-auth-guard.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{ path: 'brand', component: EjemploFomentoBrandComponent },
			{ path: 'list', component: EjemploFomentoListComponent },
			{ path: 'button', component: EjemploFomentoButtonComponent },
			{ path: 'nav', component: EjemploFomentoNavComponent },
			{ path: 'input', component: EjemploFomentoInputComponent },
			{ path: 'alert', component: EjemploFomentoAlertaComponent },
			{ path: 'card', component: EjemploFomentoCardComponent },
			{ path: 'stepper', component: EjemploFomentoStepperComponent },
			{ path: 'checkbox', component: EjemploFomentoCheckboxComponent },
			{ path: 'dialog', component: EjemploFomentoDialogComponent },
			{ path: 'icon', component: EjemploFomentoIconComponent },
			{ path: 'input-group', component: EjemploFomentoInputGroupComponent },
			{ path: 'select', component: EjemploFomentoSelectComponent },
			{ path: 'spinner', component: EjemploFomentoSpinnerComponent },
			{
				path: 'filtro-columnas',
				component: EjemploFiltroColumnasTablaComponent,
			},
			{ path: 'progress', component: EjemploFomentoProgressComponent },
			{ path: 'tabs', component: EjemploFomentoTabsComponent },
			{ path: 'table', component: EjemploFomentoTableComponent },
			{ path: 'chips', component: EjemploFomentoChipsComponent },
			{ path: 'divider', component: EjemploFomentoDividerComponent },
			{ path: 'ripple', component: EjemploFomentoRippleComponent },
			{
				path: 'expansion-panel',
				component: EjemploFomentoExpansionPanelComponent,
			},
			{ path: 'sidenav', component: EjemploFomentoSidenavComponent },
			{ path: 'autocomplete', component: EjemploFomentoAutocompleteComponent },
			{ path: 'badge', component: EjemploFomentoBadgeComponent },
			{ path: 'toolbar', component: EjemploFomentoToolbarComponent },
			{ path: 'grid-list', component: EjemploFomentoGridListComponent },
			{ path: 'tooltip', component: EjemploFomentoTooltipComponent },
			{ path: 'buttonToggle', component: EjemploFomentoButtonToggleComponent },
			{ path: 'bottomSheet', component: EjemploFomentoBottomSheetComponent },
			{ path: 'form-field', component: EjemploFomentoFormFieldComponent },
			{ path: 'snackbar', component: EjemploFomentoSnackbarComponent },
			{ path: 'slider', component: EjemploFomentoSliderComponent },
			{ path: 'tree', component: EjemploFomentoTreeComponent },
			{ path: 'slide-toggle', component: EjemploFomentoSlideToggleComponent },
			{ path: 'datagrid', component: EjemploFomentoDatagridComponent },
			{ path: 'jsondatagrid', component: EjemploFomentoJsonDatagridComponent },
			{ path: 'disclaimer', component: EjemploFomentoDisclaimerComponent },
			{ path: 'api-service', component: EjemploFomentoApiServiceComponent },
			{ path: 'form', component: EjemploFomentoFormularioComponent },
			{ path: 'gestion-token', component: EjemploFomentoGestionTokenComponent },
			{
				path: 'plantilla-listado',
				component: EjemploFomentoPlantillaListadoComponent,
			},
			{
				path: 'plantilla-form',
				component: EjemploFomentoPlantillaFormularioComponent,
				data: { breadcrumb: 'Plantilla Formulario' },
			},
			{
				path: 'plantilla-consulta',
				component: EjemploFomentoPlantillaConsultaComponent,
				data: { breadcrumb: 'Plantilla Consulta' },
			},
			{
				path: 'plantilla-accesoDenegado',
				component: EjemploFomentoPlantillaAccesoDenegadoComponent,
			},
			{
				path: 'ejemplo-auth-guard',
				component: EjemploAuthGuardComponent,
				canActivate: [AuthGuard],
			},
			{ path: 'notifications', component: EjemploFomentoNotificacionComponent },
			{
				path: 'changeprivileges',
				component: EjemploFomentoPropagarcambiosSeguridadComponent,
			},
		],
	},
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ComponentesRoutingModule {}
