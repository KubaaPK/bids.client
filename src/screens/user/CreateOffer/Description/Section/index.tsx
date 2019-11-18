import React, { useState, useEffect } from 'react';
import * as S from './styled';
import * as Models from '../../../../../models';
import Item from './Item';

type Props = {
  onSectionContentChange: (section: any) => void;
};

const Section: React.FunctionComponent<Props> = (props: Props) => {
  const { onSectionContentChange } = props;

  const [items, setItems] = useState<
    Models.Offers.OfferDescription['sections'][0]['items']
  >([]);

  useEffect(() => {
    onSectionContentChange(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const addTextItem = (): void => {
    if (items.length < 2) {
      const newTextItem: Models.Offers.OfferDescription['sections'][0]['items'][0] = {
        type: 'TEXT'
      };

      const newItems = [...items];
      newItems.push(newTextItem);
      setItems(newItems);
    }
  };

  const onItemChange = (index: number) => (text: string) => {
    const existingItems = [...items];
    existingItems[index] = {
      type: 'TEXT',
      content: text
    };
    setItems(existingItems);
  };

  return (
    <S.Wrapper>
      <S.Buttons>
        <S.AddTextItemButton onClick={addTextItem} />
      </S.Buttons>
      <S.ItemsWrapper>
        {items.map((item, index: number) => (
          <Item
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            type={item.type}
            onItemChange={onItemChange(index)}
          />
        ))}
      </S.ItemsWrapper>
    </S.Wrapper>
  );
};

export default Section;
