import { Component } from '@angular/core';

@Component({
	selector: 'app-ejemplo-fomento-progress',
	templateUrl: './ejemplo-fomento-progress.component.html',
	styleUrls: ['./ejemplo-fomento-progress.component.scss'],
})
export class EjemploFomentoProgressComponent {
	progress = 78;
	title = 'Avance en el expediente';
	typeStyle: 'matter' | 'material' = 'material';
}
