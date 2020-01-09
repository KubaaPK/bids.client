import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { Navigation } from '../../ui/organisms';
import { State } from '../../redux/reducers';

type ReduxState = {
  isUserAuthenticated: boolean;
  isUserAdmin: boolean;
};

type Props = ReduxState;

function NavigationContainer(props: Props): ReactElement {
  const { isUserAuthenticated } = props;

  return <Navigation isUserAuthenticated={isUserAuthenticated} />;
}

const mapStateToProps = (state: State): ReduxState => {
  return {
    isUserAuthenticated: state.auth.isAuthenticated,
    isUserAdmin: state.auth.isAdmin
  };
};

export default connect(mapStateToProps)(NavigationContainer);
