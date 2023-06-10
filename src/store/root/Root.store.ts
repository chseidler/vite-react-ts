import { configureStore } from '@reduxjs/toolkit';
import { itemsStoreSlice, useItemsActions, useItemsGetters } from '../items';
import { useDispatch } from 'react-redux';
import { RootStoreInterface } from './models';

export const rootStore = configureStore({
  reducer: {
    itemsState: itemsStoreSlice.reducer
  }
});

export type RootStateInterface = ReturnType<typeof rootStore.getState>

export function useAppStore(): RootStoreInterface {
  const commit = useDispatch();

  return {
    itemsStore: {
      actions: useItemsActions(commit),
      getters: useItemsGetters()
    }
  };
}

type IAppState = ReturnType<typeof rootStore.getState>

/**
 * @name getAppState
 * @description
 * Returns a snapshot of the current app state (non-reactive)
 */
export function getAppState(): IAppState {
  const appState = rootStore.getState();
  return {
    ...appState
  };
}