import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import {Provider} from 'react-redux';
import rootReducer from '../../store/reducers/root-reducer';
import {createStore} from "redux";

const offers = [{
  hello: `world`,
}];

it(`CitiesList is rendered correctly`, () => {
  const store = createStore(rootReducer);
  const tree = renderer
    .create(
        <Provider store={store}>
          <App offers={offers}/>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
