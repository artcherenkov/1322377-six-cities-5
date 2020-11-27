import React from 'react';
import renderer from 'react-test-renderer';

import Host from './host';

const host = {
  id: 25,
  name: `Angelina`,
  avatarUrl: `img/avatar-angelina.jpg`,
  isPro: true,
};
const description = `Отличная вилла`;


it(`Host is rendered correctly`, () => {
  const tree = renderer.create(
      <Host
        host={host}
        description={description}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
