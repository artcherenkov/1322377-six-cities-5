import React from 'react';
import renderer from 'react-test-renderer';

import CommentsList from './comments-list';

const comments = [
  {
    comment: `The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.`,
    date: `2020-11-05T13:38:44.753Z`,
    id: 1,
    rating: 4,
    user: {
      avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/7.jpg`,
      id: 16,
      isPro: true,
      name: `Mollie`,
    },
  }, {
    comment: `The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.`,
    date: `2020-11-05T13:38:44.753Z`,
    id: 5,
    rating: 4,
    user: {
      avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/7.jpg`,
      id: 78,
      isPro: true,
      name: `Mollie`,
    },
  },
];

it(`CommentsList is rendered correctly`, () => {
  const tree = renderer.create(
      <CommentsList comments={comments}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
