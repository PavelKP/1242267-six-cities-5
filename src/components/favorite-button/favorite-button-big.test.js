import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import FavoriteButtonBig from './favorite-button-big';
import mockStoreData from '../../__mocks__/mock-store';

const mockStore = configureStore([]);

describe(`<FavoriteButtonBig /> render`, () => {

  let store;

  beforeEach(() => {
    store = mockStore(mockStoreData);
  });

  it(`Should FavoriteButton render correctly`, () => {
    const tree = renderer.create(
        <Provider store={store}>
          <FavoriteButtonBig
            offerId={1}
            buttonClass={`property__bookmark-button`}
            iconClass={`property__bookmark-icon`}
            activeClass={`property__bookmark-button--active`}
            imageWidth={31}
            imageHeight={33}
          />
        </Provider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
