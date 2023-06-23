type ElButtonProps = {
  testid?: string,
  id: string,
  label: string,
  disabled?: boolean,
  addCss?: string,
  onClicked: Function,
}

export function SomeButton (props: ElButtonProps) {
  const { addCss, id, label, onClicked } = props;
  const testid = props.testid || 'testid-not-set';
  const disabled = props.disabled || false;

  const cssClass = (): string => {
    const result = [
      'font-bold',
      'py-1',
      'px-2',
      'inline-flex',
      'justify-center',
      'rounded-md',
      'border',
      'shadow-sm',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-2'
    ];
    if (disabled) {
      result.push(
        'bg-gray-500',
        'text-gray-300',
        'opacity-50',
        'cursor-not-allowed'
      );
    } else {
      result.push(
        'bg-blue-500',
        'text-whit',
        'hover:bg-blue-400',
        'focus:ring-blue-300'
      );
    }

    if (addCss) {
      result.push(addCss);
    }

    return result.join(' ').trim();
  };

  const handleClick = () => {
    if (!disabled) {
      onClicked(id);
    }
  };

  return (
    <button
      type="button"
      aria-label={label}
      data-testid={testid}
      disabled={disabled}
      className={cssClass()}
      onClick={handleClick}
    >
      <span className="name">{label}</span>
    </button>
  );
}