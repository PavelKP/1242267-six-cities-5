import React from 'react';
import renderer from 'react-test-renderer';
import {Header} from './header';
import {Router} from 'react-router-dom';
import browserHistory from '../../browser-history';
import {userData, AuthorizationStatus} from '../../__mocks__/mock-store';

describe(`<Header /> render`, () => {
  it(`Should Header render correctly`, () => {

    const tree = renderer.create(
        <Router history={browserHistory}>
          <Header
            authorizationStatus={AuthorizationStatus.AUTH}
            userData={userData}
          />
        </Router>)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Header no auth render correctly`, () => {

    const tree = renderer.create(
        <Router history={browserHistory}>
          <Header
            authorizationStatus={AuthorizationStatus.NO_AUTH}
            userData={userData}
          />
        </Router>)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
