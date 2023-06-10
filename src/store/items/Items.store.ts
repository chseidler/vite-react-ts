import { Dispatch } from 'react';
import { itemsStoreSlice } from './Items.slice';
import { ItemInterface } from '../../models/items/item.interface';
import { useSelector } from 'react-redux';
import { RootStateInterface } from '../root/Root.store';

/**
 * @name useItemsActions
 * @description Actions hook that allows us to invoke the Items store actions from our components
 */
export function useItemsActions(commit: Dispatch<any>) {
  const mutations = itemsStoreSlice.actions;

  const actions = {
    loadItems: async () => {
      commit(mutations.setLoading(true));

      const mockItems: ItemInterface[] = [
        {
          id: 1,
          name: 'Item 1',
          selected: false
        },
        {
          id: 2,
          name: 'Item 2',
          selected: false
        },
        {
          id: 3,
          name: 'Item 3',
          selected: false
        },
      ];

      setTimeout(() => {
        commit(mutations.setItems(mockItems));
      }, 1000);
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