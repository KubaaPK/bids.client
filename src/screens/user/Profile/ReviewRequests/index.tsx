import React from 'react';
import { connect } from 'react-redux';
import * as Models from '../../../../models';
import * as S from './styled';
import * as Typography from '../../../../components/Typography';
import Purchase from './Purchase';
import { State } from '../../../../redux/reducers';
import { WithLeftSidebarTemplate } from '../../../../ui/templates';
import { ProfileNavigation } from '../../../../ui/organisms';

type ReduxState = {
  reviewRequests: Models.Reviews.ReviewRequest[];
};

type Props = ReduxState;

const ReviewRequest: React.FunctionComponent<Props> = (props: Props) => {
  const { reviewRequests } = props;

  return (
    <WithLeftSidebarTemplate sideBar={<ProfileNavigation />}>
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
    </WithLeftSidebarTemplate>
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
