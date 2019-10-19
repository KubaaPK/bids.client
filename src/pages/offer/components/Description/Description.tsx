import React from 'react';
import { DescriptionModel } from '../../../../models/offer';
import { Wrapper, Items, Element } from './styled';
import Title from '../../../../components/Title/Title';

type Props = {
  description: DescriptionModel[];
};

const Description: React.FunctionComponent<Props> = (props: Props) => {
  const { description } = props;

  const htmlMarkup = (html: any): any => {
    return {
      __html: html
    };
  };

  return (
    <Wrapper>
      <Title text="Opis" />
      {description.map((item, index) => (
        <Items key={`item-${index + 1}`}>
          {item.items.map(el => (
            <Element
              key={el.content}
              dangerouslySetInnerHTML={htmlMarkup(el.content)}
            />
          ))}
        </Items>
      ))}
    </Wrapper>
  );
};

export default Description;
