import React from 'react';
import renderer from 'react-test-renderer';

import Sort from './sort';
import {SortType} from "../../const";

it(`Sort is rendered correctly`, () => {
  const tree = renderer.create(
      <Sort
        currentSortType={SortType.DEFAULT}
        isOpened={true}
        onRollupToggle={() => {}}
        onSortTypeChange={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
