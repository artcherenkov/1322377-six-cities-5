import React from "react";
import PropTypes from 'prop-types';
import MainScreen from "../main-screen/main-screen.jsx";

const App = ({offersCount}) => <MainScreen offersCount = {offersCount} />;

App.propTypes = {
  offersCount: PropTypes.number
};

export default App;
