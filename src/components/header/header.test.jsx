import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import Header from "./header";
import {Provider} from 'react-redux';
import rootReducer from '../../store/reducers/root-reducer';
import {createStore} from "redux";
import {AuthStatus} from "../../const";

const isLoggedIn = AuthStatus.AUTH;
const username = `username`;

it(`Header is rendered correctly`, () => {
  const store = createStore(rootReducer);
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <Header isLoggedIn={isLoggedIn} username={username} />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
