import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { AjaxError } from 'rxjs/ajax';
import * as Models from '../../models';
import { State } from '../../redux/reducers';
import { signUp } from '../../redux/actions/accounts/sign-up.action';
import { SignUpForm } from '../../ui/organisms';

type ReduxState = {
  signedUp: boolean;
  signingUpFailed: AjaxError | undefined;
};

type ReduxDispatch = {
  performSignUp: (credentials: Models.Auth.SignUpCredentials) => void;
};

type Props = ReduxState & ReduxDispatch;

function SignUpFormContainer(props: Props): ReactElement {
  const { performSignUp, signedUp, signingUpFailed } = props;

  function handleSignUp(credentials: Models.Auth.SignUpCredentials): void {
    performSignUp(credentials);
  }

  return (
    <SignUpForm
      signUp={handleSignUp}
      signedUp={signedUp}
      signingUpFailed={signingUpFailed}
    />
  );
}

const mapStateToProps = (state: State): ReduxState => {
  return {
    signedUp: state.accounts.signUp.signedUp,
    signingUpFailed: state.accounts.signUp.signingUpFailed
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performSignUp: signUp
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpFormContainer);
