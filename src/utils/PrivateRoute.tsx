import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isUserAuthenticated } from './auth';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}: any) => {
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={
        props =>
          isUserAuthenticated() === true ? (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <Component {...props} />
          ) : (
            <Redirect to="zaloguj-sie" />
          )
        // eslint-disable-next-line react/jsx-curly-newline
      }
    />
  );
};

export default PrivateRoute;
