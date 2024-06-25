import { Injectable } from '@angular/core';
import configRest from '../../config/config-rest.json';
import systemProperties from '../../../assets/config/system_properties.json';

@Injectable({
	providedIn: 'root',
})
export class PropertiesService {
	constructor() {
		//DO NOTHING
	}

	getProperties() {
		const jsonArray = {};

		Object.assign(jsonArray, configRest);
		Object.assign(jsonArray, systemProperties);

		return jsonArray;
	}
}
