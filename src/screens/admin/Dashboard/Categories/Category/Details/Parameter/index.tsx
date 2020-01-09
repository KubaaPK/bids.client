import React, { ReactElement } from 'react';
import * as Models from '../../../../../../../models';
import * as S from './styled';

type Props = {
  parameter: Models.Categories.NewParameter;
};

export default function Parameter(props: Props): ReactElement {
  const { parameter } = props;
  return (
    <S.Parameter>
      <S.Name>{parameter.name}</S.Name>
    </S.Parameter>
  );
}
