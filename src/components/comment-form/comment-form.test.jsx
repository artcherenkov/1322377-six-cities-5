import React from "react";
import renderer from "react-test-renderer";
import CommentForm from "./comment-form";
import {Provider} from 'react-redux';
import rootReducer from '../../store/reducers/root-reducer';
import {createStore} from "redux";

const offerId = `1`;

it(`CommentForm is rendered correctly`, () => {
  const store = createStore(rootReducer);
  const tree = renderer
    .create(
        <Provider store={store}>
          <CommentForm offerId={offerId}/>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
