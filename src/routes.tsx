import React from 'react';
import { Route } from 'react-router-dom';
import Main from './screens/user/main';
import SignUp from './screens/user/sign-up';
import SignIn from './screens/user/sign-in';
import Dashboard from './screens/admin/Dashboard';

const routes = (
  <>
    <Route exact path="/" component={Main} />
    <Route exact path="/zaloz-konto" component={SignUp} />
    <Route exact path="/zaloguj-sie" component={SignIn} />
    <Route exact path="/administracja" component={Dashboard} />
  </>
);

export default routes;
