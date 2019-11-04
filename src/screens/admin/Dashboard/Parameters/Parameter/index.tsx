import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'react-feather';
import * as Models from '../../../../../models';
import * as S from './styled';
import Details from './Details';

type Props = {
  parameter: Models.Categories.Parameter;
};

const Parameter: React.FunctionComponent<Props> = (props: Props) => {
  const { parameter } = props;
  const [showDetails, setShowDetails] = useState(false);

  return (
    <S.Parameter>
      <S.Name onClick={() => setShowDetails(!showDetails)}>
        <S.NameText>{parameter.name}</S.NameText>
        <S.ExpandIcon>
          {showDetails ? <ChevronUp /> : <ChevronDown />}
        </S.ExpandIcon>
      </S.Name>
      {showDetails && <Details parameter={parameter} />}
    </S.Parameter>
  );
};

export default Parameter;
