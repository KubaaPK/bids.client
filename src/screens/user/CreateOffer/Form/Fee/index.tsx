import React, { useState, useEffect } from 'react';
import * as Models from '../../../../../models';
import * as S from './styled';
import { API_URL } from '../../../../../consts';

type Props = {
  categoryName?: string;
  sellingMode?: Models.Offers.SingleOffer['sellingMode'];
  productAmount?: number;
};

const Fee: React.FunctionComponent<Props> = (props: Props) => {
  const { categoryName, sellingMode, productAmount = 1 } = props;
  const [fee, setFee] = useState<Models.Fees.Fee>();
  const [fetchingFee, setFetchingFee] = useState<boolean>(true);

  useEffect(() => {
    if (
      categoryName !== undefined &&
      sellingMode !== undefined &&
      sellingMode !== null &&
      sellingMode.price !== undefined &&
      sellingMode.price.amount !== undefined
    ) {
      fetch(`${API_URL}/pricing/fee/calculate`, {
        method: 'POST',
        body: JSON.stringify({
          category: categoryName,
          sellingMode: {
            format: sellingMode.format,
            price: sellingMode.price
          },
          amount: productAmount
        }),
        headers: new Headers({
          Authorization: `Bearer ${localStorage.getItem('access-token')}`,
          'Content-Type': 'application/json'
        })
      })
        .then(res => res.json())
        .then(res => {
          setFee(res);
          setFetchingFee(false);
        });
    }
  }, [categoryName, sellingMode, productAmount]);

  return (
    <S.Wrapper>
      <S.Table>
        <thead>
          <tr>
            <th>opłata</th>
            <th>naliczenie</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>wystawienie przedmiotu</td>
            <td>przy dodaniu oferty</td>
            <td>0.00 zł</td>
          </tr>
          {!fetchingFee && (
            <tr>
              <td>prowizja od sprzedaży</td>
              <td>przy sprzedaży przedmiotu</td>
              <td>{fee!.amount}</td>
            </tr>
          )}
        </tbody>
      </S.Table>
    </S.Wrapper>
  );
};

export default Fee;
