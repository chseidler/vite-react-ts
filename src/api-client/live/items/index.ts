import { ItemsApiClientInterface, ItemsApiClientModel, ItemsApiClientOptions } from '../../models/items';

const options: ItemsApiClientOptions = {
  endpoints: {
    fetchItems: '' //TODO
  }
};

const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(options);

export { itemsApiClient };