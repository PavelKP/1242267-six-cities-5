
import React from 'react';
import {connect} from 'react-redux';
import {setFavoriteStatus} from '../../store/api-actions';
import PropTypes from 'prop-types';
import {offersPropTypes} from '../../prop-types/prop-types';

const FavoriteButton = ({offers, offerId, setFavoriteStatus}) => {

  const isBookmarked = offers.filter((offer) => offer.id === offerId)[0].isBookmarked;
  const bookmarked = isBookmarked ? `place-card__bookmark-button--active` : ``;

  const handleFavoriteClick = (evt) => {
    evt.preventDefault();
    setFavoriteStatus(offerId, Number(!isBookmarked));
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
  setFavoriteStatus: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  offers: state.DATA.offers,
});

const dispatchStateToProps = (dispatch) => ({
  setFavoriteStatus(offerId, status) {
    return dispatch(setFavoriteStatus(offerId, status));
  }
});

export {FavoriteButton};
export default connect(mapStateToProps, dispatchStateToProps)(FavoriteButton);
