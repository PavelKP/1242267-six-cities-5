import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {offersPropTypes, reviewsPropTypes, placesCountPropTypes} from '../../prop-types/prop-types';

import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';

const App = ({placesCount, offers, reviews}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main placesCount={placesCount} offers={offers}/>
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

App.propTypes = {
  placesCount: placesCountPropTypes.placesCount,
  offers: offersPropTypes.offers,
  reviews: reviewsPropTypes.reviews,
};

export default App;
