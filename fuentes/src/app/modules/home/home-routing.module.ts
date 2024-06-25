import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { LayoutComponent } from 'src/app/shared/componentes/layout/layout.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [{ path: '', component: HomeDashboardComponent }],
	},
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HomeRoutingModule {}
