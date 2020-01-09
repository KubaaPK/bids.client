import React, { useState } from 'react';
import * as S from './styled';
import { Select, OffersPagination } from '..';

type Props = {
  setOfferListDisplayType: (style: 'list' | 'grid') => void;
  handleSort: (opts: any) => void;
  offersAmount: number;
  handlePageChange: (pageNumber: number) => void;
  handleNextPageChange: () => void;
  currentPageNumber: number;
};

export default function OffersListSettings(props: Props) {
  const {
    setOfferListDisplayType,
    handleSort,
    offersAmount,
    handleNextPageChange,
    handlePageChange,
    currentPageNumber
  } = props;

  const [offerListStyle, setOfferListStyle] = useState(
    localStorage.getItem('offer-list-display-style')
  );

  function handleOfferListDisplayTypeChange(style: 'list' | 'grid'): void {
    setOfferListStyle(style);
    localStorage.setItem('offer-list-display-style', style);
    setOfferListDisplayType(style);
  }

  function offerSortSelectOptions(): { value: any; label: string }[] {
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
  }

  function handleSortChange(ev: React.FormEvent<HTMLSelectElement>): void {
    handleSort({ order: ev.currentTarget.value });
  }

  return (
    <S.Wrapper>
      {offerListStyle === 'list' ? (
        <S.IconColumns
          onClick={() => handleOfferListDisplayTypeChange('grid')}
        />
      ) : (
        <S.IconList onClick={() => handleOfferListDisplayTypeChange('list')} />
      )}
      <Select
        handleChange={handleSortChange}
        options={offerSortSelectOptions()}
        id="offerSort"
        label=""
        defaultSelectValue="DESC"
      />
      <OffersPagination
        offersAmount={offersAmount}
        handleNextPageChange={handleNextPageChange}
        handlePageChange={handlePageChange}
        currentPageNumber={currentPageNumber}
      />
    </S.Wrapper>
  );
}
