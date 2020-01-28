/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation, Link, useHistory } from 'react-router-dom';
import { AjaxResponse } from 'rxjs/ajax';
import * as Models from '../../../models';
import * as S from './styled';
import * as Typography from '../../../components/Typography';
import { Navigation } from '../../../components/organisms';
import Select from '../../../components/Forms/Select';
import Button from '../../../components/Button';
import { State } from '../../../redux/reducers';
import { newPurchase } from '../../../redux/actions/purchases/new-purchase.action';
import {GenericTemplate} from "../../../ui/templates";
import {Heading} from "../../../ui/atoms";

type ReduxState = {
  purchaseProcessed: AjaxResponse | undefined;
  processingPurchase: boolean;
};

type ReduxDispatch = {
  performNewPurchase: (newPurchase: Models.Purchases.NewPurchase) => void;
};

type Props = ReduxState & ReduxDispatch;

const PurchaseConfirmation: React.FunctionComponent<Props> = (props: Props) => {
  const { performNewPurchase } = props;

  const [offer, setOffer] = useState<Models.Offers.SingleOffer>();
  const [selectedShippingRate, selectShippingRate] = useState<
    Models.Offers.SingleOffer['shippingRate']['rates'][0]
  >();
  const [loadingOffer, setLoadingOffer] = useState<boolean>(true);
  const [boughtAmount, setBoughtAmount] = useState<number>();
  const { state } = useLocation();
  const { push } = useHistory();

  useEffect(() => {
    setOffer(state.offer);
    selectShippingRate(state.offer.shippingRate.rates[0]);
    setBoughtAmount(state.amount);
    setLoadingOffer(false);
  }, [state]);

  const deliveryMethodSelectOptions = (): { value: any; label: string }[] => {
    return offer!.shippingRate.rates.map(rate => {
      return {
        value: rate.firstItemRate.amount,
        label: rate.deliveryMethod.name
      };
    });
  };

  const confirmPurchase = (): void => {
    performNewPurchase({
      offerId: offer!.id,
      productAmount: boughtAmount!
    });

    push('/');
  };

  return (
    <GenericTemplate>
      <S.Main>
        <Heading text="Potwierdzenie zakupu" level={4} />
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
                  {offer!.sellingMode.price.amount}zł +{' '}
                  {selectedShippingRate!.firstItemRate.amount}zł
                </S.TotalPurchasePrice>
              </S.ToPay>
              <Button
                type="button"
                variant="full"
                text="Potwierdzam zakup"
                handleClick={confirmPurchase}
              />
            </S.PurchaseSummary>
          </>
        )}
      </S.Main>
    </GenericTemplate>
  );
};

const mapStateToProps = (state: State): ReduxState => {
  return {
    purchaseProcessed: state.purchases.newPurchase.purchaseProcessed,
    processingPurchase: state.purchases.newPurchase.processingPurchase
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performNewPurchase: newPurchase
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchaseConfirmation);
