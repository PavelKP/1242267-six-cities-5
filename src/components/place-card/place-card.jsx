import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offer, onCardMouseOver} = this.props;

    const mark = offer.mark
      ?
      <div className="place-card__mark">
        <span>{offer.mark}</span>
      </div>
      : ``;
    const bookmarked = offer.isBookmarked
      ? `place-card__bookmark-button--active`
      : ``;

    return (
      <article className="cities__place-card place-card" onMouseOver={(evt) => {
        evt.preventDefault();
        onCardMouseOver(offer.id);
      }
      }>
        <div className="cities__image-wrapper place-card__image-wrapper">
          {mark}
          <Link to={`/offer/${offer.id}`}>
            <img className="place-card__image" src={`img/${offer.images[0]}`} width="260" height="200" alt="Place image" />
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
            <a href="#">{offer.title}</a>
          </h2>
          <p className="place-card__type">{offer.entire}</p>
        </div>
      </article>
    );
  }

}

export default PlaceCard;
