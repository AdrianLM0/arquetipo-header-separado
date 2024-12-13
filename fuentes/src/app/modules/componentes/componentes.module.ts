import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesRoutingModule } from './componentes-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
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
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
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
		MatOptionModule,
		MatButtonModule,
		MatMenuModule
		//BrowserAnimationsModule,
	],

	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentesModule {}
