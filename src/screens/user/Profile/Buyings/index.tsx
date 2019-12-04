import React, { useEffect, useState } from 'react';
import * as Models from '../../../../models';
import * as S from './styled';
import * as Typography from '../../../../components/Typography';
import Options from '../Options';
import Navigation from '../../../../components/Navigation';
import Main from '../../../../components/Layout/Main';
import Buying from './Buying';
import { API_URL } from '../../../../consts';
import NoOfferPlaceholder from '../NoOfferPlaceholder';

const Buyings: React.FunctionComponent<{}> = () => {
  const [purchases, setPurchases] = useState<Models.Purchases.Purchase[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/sale/purchases`, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem('access-token')}`
      })
    })
      .then(res => res.json())
      .then(res => setPurchases(res));
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
            text="Kupione"
            font={{
              size: '2rem'
            }}
          />

          <S.Buyings>
            {purchases.length > 0 ? (
              purchases.map(buying => (
                <Buying buying={buying} key={buying.id} />
              ))
            ) : (
              <NoOfferPlaceholder text="Historia zakupów jest pusta. :(" />
            )}
          </S.Buyings>
        </S.Wrapper>
      </Main>
    </>
  );
};

export default Buyings;
