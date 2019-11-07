import React from 'react';
import * as Models from '../../../../../../../models';
import * as S from './styled';

type Props = {
  parameter: Models.Categories.NewParameter;
};

const Parameter: React.FunctionComponent<Props> = (props: Props) => {
  const { parameter } = props;
  return (
    <S.Parameter>
      <S.Name>{parameter.name}</S.Name>
    </S.Parameter>
  );
};

export default Parameter;
