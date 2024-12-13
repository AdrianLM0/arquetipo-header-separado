import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentesModule } from '../componentes/componentes.module';
import { EjemploFomentoNavComponent } from '../componentes/ejemplo-fomento-nav/ejemplo-fomento-nav.component';

@NgModule({
	declarations: [HomeDashboardComponent],
	imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
