import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {CityList} from './city-list';
import {Provider} from 'react-redux';
import mockStoreData, {cities} from '../../__mocks__/mock-store';

const mockStore = configureStore([]);

describe(`<CityList /> render`, () => {

  let store;

  beforeEach(() => {
    store = mockStore(mockStoreData);
  });

  it(`Should CityList render correctly`, ()=> {
    const tree = renderer.create(
        <Provider store={store}>
          <CityList
            cities={cities}
            activeCity={cities[0]}
          />
        </Provider>)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should empty CityList render correctly`, () => {
    const tree = renderer.create(
        <Provider store={store}>
          <CityList
            activeCity={cities[0]}
          />
        </Provider>)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
