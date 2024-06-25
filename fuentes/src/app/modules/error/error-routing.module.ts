import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorDetailComponent } from './errordetail/errordetail.component';

const routes: Routes = [
	{
		path: '',
		component: ErrorDetailComponent,
	},
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ErrorRoutingModule {}
