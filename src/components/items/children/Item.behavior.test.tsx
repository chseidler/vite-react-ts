import { fireEvent, render } from '@testing-library/react';
import { ItemInterface } from '../../../models/items/item.interface';
import { ItemComponent } from './Item.component';

describe('Item.component: behavior', () => {

  it('click event invokes onItemSelect handler as expected', () => {
    const model: ItemInterface = {
      id: 1,
      name: 'Unit test item 3',
      selected: false
    };

    const onItemSelect = vitest.fn();

    const testid = 'unit-test-item';

    const { container } = render(<ItemComponent testid={testid} model={model} onItemSelect={onItemSelect} />);

    const liElement = container.firstChild as HTMLElement;
    fireEvent.click(liElement);
    
    expect(onItemSelect).toHaveBeenCalledOnce();
  });
});