import React from 'react';
import renderer from 'react-test-renderer';
import {PlaceCardMain} from './place-card-main';
import configureStore from 'redux-mock-store';
import {offers} from '../../__mocks__/mock-offers';
import {Provider} from 'react-redux';
import mockStoreData from '../../__mocks__/mock-store';
import {Router} from 'react-router-dom';
import browserHistory from '../../browser-history';

const mockStore = configureStore([]);

describe(`<PlaceCardMain /> render`, () => {

  let store;

  beforeEach(() => {
    store = mockStore(mockStoreData);
  });

  it(`Should PlaceCardMain render correctly`, ()=> {
    const tree = renderer.create(
        <Provider store={store}>
          <Router history={browserHistory}>
            <PlaceCardMain
              offer = {offers[0]}
              classArticle={`cities__place-card`}
              classImageWrapper={`cities__image-wrapper`}
              onCardMouseOver={()=>{}}
            />
          </Router>
        </Provider>)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
