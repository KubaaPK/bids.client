import React from 'react';
import * as S from './styled';

type Props = {
  item: {
    type: 'TEXT' | 'IMAGE';
    content: string;
  };
};

const Item: React.FunctionComponent<Props> = (props: Props) => {
  const { item } = props;

  const createMarkup = (): any => {
    return {
      __html: item.content
    };
  };

  return (
    <S.Item>
      {item.type === 'TEXT' && (
        <S.Text dangerouslySetInnerHTML={createMarkup()} />
      )}
    </S.Item>
  );
};

export default Item;
