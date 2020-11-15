import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {offersPropTypes} from '../../prop-types/prop-types';

import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';
import PrivateRoute from '../private-route/private-route';

const App = ({offers}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/login">
          <Login />
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

const mapStateToProps = ({DATA}) => ({
  offers: DATA.offers,
});

App.propTypes = {
  offers: offersPropTypes.offers,
};

export {App};
export default connect(mapStateToProps)(App);
