import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PropertiesService } from './properties.service';

@Injectable({
	providedIn: 'root',
})
export class PropertiesUtilService {
	/*parametros*/
	parameters;

	propLoadedSubject = new Subject<unknown>();

	constructor(private PropertiesService: PropertiesService) {}

	initProperties() {
		return new Promise<boolean>((resolve) => {
			this.parameters = this.PropertiesService.getProperties();
			resolve(true);
		});
	}

	onDataFailed(): void {
		this.parameters = {};
		this.propLoadedSubject.next(false);
	}

	getValuePropertieByName(name: string) {
		if (this.parameters == null || !this.parameters) {
			this.initProperties();
		}

		// eslint-disable-next-line no-prototype-builtins
		if (this.parameters && this.parameters.hasOwnProperty(name)) {
			return this.parameters[name];
		} else {
			return '';
		}
	}
}
