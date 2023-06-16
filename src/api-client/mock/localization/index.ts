import { config } from '../../../config';
import { LocalizationApiClientInterface, LocalizationApiClientModel } from '../../models';

const localizationApiClient: LocalizationApiClientInterface = new LocalizationApiClientModel(config.localization.apiClientOptions);

export { localizationApiClient };