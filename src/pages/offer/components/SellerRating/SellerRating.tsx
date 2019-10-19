import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSellerRating } from '../../../../redux/actions/reviews/fetch-seller-rating.action';
import { FetchSellerRatingState } from '../../../../redux/reducers/reviews/fetch-seller-rating.reducer';
import { State } from '../../../../redux/reducers';
import { Wrapper } from './styled';

type ReduxProps = FetchSellerRatingState;
type Props = ReduxProps & { sellerId: string };
type Dispatch = {
  fetchSellerRating: (sellerId: string) => void;
};

type SellerRatingProps = Props & Dispatch;

const SellerRating: React.FunctionComponent<SellerRatingProps> = (
  props: SellerRatingProps
) => {
  const {
    fetchSellerRating,
    isRatingFetching,
    ratingFetchingFailed,
    ratingFetched,
    sellerId
  } = props;

  useEffect(() => {
    fetchSellerRating(sellerId);
  }, []);

  return (
    <>
      {isRatingFetching === true ? (
        'Loading...'
      ) : (
        <Wrapper>
          Zgodność z opisem:
          {ratingFetched!.ratings.complianceWithDescriptionAvg}
          Obsługa klienta:
          {ratingFetched!.ratings.customerServiceAvg}
          Czas dostawy:
          {ratingFetched!.ratings.deliveryTimeAvg}
          Koszt dostawy:
          {ratingFetched!.ratings.shippingCostAvg}
          Sprzedawcę poleca:
          {ratingFetched!.summary.positivesPercent}
        </Wrapper>
      )}
    </>
  );
};

const mapStateToProps = (state: State): ReduxProps => {
  return {
    isRatingFetching: state.reviews.fetchSellerRating.isRatingFetching,
    ratingFetched: state.reviews.fetchSellerRating.ratingFetched,
    ratingFetchingFailed: state.reviews.fetchSellerRating.ratingFetchingFailed
  };
};

const mapDispatchToProps: Dispatch = {
  fetchSellerRating
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SellerRating);
