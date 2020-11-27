import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
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

configure({adapter: new Adapter()});

describe(`Comment form interactive`, () => {

  it(`Should form be submited`, () => {
    const handleFormSubmit = jest.fn();
    const handleTextInputChange = jest.fn();
    const handleRatingChange = jest.fn();

    const wrapper = shallow(
        <CommentForm
          onSubmit={handleFormSubmit}
          state={state}
          onTextInputChange={handleTextInputChange}
          onRatingChange={handleRatingChange}
        />);

    const reviewForm = wrapper.find(`.reviews__form`);
    reviewForm.simulate(`submit`);
    expect(handleFormSubmit).toHaveBeenCalledTimes(1);


    const textInput = wrapper.find(`.reviews__textarea`);
    textInput.simulate(`change`, {target: {value: `Hello`}});
    expect(handleTextInputChange).toHaveBeenCalledTimes(1);

    const ratingInputs = wrapper.find(`.form__rating-input`);
    ratingInputs.forEach((node) => {
      node.simulate(`change`);
    });
    expect(handleRatingChange).toHaveBeenCalledTimes(5);
  });

  it(`Should text input be changed`, () => {
    const handleTextInputChange = jest.fn();

    const wrapper = shallow(
        <CommentForm
          onSubmit={()=>{}}
          state={state}
          onTextInputChange={handleTextInputChange}
          onRatingChange={()=>{}}
        />);

    const textInput = wrapper.find(`.reviews__textarea`);
    textInput.simulate(`change`, {target: {value: `Hello`}});
    expect(handleTextInputChange).toHaveBeenCalledTimes(1);
  });

  it(`Should rating be changed`, () => {
    const handleRatingChange = jest.fn();

    const wrapper = shallow(
        <CommentForm
          onSubmit={()=>{}}
          state={state}
          onTextInputChange={()=>{}}
          onRatingChange={handleRatingChange}
        />);

    const ratingInputs = wrapper.find(`.form__rating-input`);
    ratingInputs.forEach((node) => {
      node.simulate(`change`);
    });
    expect(handleRatingChange).toHaveBeenCalledTimes(5);
  });
});
