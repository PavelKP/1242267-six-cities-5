import React from 'react';
import renderer from 'react-test-renderer';
import {SortingTypes} from './sorting-types';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import mockStoreData from '../../__mocks__/mock-store';
import {Router} from 'react-router-dom';
import browserHistory from '../../browser-history';

const mockStore = configureStore([]);

describe(`<SortingTypes /> render`, () => {

  let store;

  beforeEach(() => {
    store = mockStore(mockStoreData);
  });

  it(`Should SortingTypes render correctly`, ()=> {
    const tree = renderer.create(
        <Provider store={store}>
          <Router history={browserHistory}>
            <SortingTypes
              setActiveSorting={()=>{}}
              activeSorting={`popular`}
              togglerState={false}
              onTogglerClick={()=>{}}
            />
          </Router>
        </Provider>)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should SortingTypes with opened menu render correctly`, ()=> {
    const tree = renderer.create(
        <Provider store={store}>
          <Router history={browserHistory}>
            <SortingTypes
              setActiveSorting={()=>{}}
              activeSorting={`popular`}
              togglerState={true}
              onTogglerClick={()=>{}}
            />
          </Router>
        </Provider>)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
