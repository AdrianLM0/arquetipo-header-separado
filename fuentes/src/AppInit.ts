import { PropertiesUtilService } from './app/shared/services/properties-util.service';

export function initializer(
	propertiesUtilService: PropertiesUtilService,
): () => Promise<unknown> {
	return () => propertiesUtilService.initProperties();
}
