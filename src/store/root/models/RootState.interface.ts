import { ItemsStateInterface } from '../../items/models';

/**
 * @name RootStoreInterface
 * @description Interface represents our root state manager (store)
 */
export interface RootStateInterface {
    itemsState: ItemsStateInterface
}