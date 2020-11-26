import React from 'react';
import renderer from 'react-test-renderer';

import CitiesList from './cities-list';
import {Cities} from "../../const";


it(`CitiesList is rendered correctly`, () => {
  const tree = renderer.create(
      <CitiesList city={Cities.AMSTERDAM} onCityChange={() => {}} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
