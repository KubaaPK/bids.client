import React from 'react';
import { Route } from 'react-router-dom';
import Main from './screens/user/Main';
import SignUp from './screens/user/SignUp';
import SignIn from './screens/user/SignIn';
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
