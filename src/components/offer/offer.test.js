import React from 'react';
import renderer from 'react-test-renderer';
import {Offer} from './offer';
import configureStore from 'redux-mock-store';
import {offers} from '../../__mocks__/mock-offers';
import {Provider} from 'react-redux';
import mockStoreData, {AuthorizationStatus, reviews, serviceProp} from '../../__mocks__/mock-store';
import {Router} from 'react-router-dom';
import browserHistory from '../../browser-history';
import thunk from 'redux-thunk';

const api = {
  get: () => Promise.resolve({
    data: reviews,
  })
};

const mockStore = configureStore([thunk.withExtraArgument(api)]);

const mapElement = document.createElement(`div`);
mapElement.setAttribute(`id`, `map`);
document.body.appendChild(mapElement);

describe(`<Offer /> render`, () => {

  let store;

  beforeEach(() => {
    store = mockStore(mockStoreData);
  });

  it(`Should Offer render correctly`, ()=> {
    const tree = renderer.create(
        <Provider store={store}>
          <Router history={browserHistory}>
            <Offer
              activeOffer={offers[0]}
              offerId={1}
              loading={false}
              authorizationStatus={AuthorizationStatus.AUTH}
              serviceProp={serviceProp}
              dispatch={()=>{}}
            />
          </Router>
        </Provider>)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Offer is loading render correctly`, ()=> {
    const tree = renderer.create(
        <Provider store={store}>
          <Router history={browserHistory}>
            <Offer
              activeOffer={offers[0]}
              offerId={1}
              loading={true}
              authorizationStatus={AuthorizationStatus.AUTH}
              serviceProp={serviceProp}
              dispatch={()=>{}}
            />
          </Router>
        </Provider>)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
