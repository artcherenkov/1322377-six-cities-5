import React from 'react';
import renderer from 'react-test-renderer';

import Goods from './goods';

const goods = [
  `Laptop friendly workspace`,
  `Washer`,
  `Towels`,
  `Fridge`,
  `Air conditioning`,
  `Baby seat`,
  `Breakfast`,
];

it(`Goods is rendered correctly`, () => {
  const tree = renderer.create(
      <Goods goods={goods} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
