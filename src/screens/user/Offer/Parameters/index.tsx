import React from 'react';
import * as Models from '../../../../models';
import Parameter from './Parameter';
import * as S from './styled';
import * as Typo from '../../../../components/Typography';

type Props = {
  parameters: Models.Offers.SingleOffer['parameters'];
};

const Parameters: React.FunctionComponent<Props> = (props: Props) => {
  const { parameters } = props;
  return (
    <S.Wrapper>
      <Typo.Title text="Parametry" />
      <S.List>
        {parameters &&
          parameters.map((parameter, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Parameter parameter={parameter} key={index} />
          ))}
      </S.List>
    </S.Wrapper>
  );
};

export default Parameters;
