import React from 'react';
import { ItemInterface } from '../../models/items/item.interface';

export const ItemsListComponent: React.FC<{items: ItemInterface[]}> = (props) => {

  return (
    <div>
      <h3>Items:</h3>
      <ul>
        {
          props.items.map((item, index) => <li key={index}>{item.name}</li>)
        }
      </ul>
    </div>
  );
};