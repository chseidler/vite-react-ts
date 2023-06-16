import { config } from '../../config';
import { ItemsApiClientModel, LocalizationApiClientModel } from '../models';
import { ApiClientInterface } from '../models/ApiClient.interface';

const apiLiveClient: ApiClientInterface = {
  localization: new LocalizationApiClientModel(config.localization.apiClientOptions),
  items: new ItemsApiClientModel(config.items.apiClientOptions)
};

export { apiLiveClient };