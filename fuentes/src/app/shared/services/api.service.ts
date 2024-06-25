import { Injectable } from '@angular/core';
import { PropertiesUtilService } from './properties-util.service';
import { environment } from '../../env/environment.des';

interface ApiEndpoint {
	code: string;
	default: boolean;
	url: string;
}

@Injectable({
	providedIn: 'root',
})
export class ApiService {
	constructor(private propertiesUtilService: PropertiesUtilService) {}

	getAllApis(): [ApiEndpoint] | undefined {
		return this.propertiesUtilService.getValuePropertieByName(
			environment.API_ENDPOINTS,
		) as [ApiEndpoint];
	}

	getDefaultApi(): ApiEndpoint | undefined {
		const apis: [ApiEndpoint] =
			this.propertiesUtilService.getValuePropertieByName(
				environment.API_ENDPOINTS,
			) as [ApiEndpoint];
		return apis.find((endpoint) => endpoint.default);
	}

	getApiByCode(code: string): ApiEndpoint | undefined {
		const apis: [ApiEndpoint] =
			this.propertiesUtilService.getValuePropertieByName(
				environment.API_ENDPOINTS,
			) as [ApiEndpoint];
		return apis.find((endpoint) => endpoint.code === code);
	}
}
