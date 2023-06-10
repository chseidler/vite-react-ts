import React from 'react';
import { ItemInterface } from '../../models/items/item.interface';
import { ItemComponent } from './children/Item.component';
import { Loader } from '../shared/Loader.component';

type Props = {
  loading: boolean,
  items: ItemInterface[],
  onItemSelect: (item: ItemInterface) => void,
}

export const ItemsListComponent: React.FC<Props> = (props) => {
  const { loading, items } = props;

  const handleItemClick = (item: ItemInterface) => {
    props.onItemSelect(item);
  };

  return (
    <div>
      <h3>Items:</h3>
      {loading ? (
        <Loader />
      ) : (
        <ul>
          {
            items.map((item, index) => {
              return (
                <ItemComponent
                  testid={`item-${item.id}`}
                  key={index}
                  model={item}
                  onItemSelect={() => handleItemClick(item)}
                />
              );
            })
          }
        </ul>
      )}
      
    </div>
  );
};