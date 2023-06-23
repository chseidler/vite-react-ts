interface SomeButtonProps {
    label: string,
    disabled: boolean,
    onClicked: () => any;
}

export function SomeButton (props: SomeButtonProps) {
  const { label } = props;
  const disabled = props.disabled || false;

  const cssClass = (): string => {
    const result = ['p-6'];

    if (disabled) {
      result.push('disabled');
    }

    return result.join(' ').trim();
  };

  const handleClick = () => {
    if (!disabled) {
      props.onClicked();
    }
  };

  return (
    <button 
      type='button'
      disabled={disabled}
      className={cssClass()}
      onClick={handleClick}
    >
      <span className="name">{ label }</span>
    </button>
  );
}