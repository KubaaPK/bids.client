import React from 'react';
import { Link } from 'react-router-dom';
import { Category as CategoryModel } from '../../../../../models/category';
import { CategoryStyled } from './styled';
import { colors } from '../../../../../shared/styles/vars';

type Props = {
  category: CategoryModel;
  index: number;
};

const Category: React.FunctionComponent<Props> = (props: Props) => {
  const { category } = props;

  return (
    <>
      <CategoryStyled color={colors.CATEGORIES_ACCENT_COLORS[0]}>
        <Link to="/">{category.name}</Link>
      </CategoryStyled>
    </>
  );
};

export default Category;
