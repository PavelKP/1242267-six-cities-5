import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import {withReview} from './with-review';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import mockStoreData from '../../__mocks__/mock-store';
import {Router} from 'react-router-dom';
import browserHistory from '../../browser-history';

const mockStore = configureStore([]);

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

const MockComponentWrapped = withReview(MockComponent);

let store;
beforeEach(() => {
  store = mockStore(mockStoreData);
});

it(`withReview is rendered correctly`, () => {

  const tree = renderer.create(
      <Provider store={store}>
        <Router history={browserHistory}>
          <MockComponentWrapped
            sendReview={()=>{}}
            offerId={1}
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
