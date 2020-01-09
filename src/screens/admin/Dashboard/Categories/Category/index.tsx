import React, { useState, ReactElement } from 'react';
import { ChevronUp, ChevronDown } from 'react-feather';
import * as Models from '../../../../../models';
import * as S from './styled';
import Details from './Details';

type Props = {
  category: Models.Categories.Category;
};

export default function Category(props: Props): ReactElement {
  const { category } = props;
  const [showDetails, setShowDetails] = useState(false);

  return (
    <S.Category>
      <S.Name onClick={() => setShowDetails(!showDetails)}>
        <S.NameText>{category.name}</S.NameText>
        <S.ExpandIcon>
          {showDetails ? <ChevronUp /> : <ChevronDown />}
        </S.ExpandIcon>
      </S.Name>
      {showDetails && <Details category={category} />}
    </S.Category>
  );
}
