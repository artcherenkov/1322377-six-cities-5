import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from "./services/api";
import {Provider} from 'react-redux';

import App from "./components/app/app.jsx";
import {reducer} from "./store/reducer";

const api = createAPI(() => console.log(`не авторизован`));

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
