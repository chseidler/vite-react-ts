import { useState } from 'react';

import { ElButton, ElText, ElToggle } from '../components/primitives';
import { ElIconAlert } from '../components/primitives/icons';
import { instanceModal } from '../components/primitives/modals/instanceModal';

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

  const onButtonClicked = (id: string) => {
    console.log('onButtonClicked', id);
  };

  const onOpenDialogClicked = async (id: string) => {
    console.log('PrimitivesView: onOpeanDialogClicked', id);

    if (id === 'open-modal-1') {
      const modal = instanceModal({
        cancelLabel: 'Cancel',
        confirmLabel: 'Ok',
        primaryButtonType: 'danger',
      });
      const result = await modal.prompt('Do you want to delete this record?');
      console.log('----- PrimitivesView: onButtonClicked: modal-1 prompt result', result);
    } else if (id === 'open-modal-2') {
      const modal = instanceModal({
        cancelLabel: 'Cancel',
        confirmLabel: 'Confirm?',
        longDesc: 'This has also a longer description and an icon',
        icon: ElIconAlert,
        iconAddCss: 'text-red-600'
      });
      const result = await modal.prompt('Do you confirm this action?');
      console.log('----- PrimitivesView: onButtonClicked: modal-2 prompt result', result);
    }
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
          id="my-button-1"
          disabled={false}
          label="This is a button"
          onClicked={onButtonClicked}
        />
        <ElButton
          id="my-button-2"
          disabled={true}
          label="This is a disabled button"
          addCss="ml-2"
          onClicked={onButtonClicked}
        />
        <ElButton
          id="open-modal-1"
          disabled={false}
          label="Open modal 1"
          addCss="ml-2"
          onClicked={onOpenDialogClicked}
        />
        <ElButton
          id="open-modal-2"
          disabled={false}
          label="Open modal 2"
          addCss="ml-2"
          onClicked={onOpenDialogClicked}
        />
      </div>

      <ElText tag="h2" addCss="text-gray-500" text="ElToggle examples:" />
      <div className="p-6 border">
        <ElToggle
          id="toggle-a"
          checked={
            state.toggleItemState.find((item) => item.id === 'toggle-a')
              ?.checked
          }
          disabled={false}
          onClicked={onToggleClicked}
        />
        <ElToggle
          id="toggle-b"
          checked={
            state.toggleItemState.find((item) => item.id === 'toggle-b')
              ?.checked
          }
          disabled={false}
          addCss="ml-2"
          onClicked={onToggleClicked}
        />
        <ElToggle
          id="toggle-c"
          checked={
            state.toggleItemState.find((item) => item.id === 'toggle-c')
              ?.checked
          }
          disabled={false}
          addCss="ml-2"
          onClicked={onToggleClicked}
        />
      </div>
    </div>
  );
}

export default PrimitivesView;