import React, { useState } from 'react';
import ReactStars from 'react-stars';
import * as Models from '../../../../../models';
import * as S from './styled';
import Button from '../../../../../components/Button';
import ReviewDetails from './ReviewDetails';

type Props = {
  review: Models.Reviews.IssuedReview;
};

const Review: React.FunctionComponent<Props> = (props: Props) => {
  const { review } = props;

  const [showDetails, setShowDetails] = useState<boolean>(false);

  const calculateAvgRate = (): number => {
    return Object.values(review.rating).reduce((prev, acc) => prev + acc) / 4;
  };

  return (
    <S.Review>
      {showDetails && (
        <ReviewDetails
          review={review.rating}
          closeDetails={() => setShowDetails(false)}
        />
      )}
      <S.Thumbnail src={review.purchase.offer.images} />
      <S.Title>{review.purchase.offer.name}</S.Title>
      <S.Ratings>
        <ReactStars value={calculateAvgRate()} edit={false} />
        <Button
          text="Szczegóły"
          type="button"
          variant="blank"
          handleClick={() => setShowDetails(true)}
        />
      </S.Ratings>
    </S.Review>
  );
};

export default Review;
