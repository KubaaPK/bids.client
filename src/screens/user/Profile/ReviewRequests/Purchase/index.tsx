/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import * as Models from '../../../../../models';
import * as S from './styled';
import Button from '../../../../../components/Button';
import AddReviewForm from './AddReviewForm';

type Props = {
  reviewRequest: Models.Reviews.ReviewRequest;
};

const Purchase: React.FunctionComponent<Props> = (props: Props) => {
  const { reviewRequest } = props;
  const [showAddReviewForm, setShowAddReviewForm] = useState<boolean>(false);

  return (
    <S.Purchase>
      {showAddReviewForm && (
        <AddReviewForm
          purchaseId={reviewRequest.purchase.id}
          closeForm={() => setShowAddReviewForm(false)}
        />
      )}
      <S.Thumbnail src={reviewRequest.purchase.offer.thumbnail[0].url} />
      <S.Title>{reviewRequest.purchase.offer.name}</S.Title>
      <Button
        text="OCEŃ"
        type="button"
        variant="blank"
        handleClick={() => setShowAddReviewForm(true)}
      />

      <S.Bottom>
        <S.Price>
          Cena: {reviewRequest.purchase.offer.sellingMode.price.amount}zł
        </S.Price>
      </S.Bottom>
    </S.Purchase>
  );
};

export default Purchase;
