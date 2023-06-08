import React from 'react';
import { ItemInterface } from '../../models/items/item.interface';

type Props = {
  items: ItemInterface[],
  onItemSelect: (item: ItemInterface) => void,
}

export const ItemsListComponent: React.FC<Props> = (props) => {

  const handleItemClick = (item: ItemInterface) => {
    props.onItemSelect(item);
  };

  return (
    <div>
      <h3>Items:</h3>
      <ul>
        {
          props.items.map((item, index) => {
            return (
              <li key={index}
                onClick={() => handleItemClick(item)}>
                {item.name} [{ String(item.selected) }]
              </li> 
            );
          })
        }
      </ul>
    </div>
  );
};