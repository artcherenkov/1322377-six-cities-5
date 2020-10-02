import React from "react";
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainScreen from "../main-screen/main-screen.jsx";
import FavoritesScreen from "../favorites-screen/favorites-screen.jsx";
import LoginScreen from "../login-screen/login-screen.jsx";
import OfferScreen from "../offer-screen/offer-screen.jsx";

const App = ({offersCount}) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <MainScreen errorsCount={offersCount}/>
      </Route>
      <Route exact path="/login">
        <LoginScreen/>
      </Route>
      <Route exact path="/favorites">
        <FavoritesScreen/>
      </Route>
      <Route exact path="/offer/:id">
        <OfferScreen/>
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  offersCount: PropTypes.number
};

export default App;
