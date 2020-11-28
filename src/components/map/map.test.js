import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map';
import configureStore from 'redux-mock-store';
import {offers} from '../../__mocks__/mock-offers';
import {Provider} from 'react-redux';
import mockStoreData from '../../__mocks__/mock-store';

const mockStore = configureStore([]);

const mapElement = document.createElement(`div`);
mapElement.setAttribute(`id`, `map`);
document.body.appendChild(mapElement);

describe(`<Map /> render`, () => {

  let store;

  beforeEach(() => {
    store = mockStore(mockStoreData);
  });


  it(`Should Map render correctly`, ()=> {
    const tree = renderer.create(
        <Provider store={store}>
          <Map
            offers={offers}
            hoveredCard={1}
            activeCityName={`Moscow`}
            activeCityCoords={[50.938361, 6.959974]}
            activeNearby={null}
            className={`cities__map`}
          />
        </Provider>)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
