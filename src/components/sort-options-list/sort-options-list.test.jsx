import React from 'react';
import renderer from 'react-test-renderer';

import {SortOptionsList} from './sort-options-list';
import {SortType} from "../../const";

it(`SortOptionsList is rendered correctly`, () => {
  const tree = renderer.create(
      <SortOptionsList
        currentSortType={SortType.DEFAULT}
        isOpened={true}
        onRollupToggle={() => {}}
        onSortTypeChange={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
