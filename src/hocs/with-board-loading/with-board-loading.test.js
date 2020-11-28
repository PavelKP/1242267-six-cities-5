import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import {withBoardLoading} from './with-board-loading';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {offers} from '../../__mocks__/mock-offers';
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

const MockComponentWrapped = withBoardLoading(MockComponent);

let store;
beforeEach(() => {
  store = mockStore(mockStoreData);
});

it(`withBoardLoading is rendered correctly`, () => {

  const tree = renderer.create(
      <Provider store={store}>
        <Router history={browserHistory}>
          <MockComponentWrapped
            offers={offers}
            loading={false}
            setHoveredCard={()=>{}}
            type={`main`}
          />
        </Router>
      </Provider>)
      .toJSON();

  expect(tree).toMatchSnapshot();
});

MockComponent.propTypes = {
  children: PropTypes.node,
};
