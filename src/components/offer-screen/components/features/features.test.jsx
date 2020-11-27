import React from 'react';
import renderer from 'react-test-renderer';

import Features from './features';
import {HousingType} from "../../../../const";

it(`Features is rendered correctly`, () => {
  const tree = renderer.create(
      <Features
        type={HousingType.APARTMENT}
        bedrooms={4}
        maxAdults={3}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
