import React from 'react';
import renderer from 'react-test-renderer';
import {OfferList} from './offer-list';
import configureStore from 'redux-mock-store';
import {offers} from '../../__mocks__/mock-offers';
import {Provider} from 'react-redux';
import mockStoreData from '../../__mocks__/mock-store';
import {Router} from 'react-router-dom';
import browserHistory from '../../browser-history';
import {CardType} from '../../const';


const mockStore = configureStore([]);

describe(`<OfferList /> render`, () => {

  let store;

  beforeEach(() => {
    store = mockStore(mockStoreData);
  });

  it(`Should OfferList with main cards render correctly`, ()=> {
    const tree = renderer.create(
        <Provider store={store}>
          <Router history={browserHistory}>
            <OfferList
              type={CardType.MAIN}
              setHoveredCard={()=>{}}
              offers={offers}
              loading={false}
            />
          </Router>
        </Provider>)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OfferList with nearby cards render correctly`, ()=> {
    const tree = renderer.create(
        <Provider store={store}>
          <Router history={browserHistory}>
            <OfferList
              type={CardType.NEARBY}
              setHoveredCard={()=>{}}
              offers={offers}
              loading={false}
            />
          </Router>
        </Provider>)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OfferList with favorites cards render correctly`, ()=> {
    const tree = renderer.create(
        <Provider store={store}>
          <Router history={browserHistory}>
            <OfferList
              type={CardType.FAVORITES}
              setHoveredCard={()=>{}}
              offers={offers}
              loading={false}
            />
          </Router>
        </Provider>)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OfferList loading render correctly`, ()=> {
    const tree = renderer.create(
        <Provider store={store}>
          <Router history={browserHistory}>
            <OfferList
              type={CardType.FAVORITES}
              setHoveredCard={()=>{}}
              offers={offers}
              loading={true}
            />
          </Router>
        </Provider>)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
