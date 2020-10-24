import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from "./components/app/app.jsx";
import {generateOffers} from "./mock/offers.js";
import {reducer} from "./store/reducer";

const mockOffers = generateOffers();
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App offers={mockOffers} />
    </Provider>,
    document.querySelector(`#root`)
);
