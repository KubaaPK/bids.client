import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Main from './screens/user/Main';
import SignUp from './screens/user/SignUp';
import SignIn from './screens/user/SignIn';
import Dashboard from './screens/admin/Dashboard';
import Offer from './screens/user/Offer';
import CreateOffer from './screens/user/CreateOffer';
import Profile from './screens/user/Profile';
import ShippingRates from './screens/user/Profile/ShippingRates';

const routes = (
  <>
    <Route exact path="/" component={Main} />
    <Route exact path="/zaloz-konto" component={SignUp} />
    <Route exact path="/zaloguj-sie" component={SignIn} />
    <Route exact path="/oferta/:id" component={Offer} />

    <PrivateRoute exact path="/administracja" component={Dashboard} />

    <PrivateRoute exact path="/dodaj-oferte" component={CreateOffer} />

    <PrivateRoute exact path="/moje-konto" component={Profile} />
    <PrivateRoute
      exact
      path="/moje-konto/moje-cenniki"
      component={ShippingRates}
    />
  </>
);

export default routes;
