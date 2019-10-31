import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import * as Models from '../../../../../../../models';

type Props = {
  category: Models.Categories.Category;
};

const Category: React.FunctionComponent<Props> = (props: Props) => {
  const { category } = props;
  return (
    <S.Category>
      <Link to="/">{category.name}</Link>
    </S.Category>
  );
};

export default Category;
