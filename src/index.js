import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app.jsx";
import {getRandomInteger} from "./utils.js";

const Settings = {
  OFFERS_COUNT: getRandomInteger(0, 300),
};

ReactDOM.render(
    <App offersCount = {Settings.OFFERS_COUNT} />,
    document.querySelector(`#root`)
);
