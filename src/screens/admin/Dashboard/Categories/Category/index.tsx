import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'react-feather';
import * as Models from '../../../../../models';
import * as S from './styled';
import Details from './Details';

type Props = {
  category: Models.Categories.Category;
};

const Category: React.FunctionComponent<Props> = (props: Props) => {
  const { category } = props;
  const [showDetails, setShowDetails] = useState(false);

  return (
    <S.Category onClick={() => setShowDetails(!showDetails)}>
      <S.Name>
        <S.NameText>{category.name}</S.NameText>
        <S.ExpandIcon>
          {showDetails ? <ChevronUp /> : <ChevronDown />}
        </S.ExpandIcon>
      </S.Name>
      {showDetails && <Details category={category} />}
    </S.Category>
  );
};

export default Category;
