import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { AjaxResponse } from 'rxjs/ajax';
import ReactStars from 'react-stars';
import * as Forms from '../../../../../../components/Forms';
import * as Models from '../../../../../../models';
import * as S from './styled';
import Button from '../../../../../../components/Button';
import { State } from '../../../../../../redux/reducers';
import { fetchReviewRequests } from '../../../../../../redux/actions/reviews/fetch-review-requests.action';
import { addReview } from '../../../../../../redux/actions/reviews/add-review.action';

type ReduxState = {
  reviewAdded: AjaxResponse | undefined;
};

type ReduxDispatch = {
  performAddReview: (newReview: Models.Reviews.NewReview) => void;
  performFetchReviewRequests: () => void;
};

type OwnProps = {
  purchaseId: string;
  closeForm: () => void;
};

type Props = OwnProps & ReduxState & ReduxDispatch;

const AddReviewForm: React.FunctionComponent<Props> = (props: Props) => {
  const {
    purchaseId,
    closeForm,
    performAddReview,
    performFetchReviewRequests,
    reviewAdded
  } = props;
  const [newRating, setNewRating] = useState<Models.Reviews.NewReview>({
    purchaseId
  } as any);

  useEffect(() => {
    if (reviewAdded) {
      performFetchReviewRequests();
    }
  }, [reviewAdded, performFetchReviewRequests]);

  const onComplianceWithDescriptionRatingChange = (
    ratingValue: number
  ): void => {
    setNewRating({
      ...newRating,
      rating: {
        ...newRating.rating,
        complianceWithDescription: ratingValue
      }
    } as any);
  };

  const onCustomServiceRatingChange = (ratingValue: number): void => {
    setNewRating({
      ...newRating,
      rating: {
        ...newRating.rating,
        customerService: ratingValue
      }
    } as any);
  };

  const onDeliveryTimeRatingChange = (ratingValue: number): void => {
    setNewRating({
      ...newRating,
      rating: {
        ...newRating.rating,
        deliveryTime: ratingValue
      }
    } as any);
  };

  const onShippingCostRatingChange = (ratingValue: number): void => {
    setNewRating({
      ...newRating,
      rating: {
        ...newRating.rating,
        shippingCost: ratingValue
      }
    } as any);
  };

  const onRateTypeClick = (
    rateType: Models.Reviews.NewReview['rateType']
  ): void => {
    setNewRating({
      ...newRating,
      rating: {
        ...newRating.rating
      },
      rateType
    } as any);
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();
    performAddReview(newRating);
  };

  return (
    <S.Outline>
      <Forms.Form handleSubmit={handleSubmit}>
        <S.Close onClick={closeForm} />
        <S.ReviewSection>
          <S.SectionTitle>Zgodność z opisem</S.SectionTitle>
          <ReactStars
            size={25}
            onChange={onComplianceWithDescriptionRatingChange}
            value={
              newRating &&
              newRating.rating &&
              newRating.rating.complianceWithDescription
            }
          />
        </S.ReviewSection>
        <S.ReviewSection>
          <S.SectionTitle>Obsługa klienta</S.SectionTitle>
          <ReactStars
            size={25}
            onChange={onCustomServiceRatingChange}
            value={
              newRating && newRating.rating && newRating.rating.customerService
            }
          />
        </S.ReviewSection>
        <S.ReviewSection>
          <S.SectionTitle>Czas dostawy</S.SectionTitle>
          <ReactStars
            size={25}
            onChange={onDeliveryTimeRatingChange}
            value={
              newRating && newRating.rating && newRating.rating.deliveryTime
            }
          />
        </S.ReviewSection>
        <S.ReviewSection>
          <S.SectionTitle>Koszt dostawy</S.SectionTitle>
          <ReactStars
            size={25}
            onChange={onShippingCostRatingChange}
            value={
              newRating && newRating.rating && newRating.rating.shippingCost
            }
          />
        </S.ReviewSection>
        <S.Thumbs>
          <S.ThumbsTitle>Czy polecasz tego sprzedawcę?</S.ThumbsTitle>
          <S.ThumbUp
            onClick={() => onRateTypeClick('POSITIVE')}
            selected={newRating.rateType}
          />
          <S.ThumbDown
            onClick={() => onRateTypeClick('NEGATIVE')}
            selected={newRating.rateType}
          />
        </S.Thumbs>
        <Button text="Dodaj ocenę" type="submit" variant="full" />
        <S.BottomClose type="button" onClick={closeForm}>
          Zamknij
        </S.BottomClose>
      </Forms.Form>
    </S.Outline>
  );
};

const mapStateToProps = (state: State): ReduxState => {
  return {
    reviewAdded: state.reviews.addReview.reviewAdded
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performAddReview: addReview,
  performFetchReviewRequests: fetchReviewRequests
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddReviewForm);
