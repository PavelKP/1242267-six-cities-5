import React from 'react';
import renderer from 'react-test-renderer';
import {PrivateRoute} from './private-route';
import {Favorites} from '../../components/favorites/favorites';
import configureStore from 'redux-mock-store';
import {offers} from '../../__mocks__/mock-offers';
import {Provider} from 'react-redux';
import mockStoreData, {serviceProp} from '../../__mocks__/mock-store';
import {Router} from 'react-router-dom';
import browserHistory from '../../browser-history';
import {AppRoute, AuthorizationStatus} from '../../const';

const mockStore = configureStore([]);

describe(`<PrivateRoute /> render`, () => {

  let store;

  beforeEach(() => {
    store = mockStore(mockStoreData);
  });

  it(`Should PrivateRoute render correctly`, ()=> {
    const tree = renderer.create(
        <Provider store={store}>
          <Router history={browserHistory}>
            <PrivateRoute
              exact={true}
              path={AppRoute.FAVORITES}
              renderFavorites={()=>(
                <Favorites offers={offers} serviceProp={serviceProp}/>
              )}
              authorizationStatus={AuthorizationStatus.AUTH}
            />
          </Router>
        </Provider>)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
