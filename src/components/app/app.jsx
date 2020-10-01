import React from "react";
import PropTypes from 'prop-types';
import Main from "../main/main.jsx";

const App = (props) => {
  const {offersCount} = props;

  return (
    <Main offersCount = {offersCount} />
  );
};

App.propTypes = {
  offersCount: PropTypes.number
};


export default App;
