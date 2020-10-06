import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main';

const App = ({placesCount}) => {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main placesCount={placesCount} />
          <h1>MAIN</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired
};

export default App;
