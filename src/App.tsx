import { ItemsListComponent } from './components/items/itemsList.component';

const items: any[] = [{
  id: 1,
  name: 'Item 1',
},
{
  id: 2,
  name: 'Item 2',
},
{
  id: 3,
  name: 'Item 3',
}];

function App() {

  return (
    <div>
      <ItemsListComponent items={items} />
    </div>
  );
}

export default App;
