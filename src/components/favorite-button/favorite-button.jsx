
import React from 'react';
import {connect} from 'react-redux';
import {setFavoriteStatus} from '../../store/api-actions';
import {ActionCreator} from '../../store/action';
import {APIRoute, AuthorizationStatus} from '../../const';
import PropTypes from 'prop-types';
import {offersPropTypes} from '../../prop-types/prop-types';

const FavoriteButton = ({offers, offerId, setFavoriteStatusDispatch,
  redirectToRoute, authorizationStatus}) => {

  const isBookmarked = offers.filter((offer) => offer.id === offerId)[0].isBookmarked;
  const bookmarked = isBookmarked ? `place-card__bookmark-button--active` : ``;

  const handleFavoriteClick = (evt) => {
    evt.preventDefault();

    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      redirectToRoute(APIRoute.LOGIN);
    } else {
      setFavoriteStatusDispatch(offerId, Number(!isBookmarked));
    }
  };

  return (
    <button className={`place-card__bookmark-button button ${bookmarked}`} type="button"
      onClick={handleFavoriteClick}>
      <svg className="place-card__bookmark-icon" width="18" height="19">
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

export {FavoriteButton};
export default connect(mapStateToProps, dispatchStateToProps)(FavoriteButton);
