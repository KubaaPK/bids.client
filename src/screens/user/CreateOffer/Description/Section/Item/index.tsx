import React from 'react';
import Text from './Text';

type Props = {
  type: 'TEXT' | 'IMAGE';
  onItemChange: (text: string) => void;
};

const Item: React.FunctionComponent<Props> = (props: Props) => {
  const { type, onItemChange } = props;

  return <>{type === 'TEXT' && <Text onContentChange={onItemChange} />}</>;
};

export default Item;
