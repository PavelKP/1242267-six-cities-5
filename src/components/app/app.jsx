import React from 'react';
import {connect} from 'react-redux';
import {Router as BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {offersPropTypes} from '../../prop-types/prop-types';
import browserHistory from '../../browser-history';

import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';
import PrivateRoute from '../private-route/private-route';
import {AuthorizationStatus} from '../../const';


const App = ({offers, authorizationStatus}) => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/login" render={
          ()=> (
            authorizationStatus === AuthorizationStatus.NO_AUTH
              ? <Login />
              : <Redirect to="/" />
          )
        }>
        </Route>
        <PrivateRoute exact path="/favorites"
          renderFavorites={(serviceProp)=> (
            <Favorites offers={offers} serviceProp={serviceProp}/>
          )}
        />
        <Route exact path="/offer/:id"
          render={(serviceProp) => (
            <Offer offers={offers} serviceProp={serviceProp} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = ({DATA, USER}) => ({
  offers: DATA.offers,
  authorizationStatus: USER.authorizationStatus,
});

App.propTypes = {
  offers: offersPropTypes.offers,
  authorizationStatus: PropTypes.string.isRequired,
};

export {App};
export default connect(mapStateToProps)(App);
