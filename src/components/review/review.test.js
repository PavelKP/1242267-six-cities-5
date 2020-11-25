import React from 'react';
import renderer from 'react-test-renderer';
import {Review} from './review';
import {reviews} from '../../__mocks__/mock-store';

describe(`<Review /> render`, () => {

  it(`Should Review render correctly`, ()=> {
    const tree = renderer.create(
        <Review
          review={reviews[0]}
        />)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
