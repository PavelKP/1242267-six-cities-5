import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {CityItem} from './city-item';

configure({adapter: new Adapter()});

const city = {
  name: `Moscow`,
  coordinates: [111, 222],
  zoom: 12,
};

it(`Should city link be pressed`, () => {
  const setCity = jest.fn();
  const setActiveSorting = jest.fn();

  const wrapper = shallow(
      <CityItem
        city={city}
        activeClass={`fake`}
        setCity={setCity}
        setActiveSorting={setActiveSorting}
      />);

  const link = wrapper.find(`.locations__item-link`);
  link.simulate(`click`, {preventDefault: ()=>{}}); // Mock event object with preventDefault()

  expect(setCity).toHaveBeenCalledTimes(1);
  expect(setActiveSorting).toHaveBeenCalledTimes(1);
});
