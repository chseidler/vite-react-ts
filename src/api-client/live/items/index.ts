import { config } from '../../../config';
import { ItemsApiClientInterface, ItemsApiClientModel } from '../../models/items';

const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(config.items.apiClientOptions);

export { itemsApiClient };