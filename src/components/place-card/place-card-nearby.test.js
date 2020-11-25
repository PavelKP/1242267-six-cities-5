import React from 'react';
import renderer from 'react-test-renderer';
import {PlaceCardNearby} from './place-card-nearby';
import configureStore from 'redux-mock-store';
import {offers} from '../../__mocks__/mock-offers';
import {Provider} from 'react-redux';
import mockStoreData from '../../__mocks__/mock-store';
import {Router} from 'react-router-dom';
import browserHistory from '../../browser-history';

const mockStore = configureStore([]);

describe(`<PlaceCardNearby /> render`, () => {

  let store;

  beforeEach(() => {
    store = mockStore(mockStoreData);
  });

  it(`Should PlaceCardNearby render correctly`, ()=> {
    const tree = renderer.create(
        <Provider store={store}>
          <Router history={browserHistory}>
            <PlaceCardNearby
              offer = {offers[0]}
              classArticle={`near-places__card`}
              classImageWrapper={`near-places__image-wrapper`}
              onCardMouseOver={()=>{}}
            />
          </Router>
        </Provider>)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
