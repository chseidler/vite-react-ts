import axios, { AxiosRequestConfig } from 'axios';

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
    return new Promise<ItemInterface[]>(resolve => {
      const endpoint = this.endpoints.fetchItems;

      const options: AxiosRequestConfig = {
        headers: {

        }
      };

      axios
        .get<ItemInterface[]>(endpoint, options)
        .then(response => {
          if (!this.mockDelay) {
            resolve(response.data);
          } else {
            setTimeout(() => {
              resolve(response.data);
            }, this.mockDelay);
          }
        })
        .catch(err => {
          console.error('ItemsApiClient: HttpClient: Get: error', err);
        }); 
      
    });
  }
}