import React, { useState, useEffect } from 'react';
import * as Models from '../../../../models';
import * as S from './styled';
import Options from '../Options';
import Navigation from '../../../../components/Navigation';
import Main from '../../../../components/Layout/Main';
import * as Typography from '../../../../components/Typography';
import Sale from './Sale';
import NoOfferPlaceoholder from '../NoOfferPlaceholder';
import { API_URL } from '../../../../consts';

const Sales: React.FunctionComponent<{}> = () => {
  const [sales, setSales] = useState<Models.Sales.Sale[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/sale/sales`, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem('access-token')}`
      })
    })
      .then(res => res.json())
      .then(res => {
        setSales(res);
      });
  }, []);

  return (
    <>
      <Navigation />
      <Main
        props={{
          desktopDirection: 'row'
        }}
      >
        <Options />
        <S.Wrapper>
          <Typography.Title
            text="Sprzedane"
            font={{
              size: '2rem'
            }}
          />
          <S.Sales>
            {sales.length > 0 ? (
              sales.map(sale => <Sale sale={sale} key={sale.id} />)
            ) : (
              <NoOfferPlaceoholder text="Historia sprzedaży jest pusta. :(" />
            )}
          </S.Sales>
        </S.Wrapper>
      </Main>
    </>
  );
};

export default Sales;
