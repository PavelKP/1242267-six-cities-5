import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SortingTypes} from './sorting-types';

configure({adapter: new Adapter()});

describe(`Sorting menu interactive`, () => {

  it(`Should sorting menu be toggled`, () => {
    const handleTogglerClick = jest.fn();

    const wrapper = shallow(
        <SortingTypes
          setActiveSorting={()=>{}}
          activeSorting={`popular`}
          togglerState={false}
          onTogglerClick={handleTogglerClick}
        />);

    const toggler = wrapper.find(`.places__sorting-type`);
    toggler.simulate(`click`);

    expect(handleTogglerClick).toHaveBeenCalledTimes(1);
  });

  it(`Should sorting be changed`, () => {
    const setActiveSorting = jest.fn();

    const wrapper = shallow(
        <SortingTypes
          setActiveSorting={setActiveSorting}
          activeSorting={`popular`}
          togglerState={false}
          onTogglerClick={()=>{}}
        />);

    const toggler = wrapper.find(`.places__options`);
    toggler.simulate(`click`, {
      preventDefault: ()=>{},
      target: {
        dataset: {
          sortingType: `fake`
        }
      }
    });
    expect(setActiveSorting).toHaveBeenCalledTimes(1);
  });
});
