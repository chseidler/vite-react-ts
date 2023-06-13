import { HttpRequestParamsInterface, HttpRequestType, httpClientFactory } from '../../../http-client';
import { ItemInterface } from '../../../models/items/item.interface';
import { ItemsApiClientInterface } from './ItemsApiClient.interface';
import { ItemsApiClientEndpoints, ItemsApiClientOptions } from './ItemsApiClientOptions.interface';

/**
 * @name ItemsApiClientModel
 * @description Implements the ItemsApiClientInterface interface
 */
export class ItemsApiClientModel implements ItemsApiClientInterface {
  private readonly endpoints!: ItemsApiClientEndpoints;
  private readonly mockDelay: number = 0;

  constructor(options: ItemsApiClientOptions) {
    this.endpoints = options.endpoints;
    if (options.mockDelay) {
      this.mockDelay = options.mockDelay;
    }
  }

  fetchItems(): Promise<ItemInterface[]> {
    const requestParameters: HttpRequestParamsInterface = {
      requestType: HttpRequestType.get,
      endpoint: this.endpoints.fetchItems,
      requiresToken: false,
      mockDelay: this.mockDelay,
    };

    return httpClientFactory().request<ItemInterface[]>(requestParameters);
  }
}