import React from 'react';
import {connect} from 'react-redux';
import {Router as BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import browserHistory from '../../browser-history';

import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';
import PrivateRoute from '../private-route/private-route';
import {AuthorizationStatus} from '../../const';
import {AppRoute} from '../../const';


const App = ({authorizationStatus}) => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>
        <Route exact path={AppRoute.LOGIN} render={
          ()=> (
            authorizationStatus === AuthorizationStatus.NO_AUTH
              ? <Login />
              : <Redirect to={AppRoute.ROOT} />
          )
        }>
        </Route>
        <PrivateRoute exact path={AppRoute.FAVORITES}
          renderFavorites={(serviceProp)=> (
            <Favorites serviceProp={serviceProp}/>
          )}
        />
        <Route exact path={`${AppRoute.OFFER}/:id`}
          render={(serviceProp) => (
            <Offer serviceProp={serviceProp} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

export {App};
export default connect(mapStateToProps)(App);
