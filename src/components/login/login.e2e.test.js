import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Login} from './login';

configure({adapter: new Adapter()});

it(`Should login form be submited`, () => {
  const handleFromSubmit = jest.fn();

  const wrapper = shallow(
      <Login
        onFormSubmit={handleFromSubmit}
        formRef={React.createRef()}
        isValid={true}
      />
  );
  const loginForm = wrapper.find(`.login__form`);
  loginForm.simulate(`submit`, {preventDefault: ()=>{}});
  expect(handleFromSubmit).toHaveBeenCalledTimes(1);
});
