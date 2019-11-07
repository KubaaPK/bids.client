import React from 'react';
import * as S from './styled';
import Item from './Item';

type Props = {
  items: {
    type: 'TEXT' | 'IMAGE';
    content: string;
  }[];
};

const Section: React.FunctionComponent<Props> = (props: Props) => {
  const { items } = props;

  return (
    <S.Section>
      {items.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Item item={item} key={index} />
      ))}
    </S.Section>
  );
};

export default Section;
