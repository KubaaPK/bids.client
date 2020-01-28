import React, { useState, useEffect } from 'react';
import * as Models from '../../../../models';
import * as S from './styled';
import Options from '../Options';
import { Navigation } from '../../../../components/organisms';
import Main from '../../../../components/Layout/Main';
import * as Typography from '../../../../components/Typography';
import Sale from './Sale';
import NoOfferPlaceoholder from '../NoOfferPlaceholder';
import { API_URL } from '../../../../consts';
import { WithLeftSidebarTemplate } from '../../../../ui/templates';
import { ProfileNavigation } from '../../../../ui/organisms';

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
    <WithLeftSidebarTemplate sideBar={<ProfileNavigation />}>
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
    </WithLeftSidebarTemplate>
  );
};

export default Sales;
