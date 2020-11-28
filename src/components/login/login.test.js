import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import {Login} from './login';
import configureStore from 'redux-mock-store';
import mockStoreData from '../../__mocks__/mock-store';
import {Router} from 'react-router-dom';
import browserHistory from '../../browser-history';

const mockStore = configureStore([]);

describe(`<Login /> render`, () => {

  let store;

  beforeEach(() => {
    store = mockStore(mockStoreData);
  });

  it(`Should Login render correctly`, () =>{
    const tree = renderer.create(
        <Provider store={store}>
          <Router history={browserHistory}>
            <Login
              onFormSubmit={()=>{}}
              formRef={React.createRef()}
              isValid={true}
            />
          </Router>
        </Provider>)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Login invalid render correctly`, () =>{
    const tree = renderer.create(
        <Provider store={store}>
          <Router history={browserHistory}>
            <Login
              onFormSubmit={()=>{}}
              formRef={React.createRef()}
              isValid={false}
            />
          </Router>
        </Provider>)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
