import React from 'react';
import {Link} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {AppRoute} from '../../const';

const Header = (props) => {
  const {authorizationStatus, userData} = props;
  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;
  const link = isAuth ? AppRoute.FAVORITES : AppRoute.LOGIN;

  const avatarStyle = {
    backgroundImage: `url(${userData.avatarUrl})`,
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={`/`} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to={link} className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper"
                    style={isAuth ? avatarStyle : {}}>
                  </div>
                  {isAuth
                    ? <span className="header__user-name user__name">{userData.email}</span>
                    : <span className="header__login">Sign in</span>}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = PropTypes.string.isRequired;

const mapStateTopProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  userData: USER.userData,
});

export {Header};
export default React.memo(connect(mapStateTopProps)(Header));
