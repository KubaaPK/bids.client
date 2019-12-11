import React from 'react';
import { connect } from 'react-redux';
import * as Models from '../../../../models';
import * as S from './styled';
import * as Typography from '../../../../components/Typography';
import Navigation from '../../../../components/Navigation';
import Main from '../../../../components/Layout/Main';
import Options from '../Options';
import Purchase from './Purchase';
import { State } from '../../../../redux/reducers';

type ReduxState = {
  reviewRequests: Models.Reviews.ReviewRequest[];
};

type Props = ReduxState;

const ReviewRequest: React.FunctionComponent<Props> = (props: Props) => {
  const { reviewRequests } = props;

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
            text="Wystaw ocenę"
            font={{
              size: '2rem'
            }}
          />
          <S.ReviewRequests>
            {reviewRequests.map(reviewRequest => (
              <Purchase reviewRequest={reviewRequest} key={reviewRequest.id} />
            ))}
          </S.ReviewRequests>
        </S.Wrapper>
      </Main>
    </>
  );
};

const mapStateToProps = (state: State): ReduxState => {
  return {
    reviewRequests: state.reviews.fetchReviewRequests.fetchedReviewRequests
  };
};

export default connect(
  mapStateToProps,
  {}
)(ReviewRequest);
