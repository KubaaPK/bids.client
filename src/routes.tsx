import React from 'react';
import { Route } from 'react-router-dom';
import Main from './screens/user/main/Main';
// import SignUp from './pages/user/sign-up/SignUp';
import SignIn from './screens/user/sign-in/SignIn';
// import Offer from './pages/user/offer/Offer';
// import Dashboard from './pages/admin/dashboard/Dashboard';
// import CreateOffer from './pages/user/create-offer/CreateOffer';

const routes = (
  <>
    <Route exact path="/" component={Main} />
    {/* <Route exact path="/zaloz-konto" component={SignUp} /> */}
    <Route exact path="/zaloguj-sie" component={SignIn} />
    {/* <Route exact path="/oferta/:id" component={Offer} /> */}

    {/* {localStorage.getItem('is-admin') === 'true' ? (
      <>
        <Route exact path="/administracja" component={Dashboard} />
      </>
    ) : (
      <Route exact path="/" component={Main} />
    )} */}
    {/* {localStorage.getItem('access-token') !== null ? (
      <>
        <Route exact path="/wystaw-przedmiot" component={CreateOffer} />
      </>
    ) : (
      <>
        <Route exact path="/zaloguj-sie" component={SignIn} />
      </>
    )} */}
  </>
);

export default routes;
