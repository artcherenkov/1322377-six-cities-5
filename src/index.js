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
import {changeAuthStatus, setCityOffers} from "./store/action";
import {AuthStatus} from "./const";
import {redirect} from "./store/middlewares/redirect";

const api = createAPI(
    () => store.dispatch(changeAuthStatus(AuthStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

Promise.all([
  store.dispatch(fetchOffersList()),
])
  .then(() => store.dispatch(setCityOffers()))
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.querySelector(`#root`)
    );
  });
