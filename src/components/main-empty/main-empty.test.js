import React from 'react';
import renderer from 'react-test-renderer';
import MainEmpty from './main-empty';

describe(`<MainEmpty /> render`, () => {

  it(`Should MainEmpty render correctly`, ()=> {
    const tree = renderer.create(
        <MainEmpty
          city={`Moscow`}
        />)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should MainEmpty render correctly`, ()=> {
    const tree = renderer.create(
        <MainEmpty
          city={`Moscow`}
        />)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
