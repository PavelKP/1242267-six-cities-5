
import React from 'react';
import {connect} from 'react-redux';
import {setFavoriteStatus} from '../../store/api-actions';
import {ActionCreator} from '../../store/action';
import {APIRoute, AuthorizationStatus} from '../../const';
import PropTypes from 'prop-types';
import {offersPropTypes} from '../../prop-types/prop-types';

const FavoriteButton = ({
  offers,
  offerId,
  setFavoriteStatusDispatch,
  redirectToRoute,
  authorizationStatus,
  buttonClass,
  iconClass,
  imageWidth,
  imageHeight,
  activeClass}) => {

  const isBookmarked = offers.filter((offer) => offer.id === offerId)[0].isBookmarked;
  const bookmarked = isBookmarked ? activeClass : ``;

  const handleFavoriteClick = (evt) => {
    evt.preventDefault();

    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      redirectToRoute(APIRoute.LOGIN);
    } else {
      setFavoriteStatusDispatch(offerId, Number(!isBookmarked));
    }
  };

  return (
    <button className={`${buttonClass} button ${bookmarked}`} type="button"
      onClick={handleFavoriteClick}>
      <svg className={iconClass} width={imageWidth} height={imageHeight}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
};

FavoriteButton.propTypes = {
  offers: offersPropTypes.offers,
  offerId: PropTypes.number.isRequired,
  setFavoriteStatusDispatch: PropTypes.func.isRequired,
  redirectToRoute: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  imageWidth: PropTypes.number.isRequired,
  imageHeight: PropTypes.number.isRequired,
  activeClass: PropTypes.string.isRequired,
};

const mapStateToProps = ({DATA, USER}) => ({
  offers: DATA.offers,
  authorizationStatus: USER.authorizationStatus,
});

const dispatchStateToProps = (dispatch) => ({
  setFavoriteStatusDispatch(offerId, status) {
    return dispatch(setFavoriteStatus(offerId, status));
  },
  redirectToRoute(route) {
    return dispatch(ActionCreator.redirectToRoute(route));
  }
});

FavoriteButton.defaultProps = {
  imageWidth: 18,
  imageHeight: 19,
};

export {FavoriteButton};
export default connect(mapStateToProps, dispatchStateToProps)(FavoriteButton);
