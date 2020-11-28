import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import FavoriteButtonSmall from './favorite-button-small';
import mockStoreData from '../../__mocks__/mock-store';

const mockStore = configureStore([]);

describe(`<FavoriteButtonSmall /> render`, () => {

  let store;

  beforeEach(() => {
    store = mockStore(mockStoreData);
  });

  it(`Should FavoriteButton render correctly`, () => {
    const tree = renderer.create(
        <Provider store={store}>
          <FavoriteButtonSmall
            offerId={1}
            buttonClass={`place-card__bookmark-button`}
            iconClass={`place-card__bookmark-icon`}
            activeClass={`place-card__bookmark-button--active`}
          />
        </Provider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
