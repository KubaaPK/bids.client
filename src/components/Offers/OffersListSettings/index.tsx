import React, { useState } from 'react';
import * as S from './styled';
import Select from '../../Forms/Select';

type Props = {
  setOfferListDisplayType: (style: 'list' | 'grid') => void;
  handleSort: (opts: any) => void;
};

const OffersListSettings: React.FunctionComponent<Props> = (props: Props) => {
  const { setOfferListDisplayType, handleSort } = props;

  const [offerListStyle, setOfferListStyle] = useState(
    localStorage.getItem('offer-list-display-style')
  );

  const handleOfferListDisplayTypeChange = (style: 'list' | 'grid'): void => {
    setOfferListStyle(style);
    localStorage.setItem('offer-list-display-style', style);
    setOfferListDisplayType(style);
  };

  const offerSortSelectOptions = (): { value: any; label: string }[] => {
    return [
      {
        label: 'Data dodania: od najstarszej',
        value: 'ASC'
      },
      {
        label: 'Data dodania: od najnowszej',
        value: 'DESC'
      }
    ];
  };

  const handleSortChange = (ev: React.FormEvent<HTMLSelectElement>): void => {
    handleSort({ order: ev.currentTarget.value });
  };

  return (
    <S.Wrapper>
      {offerListStyle === 'list' ? (
        <S.IconGrid onClick={() => handleOfferListDisplayTypeChange('grid')} />
      ) : (
        <S.IconList onClick={() => handleOfferListDisplayTypeChange('list')} />
      )}
      <Select
        handleChange={handleSortChange}
        options={offerSortSelectOptions()}
        id="offerSort"
        label=""
      />
    </S.Wrapper>
  );
};

export default OffersListSettings;
