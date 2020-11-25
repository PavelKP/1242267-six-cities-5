import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import {Main} from './main';
import configureStore from 'redux-mock-store';
import mockStoreData from '../../__mocks__/mock-store';
import {offers} from '../../__mocks__/mock-offers';
import {Router} from 'react-router-dom';
import browserHistory from '../../browser-history';

const mockStore = configureStore([]);

const mapElement = document.createElement(`div`);
mapElement.setAttribute(`id`, `map`);
document.body.appendChild(mapElement);

describe(`<Main /> render`, () => {

  let store;

  beforeEach(() => {
    store = mockStore(mockStoreData);
  });

  it(`Should Main render correctly`, () =>{
    const tree = renderer.create(
        <Provider store={store}>
          <Router history={browserHistory}>
            <Main
              offers={offers}
              city={`Moscow`}
            />
          </Router>
        </Provider>)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Main with empty offers render correctly`, () =>{
    const tree = renderer.create(
        <Provider store={store}>
          <Router history={browserHistory}>
            <Main
              offers={[]}
              city={`Moscow`}
            />
          </Router>
        </Provider>)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
