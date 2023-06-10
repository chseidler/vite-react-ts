import { useState } from 'react';

import { Provider } from 'react-redux';
import './App.css';

import { ItemsListComponent } from './components/items/ItemsList.component';
import { ItemInterface } from './models/items/item.interface';
import { rootStore } from './store';

function App() {
  const [items, setItems] = useState<ItemInterface[]>([{
    id: 1,
    name: 'Item 1',
    selected: false,
  },
  {
    id: 2,
    name: 'Item 2',
    selected: false,
  },
  {
    id: 3,
    name: 'Item 3',
    selected: false,
  }]);

  const onItemSelect = (item: ItemInterface) => {
    const updatedItems = [...items];
    const found = updatedItems.find(o => o.id === item.id) as ItemInterface;
    found.selected = !item.selected;
    setItems(updatedItems);
  };

  return (
    <Provider store={rootStore}>
      <div className="App">
        <ItemsListComponent items={items} onItemSelect={onItemSelect}/>
      </div>
    </Provider>
  );
}

export default App;
