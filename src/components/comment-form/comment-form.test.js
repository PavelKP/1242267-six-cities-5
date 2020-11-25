import React from 'react';
import renderer from 'react-test-renderer';
import CommentForm from './comment-form';

const state = {
  buttonDisabled: true,
  textAreaDisabled: false,
  startDisabled: false,
  text: ``,
  rating: ``,
  error: false,
  errorText: ``,
};

describe(`<CommentForm /> render`, () => {

  it(`Should CommentForm render correctly`, () => {

    const tree = renderer.create(
        <CommentForm
          onSubmit={()=>{}}
          state={state}
          onTextInputChange={()=>{}}
          onRatingChange={()=>{}}
        />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
