import { ElButton } from '../components/primitives/buttons/ElButton';
import { ElText } from '../components/primitives/text/ElText';

function PrimitivesView() {
  const onButtonClicked = (args: any) => {
    console.log('onButtonClicked', args);
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
    </div>
  );
}

export default PrimitivesView;