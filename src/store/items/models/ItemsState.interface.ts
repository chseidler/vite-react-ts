import { ItemInterface } from '../../../models/items/item.interface';

/**
 * @name ItemsStateInterface
 * @description Interface represents our Items state
 */
export interface ItemsStateInterface {
    loading: boolean,
    items: ItemInterface[],
}