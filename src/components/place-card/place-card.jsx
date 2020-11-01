import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {offerPropTypes} from '../../prop-types/prop-types';

const PlaceCard = (
    {offer, onCardMouseOver, classArticle,
      classImageWrapper, imageWidth, imageHeight}) => {

  const mark = offer.mark &&
    (<div className="place-card__mark">
      <span>{offer.mark}</span>
    </div>);

  const bookmarked = offer.isBookmarked ? `place-card__bookmark-button--active` : ``;

  const onMouseEnterWrapped = (evt) => {
    evt.preventDefault();
    onCardMouseOver(offer.id);
  };

  const onMouseLeaveWrapped = (evt) => {
    evt.preventDefault();
    onCardMouseOver(-1);
  };

  return (
    <article className={`${classArticle} place-card`}
      onMouseEnter={onMouseEnterWrapped}
      onMouseLeave={onMouseLeaveWrapped}>
      <div className={`${classImageWrapper} place-card__image-wrapper`}>
        {mark}
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={`img/${offer.images[0]}`} width={imageWidth} height={imageHeight} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price.value}</b>
            <span className="place-card__price-text">&#47;&nbsp;{offer.price.type}</span>
          </div>
          <button className={`place-card__bookmark-button button ${bookmarked}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.entire}</p>
      </div>
    </article>
  );
};

PlaceCard.defaultProps = {
  imageWidth: 260,
  imageHeight: 200
};

PlaceCard.propTypes = {
  offer: offerPropTypes.offer,
  onCardMouseOver: PropTypes.func.isRequired,
  classArticle: PropTypes.string.isRequired,
  classImageWrapper: PropTypes.string.isRequired,
  imageWidth: PropTypes.number.isRequired,
  imageHeight: PropTypes.number.isRequired
};

export default PlaceCard;
