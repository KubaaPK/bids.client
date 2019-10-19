import React from 'react';
import { Route } from 'react-router-dom';
import Main from './pages/main/Main';
import SignUp from './pages/sign-up/SignUp';
import SignIn from './pages/sign-in/SignIn';
import Offer from './pages/offer/Offer';

const routes = (
  <>
    <Route exact path="/" component={Main} />
    <Route exact path="/zaloz-konto" component={SignUp} />
    <Route exact path="/zaloguj-sie" component={SignIn} />
    <Route exact path="/oferta/:id" component={Offer} />
  </>
);

export default routes;
