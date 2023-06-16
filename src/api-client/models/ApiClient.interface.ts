import { ItemsApiClientInterface } from './items';
import { LocalizationApiClientInterface } from './localization';

/**
 * @name ApiClientInterface
 * @description Interface wraps all api client modules into one places
 */
export interface ApiClientInterface {
    items: ItemsApiClientInterface;
    localization: LocalizationApiClientInterface;
}