import React from 'react';
import { ItemInterface } from '../../../models/items/item.interface';

type Props = {
    testid: string;
    model: ItemInterface;
    onItemSlect: (item: ItemInterface) => void;
}

export const ItemComponent: React.FC<Props> = (props) => {

  const cssClass = () => {
    let css = 'item';
    if (props.model?.selected) {
      css += ' selected';
    }

    return css.trim();
  };

  const handleItemClick = (item: ItemInterface) => {
    props.onItemSlect(item);
  }; 

  return (
    <li data-testid={props.testid} className={cssClass()} onClick={() => handleItemClick(props.model)}>
      <div className="selected-indicator">*</div>
      <div className="name">{props.model.name}</div>
    </li>
  );
};