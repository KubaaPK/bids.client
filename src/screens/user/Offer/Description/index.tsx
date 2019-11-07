import React from 'react';
import * as Models from '../../../../models';
import * as S from './styled';
import * as Typo from '../../../../components/Typography';
import Section from './Section';

type Props = {
  description: Models.Offers.SingleOffer['description'];
};

const Description: React.FunctionComponent<Props> = (props: Props) => {
  const { description } = props;

  return (
    <S.Wrapper>
      <Typo.Title text="Opis" />
      {description.map((descr, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Section items={descr.items} key={index} />
      ))}
    </S.Wrapper>
  );
};

export default Description;
