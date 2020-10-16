import React from "react";
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import MainScreen from "../main-screen/main-screen.jsx";
import FavoritesScreen from "../favorites-screen/favorites-screen.jsx";
import LoginScreen from "../login-screen/login-screen.jsx";
import OfferScreen from "../offer-screen/offer-screen.jsx";
import OfferCardProp from '../offer-card/offer-card.prop';

const App = ({offers}) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <MainScreen offers={offers}/>
      </Route>
      <Route exact path="/login">
        <LoginScreen/>
      </Route>
      <Route exact path="/favorites">
        <FavoritesScreen/>
      </Route>
      // todo обратить внимание
      <Route exact path="/offer/:id" component={OfferScreen}/>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  offers: PropTypes.arrayOf(OfferCardProp)
};

export default App;
