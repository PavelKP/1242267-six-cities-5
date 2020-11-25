import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import browserHistory from '../../browser-history';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import Favorites from './favorites';
import {offers} from '../../__mocks__/mock-offers';
import mockStoreData from '../../__mocks__/mock-store';

const mockStore = configureStore([]);

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
            />
          </Router>
        </Provider>)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
