import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import {withCommentsLoading} from './with-comments-loading';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {offers} from '../../__mocks__/mock-offers';
import mockStoreData, {reviews} from '../../__mocks__/mock-store';
import {Router} from 'react-router-dom';
import browserHistory from '../../browser-history';
import thunk from 'redux-thunk';

const api = {
  get: () => Promise.resolve({
    data: reviews,
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

const MockComponentWrapped = withCommentsLoading(MockComponent);

let store;
beforeEach(() => {
  store = mockStore(mockStoreData);
});

it(`withCommentsLoading is rendered correctly`, () => {

  const tree = renderer.create(
      <Provider store={store}>
        <Router history={browserHistory}>
          <MockComponentWrapped
            offers={offers}
            offerId={1}
            reviews={reviews}
            loadReview={()=>{}}
            loading={false}
          />
        </Router>
      </Provider>)
      .toJSON();

  expect(tree).toMatchSnapshot();
});

MockComponent.propTypes = {
  children: PropTypes.node,
};
