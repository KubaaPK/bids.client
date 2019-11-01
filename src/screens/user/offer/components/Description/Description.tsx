import React from 'react';
// import { DescriptionModel } from '../../../../../models/offer';
import { Wrapper, Items, Element } from './styled';
import * as Typo from '../../../../../components/Typography';

type Props = {
  description: any;
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
      <Typo.Title text="Opis" />
      {description.map((item: any, index: any) => (
        <Items key={`item-${index + 1}`}>
          {item.items.map((el: any) => (
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
