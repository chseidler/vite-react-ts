import { Dispatch } from 'react';
import { itemsStoreSlice } from './Items.slice';
import { ItemInterface } from '../../models/items/item.interface';
import { useSelector } from 'react-redux';
import { RootStateInterface } from '../root/Root.store';
import { apiClient } from '../../api-client';

/**
 * @name useItemsActions
 * @description Actions hook that allows us to invoke the Items store actions from our components
 */
export function useItemsActions(commit: Dispatch<any>) {
  const mutations = itemsStoreSlice.actions;

  const actions = {
    loadItems: async () => {
      commit(mutations.setLoading(true));

      const data = await apiClient.items.fetchItems();
      commit(mutations.setItems(data));
    },

    toggleItemSelected: async (item: ItemInterface) => {
      console.log('ItemsStore: action: toggleItemSelected', item);
      commit(mutations.setItemSelected(item));
    }
  };

  return actions;
}

/**
 * @name useItemsGetters
 * @description Hook to consume read-only state properties from components
 */
export function useItemsGetters() {
  return {
    loading: useSelector((s: RootStateInterface) => s.itemsState.loading),
    items: useSelector((s: RootStateInterface) => s.itemsState.items)
  };
}

/**
 * @name ItemsStoreInterface
 * @description Interface represents our Items store module
 */
export interface ItemsStoreInterface {
    actions: ReturnType<typeof useItemsActions>
    getters: ReturnType<typeof useItemsGetters>
}