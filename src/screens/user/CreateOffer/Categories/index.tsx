import React from 'react';
import * as Models from '../../../../models';
import * as S from './styled';

type Props = {
  categories: Models.Categories.Category[];
  close: () => void;
  selectCategory: (category: Models.Categories.Category) => void;
};

const Categories: React.FunctionComponent<Props> = (props: Props) => {
  const { categories, close, selectCategory } = props;
  return (
    <S.Outer>
      <S.Wrapper>
        <S.Categories>
          <S.Title>Wybierz kategorię</S.Title>
          {categories.map((category, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <S.Category key={index} onClick={() => selectCategory(category)}>
              {category.name}
            </S.Category>
          ))}
        </S.Categories>
        <S.Close onClick={close}>Zamknij</S.Close>
      </S.Wrapper>
    </S.Outer>
  );
};

export default Categories;
