import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { Navigation } from '../../ui/organisms';
import { State } from '../../redux/reducers';
import { fetchReviewRequests } from '../../redux/actions/reviews/fetch-review-requests.action';

type ReduxState = {
  isUserAuthenticated: boolean;
  isUserAdmin: boolean;
};

type ReduxDispatch = {
  performFetchReviewRequest: () => void;
};

type Props = ReduxState & ReduxDispatch;

function NavigationContainer(props: Props): ReactElement {
  const { isUserAuthenticated, isUserAdmin, performFetchReviewRequest } = props;

  React.useEffect(() => {
    performFetchReviewRequest();
  }, [performFetchReviewRequest]);

  return (
    <Navigation
      isUserAuthenticated={isUserAuthenticated}
      isUserAdmin={isUserAdmin}
    />
  );
}

const mapStateToProps = (state: State): ReduxState => {
  return {
    isUserAuthenticated: state.auth.isAuthenticated,
    isUserAdmin: state.auth.isAdmin
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performFetchReviewRequest: fetchReviewRequests
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationContainer);
