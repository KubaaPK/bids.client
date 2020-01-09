import React from 'react';
import * as S from './styled';

type Props = {
  crumbs: (string | number)[];
};

export default function Breadcrumb(props: Props): React.ReactElement {
  const { crumbs } = props;

  return (
    <S.Breadcrumbs>
      <S.Label>Kategoria</S.Label>
      {crumbs.map((breadcrumb, index: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <S.Breadcrumb key={index}>{breadcrumb}</S.Breadcrumb>
      ))}
    </S.Breadcrumbs>
  );
}
