import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {App} from './app';
import {Provider} from 'react-redux';
import mockStoreData from '../../__mocks__/mock-store';
import {offers} from '../../__mocks__/mock-offers';
import {AuthorizationStatus} from '../../const';

const mockStore = configureStore([]);

const mapElement = document.createElement(`div`);
mapElement.setAttribute(`id`, `map`);
document.body.appendChild(mapElement);

describe(`<App /> render`, () => {

  let store;

  beforeEach(() => {
    store = mockStore(mockStoreData);
  });

  it(`Should App render correctly`, () => {
    const tree = renderer.create(
        <Provider store={store}>
          <App
            offers={offers}
            authorizationStatus={AuthorizationStatus.NO_AUTH}
          />
        </Provider>)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
