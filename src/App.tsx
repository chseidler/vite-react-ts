import { Provider } from 'react-redux';
import './App.css';

import { rootStore } from './store';
import ItemsViews from './views/Items.view';

function App() {
  return (
    <Provider store={rootStore}>
      <div className="App">
        <ItemsViews />
      </div>
    </Provider>
  );
}

export default App;
