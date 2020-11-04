import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {offersPropTypes, reviewsPropTypes} from '../../prop-types/prop-types';

import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';

const App = ({offers, reviews}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main offers={offers}/>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites"
          render={()=> (
            <Favorites offers={offers}/>
          )}
        />
        <Route exact path="/offer/:id"
          render={(serviceProp) => (
            <Offer offers={offers} reviews={reviews} serviceProp={serviceProp} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = ({DATA}) => ({
  offers: DATA.offers,
  reviews: DATA.reviews,
});

App.propTypes = {
  offers: offersPropTypes.offers,
  reviews: reviewsPropTypes.reviews,
};

export {App};
export default connect(mapStateToProps)(App);
