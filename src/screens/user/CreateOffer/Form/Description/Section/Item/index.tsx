import React from 'react';
import Text from './Text';

type Props = {
  type: 'TEXT' | 'IMAGE';
  onItemChange: (text: string) => void;
  restoredItem?: any;
};

const Item: React.FunctionComponent<Props> = (props: Props) => {
  const { type, onItemChange, restoredItem } = props;

  return (
    <>
      {type === 'TEXT' && (
        <Text onContentChange={onItemChange} restoredItem={restoredItem} />
      )}
    </>
  );
};

export default Item;
