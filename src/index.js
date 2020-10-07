import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app.jsx";
import {generateOffers} from "./mock/offers.js";

const mockOffers = generateOffers();

ReactDOM.render(
    <App offers={mockOffers}/>,
    document.querySelector(`#root`)
);
