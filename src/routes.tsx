import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Offer from './screens/user/Offer';
import PurchaseConfirmation from './screens/user/PurchaseConfirmation';
import Sales from './screens/user/Profile/Sales';
import Buyings from './screens/user/Profile/Buyings';
import BillingSettlements from './screens/user/Profile/BillingSettlements';
import ReviewRequests from './screens/user/Profile/ReviewRequests';
import IssuedReviews from './screens/user/Profile/IssuedReviews';
import {
  SignIn,
  SignUp,
  Index,
  AddOffer,
  Profile,
  ShippingRates,
  Dashboard
} from './ui/pages';

const routes = (
  <>
    <Route exact path="/" component={Index} />
    <Route exact path="/zaloz-konto" component={SignUp} />
    <Route exact path="/zaloguj-sie" component={SignIn} />
    <Route exact path="/oferta/:id" component={Offer} />

    <PrivateRoute exact path="/administracja" component={Dashboard} />

    <PrivateRoute exact path="/dodaj-oferte" component={AddOffer} />

    <PrivateRoute exact path="/moje-konto" component={Profile} />
    <PrivateRoute
      exact
      path="/moje-konto/moje-cenniki"
      component={ShippingRates}
    />
    <PrivateRoute
      exact
      path="/moje-konto/moja-sprzedaz/sprzedane"
      component={Sales}
    />
    <PrivateRoute
      exact
      path="/moje-konto/moje-zakupy/kupione"
      component={Buyings}
    />
    <PrivateRoute
      exact
      path="/moje-konto/rachunki/rozliczenia"
      component={BillingSettlements}
    />

    <PrivateRoute
      exact
      path="/potwierdzenie-zakupu"
      component={PurchaseConfirmation}
    />

    <PrivateRoute exact path="/oceny/wystaw" component={ReviewRequests} />
    <PrivateRoute exact path="/oceny/wystawione" component={IssuedReviews} />
  </>
);

export default routes;
