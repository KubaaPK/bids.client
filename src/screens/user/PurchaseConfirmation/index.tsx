/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import * as Models from '../../../models';
import * as S from './styled';
import * as Typography from '../../../components/Typography';
import Navigation from '../../../components/Navigation';
import Select from '../../../components/Forms/Select';
import Button from '../../../components/Button';

const PurchaseConfirmation: React.FunctionComponent<{}> = () => {
  const [offer, setOffer] = useState<Models.Offers.SingleOffer>();
  const [loadingOffer, setLoadingOffer] = useState<boolean>(true);
  const [boughtAmount, setBoughtAmount] = useState<number>();
  const { state } = useLocation();

  useEffect(() => {
    setOffer(state.offer);
    setBoughtAmount(state.amount);
    setLoadingOffer(false);
  }, [state]);

  const deliveryMethodSelectOptions = (): { value: any; label: string }[] => {
    return offer!.shippingRate.rates.map(rate => {
      return {
        value: rate.firstItemRate.amount,
        label: rate.deliveryMethod.id
      };
    });
  };

  return (
    <>
      <Navigation />
      <S.Main>
        <Typography.Title
          text="Potwierdzenie zakupu"
          font={{ size: '2.2rem' }}
        />
        {!loadingOffer && (
          <>
            <S.OfferSummary>
              <S.Seller>
                sprzedawca: <Link to="/">{offer!.seller.username}</Link>
              </S.Seller>
              <S.Offer>
                <S.Thumbnail src={offer!.images[0].url} />
                <S.Title>{offer!.name}</S.Title>
                <S.Price>{offer!.sellingMode.price.amount}zł</S.Price>
                <Select
                  label="Opcje dostawy"
                  options={deliveryMethodSelectOptions()}
                  id="deliveryMethod"
                  handleChange={() => {}}
                />
              </S.Offer>
            </S.OfferSummary>
            <S.PurchaseSummary>
              <S.ToPay>
                Do zapłaty:
                <S.TotalPurchasePrice>
                  {offer!.sellingMode.price.amount}zł
                </S.TotalPurchasePrice>
              </S.ToPay>
              <Button type="button" variant="full" text="Potwierdzam zakup" />
            </S.PurchaseSummary>
          </>
        )}
      </S.Main>
    </>
  );
};

export default PurchaseConfirmation;
