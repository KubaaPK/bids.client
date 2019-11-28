import React, { useState, useEffect } from 'react';
import * as S from './styled';
import * as Models from '../../../../../../models';
import Item from './Item';

type Props = {
  onSectionContentChange: (section: any) => void;
  restoredItems?: any;
};

const Section: React.FunctionComponent<Props> = (props: Props) => {
  const { onSectionContentChange, restoredItems } = props;

  const [items, setItems] = useState<
    Models.Offers.OfferDescription['sections'][0]
  >({ items: [] });
  const [restoringItems, setRestoringItems] = useState<boolean>(true);

  useEffect(() => {
    if (restoredItems && restoringItems) {
      setItems(restoredItems);
      setRestoringItems(false);
    }

    if (items) {
      onSectionContentChange(items);
    }
    setRestoringItems(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, restoredItems]);

  const addTextItem = (): void => {
    if (items.items.length < 2) {
      const newTextItem: Models.Offers.OfferDescription['sections'][0]['items'][0] = {
        type: 'TEXT'
      };

      const newItems = [...items.items];
      newItems.push(newTextItem);
      setItems({
        items: newItems
      });
    }
  };

  const onItemChange = (index: number) => (text: string) => {
    const existingItems = [...items.items];
    existingItems[index] = {
      type: 'TEXT',
      content: text
    };
    setItems({
      items: existingItems
    });
  };

  return (
    <S.Wrapper>
      <S.Buttons>
        <S.AddTextItemButton onClick={addTextItem} />
      </S.Buttons>
      <S.ItemsWrapper>
        {items.items.map((item, index: number) => (
          <Item
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            type={item.type}
            onItemChange={onItemChange(index)}
            restoredItem={item}
          />
        ))}
      </S.ItemsWrapper>
    </S.Wrapper>
  );
};

export default Section;
