import React from 'react';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../const';
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({exact, path, renderFavorites, authorizationStatus}) => {

  return (
    <Route
      path={path}
      exact={exact}
      render={(serviceProp) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? renderFavorites(serviceProp)
            : <Redirect to={`/login`}/>
        );
      }}
    />
  );
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
