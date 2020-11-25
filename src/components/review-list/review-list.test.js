import React from 'react';
import renderer from 'react-test-renderer';
import {ReviewList} from './review-list';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import mockStoreData, {reviews} from '../../__mocks__/mock-store';
import {Router} from 'react-router-dom';
import browserHistory from '../../browser-history';

const mockStore = configureStore([]);

describe(`<ReviewList /> render`, () => {

  let store;

  beforeEach(() => {
    store = mockStore(mockStoreData);
  });

  it(`Should ReviewList with main cards render correctly`, ()=> {
    const tree = renderer.create(
        <Provider store={store}>
          <Router history={browserHistory}>
            <ReviewList
              reviews={reviews}
              loading={false}
            />
          </Router>
        </Provider>)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
