import { ApiClientInterface } from '../models/ApiClient.interface';
import { itemsApiClient } from './items';
import { localizationApiClient } from './localization';

const apiMockClient: ApiClientInterface = {
  localization: localizationApiClient,
  items: itemsApiClient
};

export { apiMockClient };