import React from 'react';
import renderer from 'react-test-renderer';

import NoOffers from './no-offers';
import {Cities} from "../../const";

const city = Cities.AMSTERDAM;

it(`NoOffers is rendered correctly`, () => {
  const tree = renderer.create(
      <NoOffers city={city} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
