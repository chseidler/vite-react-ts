import { useEffect } from 'react';
import { ItemInterface } from '../models/items/item.interface';
import { useAppStore } from '../store';
import { ItemsListComponent } from '../components/items/ItemsList.component';

function ItemsViews() {
  const { itemsStore } = useAppStore();
  const { loading, items } = itemsStore.getters;

  const onItemSelect = (item: ItemInterface) => {
    itemsStore.actions.toggleItemSelected(item);
  };

  useEffect(() => {
    itemsStore.actions.loadItems();
  }, []);

  return (
    <div>
      <ItemsListComponent items={items} onItemSelect={onItemSelect} />
    </div>
  );
}

export default ItemsViews;