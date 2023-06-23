type ElTextProps = {
  testId?: string;
  id?: string;
  tag: string;
  text: string;
  addCss?: string;
};

interface ComponentProps extends React.HTMLAttributes<HTMLOrSVGElement> {
    as?: React.ElementType,
    id?: string,
    'data-testid': string,
}

const Component: React.FC<ComponentProps> = ({ as: Tag = 'p', ...otherProps}) => {
  return <Tag {...otherProps} />;
};

export function ElText(props: ElTextProps) {
  const { addCss, id, tag, text } = props;
  const testId = props.testId || 'testid-not-set';

  const cssClass = (): string => {
    const cssClasses = ['p-1'];

    if (addCss) {
      cssClasses.push(addCss.trim());
    }

    return cssClasses.join(' ').trim();
  };

  return (
    <Component
      as={tag as any}
      id={id}
      data-testid={testId}
      className={cssClass()}
    >
      {text}
    </Component>
  );
}