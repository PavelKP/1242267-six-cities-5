import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import {withOfferLoading} from './with-offer-loading';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {offers} from '../../__mocks__/mock-offers';
import mockStoreData, {serviceProp} from '../../__mocks__/mock-store';
import {Router} from 'react-router-dom';
import browserHistory from '../../browser-history';
import thunk from 'redux-thunk';

const api = {
  get: () => Promise.resolve({
    data: offers,
  })
};

const mockStore = configureStore([thunk.withExtraArgument(api)]);

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

const MockComponentWrapped = withOfferLoading(MockComponent);

let store;
beforeEach(() => {
  store = mockStore(mockStoreData);
});

it(`withOfferLoading is rendered correctly`, () => {

  const tree = renderer.create(
      <Provider store={store}>
        <Router history={browserHistory}>
          <MockComponentWrapped
            loading={false}
            activeOffer={offers[0]}
            offerId={1}
            serviceProp={serviceProp}
          />
        </Router>
      </Provider>)
      .toJSON();

  expect(tree).toMatchSnapshot();
});

MockComponent.propTypes = {
  children: PropTypes.node,
};
