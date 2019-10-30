import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AjaxError } from 'rxjs/ajax';
import { OfferModel } from '../../../../../models/offer';
import { State } from '../../../../../redux/reducers';
import { fetchLatestOffers } from '../../../../../redux/actions/offers/fetch-latest-offers.action';
import { LatestOffersWrapper, Title } from './styled';
import LatestOffer from './LatestOffer';

type ReduxProps = {
  areLatestOffersFetching: boolean;
  fetchedOffers: OfferModel[] | undefined;
  fetchingOffersFailed: AjaxError | undefined;
};

type ReduxDispatch = {
  fetchLatestOffers(): void;
};

type Props = ReduxProps & ReduxDispatch;

const LatestOffers: React.FunctionComponent<Props> = (props: Props) => {
  const {
    areLatestOffersFetching,
    fetchLatestOffers,
    fetchingOffersFailed,
    fetchedOffers
  } = props;

  useEffect(() => {
    fetchLatestOffers();
  }, []);

  return areLatestOffersFetching === true ? null : (
    <LatestOffersWrapper>
      <Title>Ostatnio dodane oferty</Title>
      {fetchedOffers!.map((offer: OfferModel, index: number) => (
        <LatestOffer key={index} offer={offer} />
      ))}
    </LatestOffersWrapper>
  );
};

const mapStateToProps = (state: State): ReduxProps => {
  return {
    areLatestOffersFetching: state.offers.latestOffers.areLatestOffersFetching,
    fetchedOffers: (state.offers.latestOffers
      .latestOffersFetched as unknown) as OfferModel[],
    fetchingOffersFailed: state.offers.latestOffers.latestOffersFetchingFailed
  };
};

const mapDispatchToProps: ReduxDispatch = {
  fetchLatestOffers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestOffers);
