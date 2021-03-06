import React from 'react';
import renderer from 'react-test-renderer';
import FavoritesEmpty from './favorites-empty';

describe(`<FavoritesEmpty /> render`, () => {

  it(`Should FavoritesEmpty render correctly`, () => {
    const tree = renderer.create(
        <FavoritesEmpty/>)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
