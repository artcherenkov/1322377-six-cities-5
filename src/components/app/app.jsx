import React from "react";
import PropTypes from 'prop-types';
import Main from "../main/main.jsx";

const App = ({offersCount}) => <Main offersCount = {offersCount} />;

App.propTypes = {
  offersCount: PropTypes.number
};

export default App;
