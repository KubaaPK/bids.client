/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import * as Models from '../../../../../models';
import * as S from './styled';
import { API_URL } from '../../../../../consts';

const Fee: React.FunctionComponent<{}> = () => {
  const [fees, setFees] = useState<Models.Fees.Fee[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/pricing/fee`, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem('access-token')}`
      })
    })
      .then(res => res.json())
      .then(res => setFees(res));
  }, []);

  const calculateFee = (): string => {
    if (fees.length > 0) {
      return `-${fees
        .filter(fee => fee.status === 'UN_PAID')
        .reduce((sum, { fee }) => sum + Number.parseFloat(fee.amount), 0)
        .toFixed(2)}`;
    }
    return '0,00';
  };

  return (
    <S.Wrapper>
      <S.SubTitle>Bieżące saldo</S.SubTitle>
      <S.Fee debt={Number.parseFloat(calculateFee()) < 0}>
        {calculateFee()}zł
      </S.Fee>
    </S.Wrapper>
  );
};

export default Fee;
