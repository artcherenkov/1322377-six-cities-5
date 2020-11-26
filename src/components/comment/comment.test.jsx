import React from 'react';
import renderer from 'react-test-renderer';

import Comment from './comment';

const comment = {
  comment: `hello it is comment`,
  date: `2020-11-24T16:15:25.719Z`,
  id: 1,
  rating: 3,
  user: {
    avatarUrl: `avatar url`,
    id: 1,
    isPro: true,
    name: `Alex`,
  }
};

it(`Comment is rendered correctly`, () => {
  const tree = renderer.create(
      <Comment comment={comment} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
