import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AjaxError } from 'rxjs/ajax';
// @ts-ignore
import ReactStars from 'react-stars';
import * as Models from '../../../../models';
import * as S from './styled';
import { State } from '../../../../redux/reducers';
import { fetchSellerRating } from '../../../../redux/actions/reviews/fetch-seller-rating.action';

type OwnProps = {
  sellerId: string;
};

type ReduxState = {
  fetchingReviews: boolean;
  reviews: Models.Reviews.Rating | undefined;
  fetchingReviewsFailed: AjaxError | undefined;
};

type ReduxDispatch = {
  performFetchReviews: (sellerId: string) => void;
};

type Props = OwnProps & ReduxState & ReduxDispatch;

const SellerReviews: React.FunctionComponent<Props> = (props: Props) => {
  const { sellerId, fetchingReviews, reviews, performFetchReviews } = props;

  useEffect(() => {
    performFetchReviews(sellerId);
  }, [performFetchReviews, sellerId]);

  const rating = (): number => {
    return (
      Object.values(reviews!.ratings).reduce((prev, curr) => prev + curr) / 4
    );
  };

  const fixedRating = (): string => {
    return (
      Object.values(reviews!.ratings).reduce((prev, curr) => prev + curr) / 4
    ).toFixed(2);
  };

  return (
    <S.Wrapper>
      {!fetchingReviews && (
        <>
          <S.PercentageRating>
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            {reviews!.summary.positivesPercent} osób poleca sprzedawcę
          </S.PercentageRating>
          <S.RatingNumber>{fixedRating()}</S.RatingNumber>
          <ReactStars count={5} value={rating()} half size={24} edit={false} />
        </>
      )}
    </S.Wrapper>
  );
};

const mapStateToProps = (state: State): ReduxState => {
  return {
    fetchingReviews: state.reviews.fetchSellerRating.fetchingRating,
    reviews: state.reviews.fetchSellerRating.ratingFetched,
    fetchingReviewsFailed: state.reviews.fetchSellerRating.ratingFetchingFailed
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performFetchReviews: fetchSellerRating
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SellerReviews);
