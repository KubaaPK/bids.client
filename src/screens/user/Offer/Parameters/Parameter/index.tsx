import React from 'react';
import * as Models from '../../../../../models';
import * as S from './styled';

type Props = {
  parameter: Models.Offers.SingleOffer['parameters'][0];
};

const Parameter: React.FunctionComponent<Props> = (props: Props) => {
  const { parameter } = props;

  return (
    <S.Element>
      <S.Name>{`${parameter.name}:`}</S.Name>
      <S.Value>{parameter.value}</S.Value>
    </S.Element>
  );
};

export default Parameter;
