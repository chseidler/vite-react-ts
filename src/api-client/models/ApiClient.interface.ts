import { ItemsApiClientInterface } from './items';

/**
 * @name ApiClientInterface
 * @description Interface wraps all api client modules into one places
 */
export interface ApiClientInterface {
    items: ItemsApiClientInterface;
}