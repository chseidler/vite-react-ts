import { Provider } from 'react-redux';

import { rootStore } from './store';
import ItemsViews from './views/Items.view';
import { useLocalization } from './localization';
import { DebugFormatters } from './components/shared/DebugFormatters.component';

function App() {
  const { t, locales, currentLocale, getUserPreferredLocale, changeLocale} = useLocalization();
  
  if (!currentLocale) {
    changeLocale(getUserPreferredLocale());
  }

  const onLocaleClick = (lcid: string) => {
    changeLocale(lcid);
  };

  return (
    <Provider store={rootStore}>
      <div className="app m-2 p-2 border-2 border-red-500">
        <div className="locale-selector">
          {
            locales.map(item => {
              const radioId = `radio-locale-${item.key}`;

              return (
                <label
                  key={item.key}
                  htmlFor={radioId}
                  className="cursor-pointer"
                  onClick={() => onLocaleClick(item.key)}
                >
                  <input
                    type="radio"
                    id={radioId}
                    radioGroup={currentLocale}
                    name="locale"
                    value={item.key}
                    checked={currentLocale === item.key}
                  />
                  {
                    t(`locale.selector.${item.key}`)
                  }
                </label>
              );
            })
          }
        </div>
        <h1>{ t('home.welcome') }</h1>
        <ItemsViews />
        <DebugFormatters show />
      </div>
    </Provider>
  );
}

export default App;
