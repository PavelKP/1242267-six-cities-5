import React from 'react';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../const';
import {Redirect, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

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

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  renderFavorites: PropTypes.func.isRequired,
};

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
