import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {offerPropTypes} from '../../prop-types/prop-types';
import {getStarsStyle} from '../../utils';
import FavoriteButtonSmall from '../../components/favorite-button/favorite-button-small';

const PlaceCard = (
    {offer, onCardMouseOver, classArticle,
      classImageWrapper, imageWidth, imageHeight}) => {

  const premium = offer.isPremium &&
    (<div className="place-card__mark">
      <span>Premium</span>
    </div>);

  const handleMouseEnter = (evt) => {
    evt.preventDefault();
    onCardMouseOver(offer.id);
  };

  const handleMouseLeave = (evt) => {
    evt.preventDefault();
    onCardMouseOver(-1);
  };

  return (
    <article className={`${classArticle} place-card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className={`${classImageWrapper} place-card__image-wrapper`}>
        {premium}
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.preview} width={imageWidth} height={imageHeight} alt={offer.preview} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButtonSmall offerId={offer.id}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={getStarsStyle(offer.rating)}></span>
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

PlaceCard.propTypes = {
  offer: offerPropTypes.offer,
  onCardMouseOver: PropTypes.func.isRequired,
  classArticle: PropTypes.string.isRequired,
  classImageWrapper: PropTypes.string.isRequired,
  imageWidth: PropTypes.number.isRequired,
  imageHeight: PropTypes.number.isRequired
};

PlaceCard.defaultProps = {
  imageWidth: 260,
  imageHeight: 200,
  onCardMouseOver: ()=>{}, // empty handler
};

export {PlaceCard};
export default PlaceCard;
