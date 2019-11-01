import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AjaxError } from 'rxjs/ajax';
import { ClipLoader } from 'react-spinners';
import * as Models from '../../../../../models';
import * as S from './styled';
import * as Typo from '../../../../../components/Typography';
import { State } from '../../../../../redux/reducers';
import { fetchLatestOffers } from '../../../../../redux/actions/offers/fetch-latest-offers.action';
import LatestOffer from './components/LatestOffer';

type ReduxState = {
  fetchingLatestOffers: boolean;
  latestOffers: Models.Offers.Offer[];
  fetchingLatestOffersFailed: AjaxError | undefined;
};

type ReduxDispatch = {
  performFetchLatestOffers: () => void;
};

type Props = ReduxState & ReduxDispatch;

const LatestOffers: React.FunctionComponent<Props> = (props: Props) => {
  const {
    fetchingLatestOffers,
    performFetchLatestOffers,
    fetchingLatestOffersFailed,
    latestOffers
  } = props;

  useEffect(() => {
    performFetchLatestOffers();
  }, [performFetchLatestOffers]);

  return (
    <>
      {fetchingLatestOffers && (
        <S.LatestOffers>
          <ClipLoader />
        </S.LatestOffers>
      )}
      {!fetchingLatestOffers && (
        <S.Wrapper>
          <Typo.Title text="Ostatnio dodane" />
          <S.LatestOffers>
            {latestOffers.map((latestOffer: Models.Offers.Offer) => (
              <LatestOffer offer={latestOffer} key={latestOffer.id} />
            ))}
          </S.LatestOffers>
        </S.Wrapper>
      )}
      {fetchingLatestOffersFailed && null}
    </>
  );
};

const mapStateToProps = (state: State): ReduxState => {
  return {
    fetchingLatestOffers: state.offers.latestOffers.fetchingLatestOffers,
    latestOffers: state.offers.latestOffers.latestOffers,
    fetchingLatestOffersFailed:
      state.offers.latestOffers.fetchingLatestOffersFailed
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performFetchLatestOffers: fetchLatestOffers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestOffers);
