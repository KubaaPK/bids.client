import React, { useState, useEffect } from 'react';
import * as Models from '../../../../models';
import * as S from './styled';
import Navigation from '../../../../components/Navigation';
import Main from '../../../../components/Layout/Main';
import Options from '../Options';
import Review from './Review';
import * as Typography from '../../../../components/Typography';
import { API_URL } from '../../../../consts';

const IssuedReview: React.FunctionComponent<{}> = () => {
  const [issuedReviews, setIssuedReviews] = useState<
    Models.Reviews.IssuedReview[]
  >([]);

  useEffect(() => {
    fetch(`${API_URL}/sale/reviews/issued`, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem('access-token')}`
      })
    })
      .then(res => res.json())
      .then(res => setIssuedReviews(res));
  }, []);

  return (
    <>
      <Navigation />
      <Main
        props={{
          desktopDirection: 'row'
        }}
      >
        <Options />
        <S.Wrapper>
          <Typography.Title
            text="Wystawione oceny"
            font={{
              size: '2rem'
            }}
          />

          <S.Reviews>
            {issuedReviews.map(review => (
              <Review review={review} key={review.id} />
            ))}
          </S.Reviews>
        </S.Wrapper>
      </Main>
    </>
  );
};

export default IssuedReview;
