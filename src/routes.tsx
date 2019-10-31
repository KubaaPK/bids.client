import React from 'react';
import { Route } from 'react-router-dom';
import Main from './screens/user/main';
import SignUp from './screens/user/sign-up';
import SignIn from './screens/user/sign-in';

const routes = (
  <>
    <Route exact path="/" component={Main} />
    <Route exact path="/zaloz-konto" component={SignUp} />
    <Route exact path="/zaloguj-sie" component={SignIn} />
  </>
);

export default routes;
