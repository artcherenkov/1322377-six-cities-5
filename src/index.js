import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from "./services/api";
import {Provider} from 'react-redux';
import {composeWithDevTools} from "redux-devtools-extension";

import App from "./components/app/app.jsx";
import rootReducer from './store/reducers/root-reducer';
import {fetchOffersList} from "./store/api-action";

const api = createAPI(() => console.log(`не авторизован`));

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

Promise.all([
  store.dispatch(fetchOffersList())
])
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.querySelector(`#root`)
    );
  });
