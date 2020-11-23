import React from 'react';
import renderer from 'react-test-renderer';
import {CityItem} from './city-item';

const city = {
  name: `Moscow`,
  coordinates: [111, 222],
  zoom: 12,
};
const activeClass = `tabs__item--active`;


describe(`<CityItem /> render`, () => {

  it(`Should active CityItem render correctly`, ()=> {
    const tree = renderer.create(
        <CityItem
          city={city}
          activeClass={activeClass}
          setCity={()=>{}}
          setActiveSorting={()=>{}}
        />)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should no-active CityItem render correctly`, ()=> {
    const tree = renderer.create(
        <CityItem
          city={city}
          setCity={()=>{}}
          setActiveSorting={()=>{}}
        />)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

CityItem.defaultProps = {
  activeClass: ``,
};
