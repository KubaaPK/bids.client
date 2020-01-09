import React from 'react';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import * as Models from '../../models';
import { State } from '../../redux/reducers';
import { signIn } from '../../redux/actions/auth/auth.actions';
import { SignInForm } from '../../ui/organisms';

type ReduxState = {
  signedIn: firebase.auth.UserCredential | null;
  signingInFailed: string | undefined;
};

type ReduxDispatch = {
  performSignIn(credentials: Models.Auth.SignInCredentials): void;
};

type Props = ReduxState & ReduxDispatch;

function SignInFormContainer(props: Props): React.ReactElement {
  const { performSignIn, signedIn, signingInFailed } = props;

  function handleSignIn(credentials: Models.Auth.SignInCredentials): void {
    performSignIn(credentials);
  }

  return (
    <SignInForm
      signIn={handleSignIn}
      signingInFailed={signingInFailed}
      signedIn={signedIn}
    />
  );
}

const mapStateToProps = (state: State): ReduxState => {
  return {
    signedIn: state.auth.signedIn,
    signingInFailed: state.auth.signingInFailed
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performSignIn: signIn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInFormContainer);
