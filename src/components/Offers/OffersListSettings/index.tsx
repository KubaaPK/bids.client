import React, { useState } from 'react';
import * as S from './styled';

type Props = {
  setOfferListDisplayType: (style: 'list' | 'grid') => void;
};

const OffersListSettings: React.FunctionComponent<Props> = (props: Props) => {
  const { setOfferListDisplayType } = props;

  const [offerListStyle, setOfferListStyle] = useState(
    localStorage.getItem('offer-list-display-style')
  );

  const handleOfferListDisplayTypeChange = (style: 'list' | 'grid'): void => {
    setOfferListStyle(style);
    localStorage.setItem('offer-list-display-style', style);
    setOfferListDisplayType(style);
  };

  return (
    <S.Wrapper>
      {offerListStyle === 'list' ? (
        <S.IconGrid onClick={() => handleOfferListDisplayTypeChange('grid')} />
      ) : (
        <S.IconList onClick={() => handleOfferListDisplayTypeChange('list')} />
      )}
    </S.Wrapper>
  );
};

export default OffersListSettings;
