import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import browserHistory from '../../browser-history';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import {Favorites} from './favorites';
import {offers} from '../../__mocks__/mock-offers';
import mockStoreData, {serviceProp, cities} from '../../__mocks__/mock-store';
import thunk from 'redux-thunk';

const api = {
  get: () => Promise.resolve({
    data: offers,
  })
};


const mockStore = configureStore([thunk.withExtraArgument(api)]);

describe(`<Favorites /> render`, () => {

  let store;

  beforeEach(() => {
    store = mockStore(mockStoreData);
  });

  it(`Should Favorites render correctly`, () => {
    const tree = renderer.create(
        <Provider store={store}>
          <Router history={browserHistory}>
            <Favorites
              offers={offers}
              cities={cities}
              serviceProp={serviceProp}
              loading={false}
            />
          </Router>
        </Provider>)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should empty Favorites render correctly`, () => {
    const tree = renderer.create(
        <Provider store={store}>
          <Router history={browserHistory}>
            <Favorites
              offers={[]}
              cities={cities}
              serviceProp={serviceProp}
              loading={false}
            />
          </Router>
        </Provider>)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
