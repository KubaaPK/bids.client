import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { Search } from 'react-feather';
import { connect } from 'react-redux';
import { State } from '../../../redux/reducers';
import { signOut } from '../../../redux/actions/auth/auth.actions';
import * as S from './styled';
import * as Models from '../../../models';
import { deleteTokensFromLocalStorage } from '../../../utils/auth';
import { fetchReviewRequests } from '../../../redux/actions/reviews/fetch-review-requests.action';
import { AuthenticatedMenu, UnauthenticatedMenu } from '../../molecules';

type ReduxProps = {
  isAuthneticated: boolean;
  isAdmin: boolean;
  displayName: string;
  fetchedNotificationRequests: Models.Reviews.ReviewRequest[];
};

type ReduxDispatch = {
  performSignOut(): void;
  performFetchReviewRequests(): void;
};

type NavigationProps = ReduxProps & ReduxDispatch;

const Navigation: React.FunctionComponent<NavigationProps> = (
  props: NavigationProps
) => {
  const {
    isAuthneticated,
    performSignOut,
    performFetchReviewRequests,
    isAdmin,
    displayName,
    fetchedNotificationRequests
  } = props;

  const [notificationCount, setNotificationCount] = useState<number>(0);

  useEffect(() => {
    if (isAuthneticated) {
      performFetchReviewRequests();
    }
  }, [isAuthneticated, performFetchReviewRequests]);

  useEffect(() => {
    if (fetchedNotificationRequests) {
      setNotificationCount((fetchedNotificationRequests as any).length);
    }
  }, [fetchedNotificationRequests]);

  function handleSignOut(): void {
    performSignOut();
    firebase.auth().signOut();
    deleteTokensFromLocalStorage();
  }

  return (
    <S.Navbar>
      <S.Logo to="/">bids</S.Logo>
      {isAuthneticated ? (
        <AuthenticatedMenu
          signOut={handleSignOut}
          isAdmin={isAdmin}
          displayName={displayName}
          notificationCount={notificationCount}
        />
      ) : (
        <UnauthenticatedMenu />
      )}
      <S.SearchBox>
        <S.SearchInput type="text" />
        <S.SearchButton type="button">
          {window.innerWidth >= 1024 ? (
            <span>Szukaj</span>
          ) : (
            <Search size="2rem" />
          )}
        </S.SearchButton>
      </S.SearchBox>
    </S.Navbar>
  );
};

const mapStateToProps = (state: State): ReduxProps => {
  return {
    isAuthneticated: state.auth.isAuthenticated,
    isAdmin: state.auth.isAdmin,
    displayName: state.auth.displayName,
    fetchedNotificationRequests:
      state.reviews.fetchReviewRequests.fetchedReviewRequests
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performSignOut: signOut,
  performFetchReviewRequests: fetchReviewRequests
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
