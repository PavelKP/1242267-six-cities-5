import React from 'react';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../const';
import {Redirect, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute} from '../../const';

const PrivateRoute = ({exact, path, renderFavorites, authorizationStatus}) => {

  return (
    <Route
      path={path}
      exact={exact}
      render={(serviceProp) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? renderFavorites(serviceProp)
            : <Redirect to={AppRoute.LOGIN}/>
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  renderFavorites: PropTypes.func.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
