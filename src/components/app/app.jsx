import React from "react";
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import MainScreen from "../main-screen/main-screen.jsx";
import FavoritesScreen from "../favorites-screen/favorites-screen.jsx";
import LoginScreen from "../login-screen/login-screen.jsx";
import OfferScreen from "../offer-screen/offer-screen.jsx";
import OfferCardProp from '../offer-card/offer-card.prop';
import PrivateRoute from "../private-route/private-route";

const App = ({offers}) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <MainScreen offers={offers}/>
      </Route>
      <Route exact path="/login">
        <LoginScreen/>
      </Route>
      <PrivateRoute exact
        path={`/favorites`}
        render={() => <FavoritesScreen />}
      >
      </PrivateRoute>
      <Route exact path="/offer/:id" component={OfferScreen}/>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  offers: PropTypes.arrayOf(OfferCardProp)
};

export default App;
