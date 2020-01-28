import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AjaxError } from 'rxjs/ajax';
import * as Models from '../../../models';
import * as S from './styled';
import { State } from '../../../redux/reducers';
import { fetchOffer } from '../../../redux/actions/offers/fetch-offer.action';
import { Navigation } from '../../../components/organisms';
import Images from './Images';
import Info from './Info';
import SellerReviews from './SellerReviews';
import Price from './Price';
import Buying from './Buying';
import Parameters from './Parameters';
import Description from './Description';
import {GenericTemplate} from "../../../ui/templates";

type OwnProps = {
  match?: any;
};

type ReduxState = {
  fetchingOffer: boolean;
  offer: Models.Offers.SingleOffer | undefined;
  fetchingOfferFailed: AjaxError | undefined;
};

type ReduxDispatch = {
  performFetchOffer: (offerId: string) => void;
};

type Props = OwnProps & ReduxState & ReduxDispatch;

const Offer: React.FunctionComponent<Props> = (props: Props) => {
  const { performFetchOffer, match, offer, fetchingOffer } = props;

  useEffect(() => {
    performFetchOffer(match!.params.id);
  }, [performFetchOffer, match]);

  return (
    <GenericTemplate>
      {!fetchingOffer && (
        <S.Main>
          <S.BasicInfoWrapper>
            <Images images={offer!.images} />
            <S.BasicInfo>
              <Info seller={offer!.seller.username} name={offer!.name} />
              <SellerReviews sellerId={offer!.seller.id} />
              <Price price={offer!.sellingMode.price.amount} />
              <Buying offer={offer!} />
            </S.BasicInfo>
          </S.BasicInfoWrapper>
          <Parameters parameters={offer!.parameters} />
          <Description description={offer!.description} />
        </S.Main>
      )}
    </GenericTemplate>
  );
};

const mapStateToProps = (state: State): ReduxState => {
  return {
    fetchingOffer: state.offers.fetchOffer.fetchingOffer,
    offer: state.offers.fetchOffer.offerFetched,
    fetchingOfferFailed: state.offers.fetchOffer.offerFetchingFailed
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performFetchOffer: fetchOffer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Offer);
