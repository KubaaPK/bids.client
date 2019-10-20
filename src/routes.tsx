import React from 'react';
import { Route } from 'react-router-dom';
import Main from './pages/user/main/Main';
import SignUp from './pages/user/sign-up/SignUp';
import SignIn from './pages/user/sign-in/SignIn';
import Offer from './pages/user/offer/Offer';
import Dashboard from './pages/admin/dashboard/Dashboard';

const routes = (
  <>
    <Route exact path="/" component={Main} />
    <Route exact path="/zaloz-konto" component={SignUp} />
    <Route exact path="/zaloguj-sie" component={SignIn} />
    <Route exact path="/oferta/:id" component={Offer} />

    {localStorage.getItem('is-admin') === 'true' ? (
      <>
        <Route exact path="/administracja" component={Dashboard} />
      </>
    ) : (
      <Route exact path="/" component={Main} />
    )}
  </>
);

export default routes;
