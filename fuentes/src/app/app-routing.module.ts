import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: '/home',
	},
	{
		path: 'home',
		loadChildren: () =>
			import('src/app/modules/home/home.module').then((m) => m.HomeModule),
		data: { breadcrumb: 'Inicio' },
	},
	{
		path: 'components',
		loadChildren: () =>
			import('src/app/modules/componentes/componentes.module').then(
				(m) => m.ComponentesModule,
			),
		data: { breadcrumb: 'Inicio' },
	},
	{
		path: 'error',
		loadChildren: () =>
			import('src/app/modules/error/error.module').then((m) => m.ErrorModule),
		data: { breadcrumb: 'Error' },
	},
	{
		path: '**',
		redirectTo: 'error',
		pathMatch: 'full',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
