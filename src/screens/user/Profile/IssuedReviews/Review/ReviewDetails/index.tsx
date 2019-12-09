import React from 'react';
import ReactStars from 'react-stars';
import * as Models from '../../../../../../models';
import * as S from './styled';

type Props = {
  review: Models.Reviews.IssuedReview['rating'];
  closeDetails: () => void;
};

const ReviewDetails: React.FunctionComponent<Props> = (props: Props) => {
  const { review, closeDetails } = props;

  return (
    <>
      <S.Outline>
        <S.Wrapper>
          <S.Close onClick={closeDetails} />
          <S.Title>Szczegóły oceny</S.Title>
          <S.ReviewSection>
            <S.SectionTitle>Zgodność z opisem</S.SectionTitle>
            <ReactStars
              size={25}
              value={review.complianceWithDescription}
              edit={false}
            />
          </S.ReviewSection>
          <S.ReviewSection>
            <S.SectionTitle>Obsługa klienta</S.SectionTitle>
            <ReactStars size={25} value={review.customerService} edit={false} />
          </S.ReviewSection>
          <S.ReviewSection>
            <S.SectionTitle>Czas dostawy</S.SectionTitle>
            <ReactStars size={25} value={review.deliveryTime} edit={false} />
          </S.ReviewSection>
          <S.ReviewSection>
            <S.SectionTitle>Koszt dostawy</S.SectionTitle>
            <ReactStars size={25} value={review.shippingCost} edit={false} />
          </S.ReviewSection>
          <S.BottomClose type="button" onClick={closeDetails}>
            Zamknij
          </S.BottomClose>
        </S.Wrapper>
      </S.Outline>
    </>
  );
};

export default ReviewDetails;
