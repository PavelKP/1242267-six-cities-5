import React from 'react';
import renderer from 'react-test-renderer';
import {PlaceCardFavorites} from './place-card-favorites';
import configureStore from 'redux-mock-store';
import {offers} from '../../__mocks__/mock-offers';
import {Provider} from 'react-redux';
import mockStoreData from '../../__mocks__/mock-store';
import {Router} from 'react-router-dom';
import browserHistory from '../../browser-history';

const mockStore = configureStore([]);

describe(`<PlaceCardFavorites /> render`, () => {

  let store;

  beforeEach(() => {
    store = mockStore(mockStoreData);
  });

  it(`Should PlaceCardFavorites render correctly`, ()=> {
    const tree = renderer.create(
        <Provider store={store}>
          <Router history={browserHistory}>
            <PlaceCardFavorites
              offer = {offers[0]}
              classArticle={`favorites__card`}
              classImageWrapper={`favorites__image-wrapper`}
              imageWidth={150}
              imageHeight={110}
              onCardMouseOver={()=>{}}
            />
          </Router>
        </Provider>)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
