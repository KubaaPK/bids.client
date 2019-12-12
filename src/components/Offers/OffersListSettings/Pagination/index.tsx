/* eslint-disable react/jsx-one-expression-per-line */
import React, { FormEvent, useState } from 'react';
import * as S from './styled';

type Props = {
  offersAmount: number;
  handleNextPageChange: () => void;
  handlePageChange: (pageNumber: number) => void;
  currentPageNumber: number;
};

const Pagination: React.FunctionComponent<Props> = (props: Props) => {
  const {
    offersAmount,
    handleNextPageChange: _handleNextPageChange,
    handlePageChange,
    currentPageNumber
  } = props;

  const [pageNumber, setPageNumber] = useState<any>(currentPageNumber);

  const calculateNumberOfPages = (): number => {
    return Math.ceil(offersAmount / 30);
  };

  const handleChange = (ev: FormEvent<HTMLInputElement>): void => {
    if (ev.currentTarget.value === '') {
      setPageNumber('');
      handlePageChange(1);
    } else {
      setPageNumber(Number.parseInt(ev.currentTarget.value, 10));
      handlePageChange(Number.parseInt(ev.currentTarget.value, 10));
    }
  };

  const handlePageNumerInputBlur = (): void => {
    if (pageNumber === '') {
      setPageNumber(1);
    }
  };

  const handleNextPageChange = (): void => {
    if (calculateNumberOfPages() > currentPageNumber) {
      _handleNextPageChange();
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <S.Wrapper>
      <S.InputPageNumber
        type="text"
        min="1"
        max={calculateNumberOfPages()}
        value={pageNumber}
        onChange={handleChange}
        onBlur={handlePageNumerInputBlur}
      />
      <S.NumberOfPages>/ {calculateNumberOfPages()}</S.NumberOfPages>
      <S.NextPage onClick={handleNextPageChange} />
    </S.Wrapper>
  );
};

export default Pagination;
