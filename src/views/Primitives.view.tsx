import { useState } from 'react';
import { ElButton } from '../components/primitives/buttons/ElButton';
import { ElText } from '../components/primitives/text/ElText';
import { ElToggle } from '../components/primitives/toggles/ElToggle';

function PrimitivesView() {
  const [state, setState] = useState({
    toggleItemState: [
      {
        id: 'toggle-a',
        checked: true
      },
      {
        id: 'toggle-b',
        checked: true
      },
      {
        id: 'toggle-c',
        checked: true
      },
    ]
  });

  const onButtonClicked = (args: any) => {
    console.log('onButtonClicked', args);
  };

  const onToggleClicked = (id: string) => {
    console.log(`You clicked the "${id}" toggle`);
    const stateItem = state.toggleItemState.find(item => item.id === id);

    if (stateItem) {
      stateItem.checked = !stateItem.checked;
      setState({...state});
    }
  };

  return (
    <div className="primitives">
      <ElText tag="h1" addCss="text-gray-500" text="Primitives" />
      <ElText tag="h2" addCss="text-gray-500" text="ElText examples:" />
      <div className="p-6 border">
        <ElText
          tag="h2"
          addCss="text-red-500"
          text="Here ElText will render a <h2> element"
        />
        <ElText
          tag="p"
          addCss="text-gray-700"
          text="Here ElText will render a <p> element"
        />
      </div>

      <ElText tag="h2" addCss="text-gray-500" text="ElButton examples:" />
      <div className="p-6 border">
        <ElButton
          id="my-button"
          disabled={false}
          label="This is a button"
          onClicked={onButtonClicked}
        />
        <ElButton
          id="my-button"
          disabled
          label="This is a disabled button"
          addCss='ml-2'
          onClicked={onButtonClicked}
        />
      </div>

      <ElText tag="h2" addCss="text-gray-500" text="ElToggle examples:" />
      <div className="p-6 border">
        <ElToggle
          id="toggle-a"
          checked={state.toggleItemState.find(item => item.id === 'toggle-a')?.checked}
          disabled={false}
          onClicked={onToggleClicked}
        />
        <ElToggle
          id="toggle-b"
          checked={state.toggleItemState.find(item => item.id === 'toggle-b')?.checked}
          disabled={false}
          addCss='ml-2'
          onClicked={onToggleClicked}
        />
        <ElToggle
          id="toggle-c"
          checked={state.toggleItemState.find(item => item.id === 'toggle-c')?.checked}
          disabled={false}
          addCss='ml-2'
          onClicked={onToggleClicked}
        />
      </div>
    </div>
  );
}

export default PrimitivesView;