import React from 'react';
import renderer from 'react-test-renderer';
import {PlaceCard} from './place-card';
import configureStore from 'redux-mock-store';
import {offers} from '../../__mocks__/mock-offers';
import {Provider} from 'react-redux';
import mockStoreData from '../../__mocks__/mock-store';
import {Router} from 'react-router-dom';
import browserHistory from '../../browser-history';

const mockStore = configureStore([]);

describe(`<PlaceCard /> render`, () => {

  let store;

  beforeEach(() => {
    store = mockStore(mockStoreData);
  });

  it(`Should PlaceCard render correctly`, ()=> {
    const tree = renderer.create(
        <Provider store={store}>
          <Router history={browserHistory}>
            <PlaceCard
              offer = {offers[0]}
              onCardMouseOver = {()=>{}}
              classArticle={`cities__place-card`}
              classImageWrapper={`cities__image-wrapper`}
              imageWidth={260}
              imageHeight={200}
            />
          </Router>
        </Provider>)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
