import React, { ReactElement } from 'react';
import * as S from './styled';

type Props = {
  handleClick: () => void;
};

export default function ShowCategoryButton(props: Props): ReactElement {
  const { handleClick } = props;

  return (
    <S.ShowCategoryButton onClick={handleClick}>
      <S.Icon />
      <S.Text>Kategorie</S.Text>
    </S.ShowCategoryButton>
  );
}
