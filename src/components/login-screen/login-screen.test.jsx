import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import LoginScreen from "./login-screen";
import {Provider} from 'react-redux';
import rootReducer from '../../store/reducers/root-reducer';
import {createStore} from "redux";

it(`LoginScreen is rendered correctly`, () => {
  const store = createStore(rootReducer);
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <LoginScreen />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
