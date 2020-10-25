import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Link} from 'react-router-dom';
import CommentForm from '../comment-form/comment-form';
import withStateCommentForm from '../../hocs/withState';
import OfferList from '../offer-list/offer-list';
import Header from '../header/header';
import Map from '../map/map';
import {offersPropTypes, reviewsPropTypes} from '../../prop-types/prop-types';
import ReviewList from '../review-list/review-list';
import {CardType} from '../../const';

const NEARBY_AMOUNT = 3;

const CommentFormWrapped = withStateCommentForm(CommentForm);

const Offer = ({offers, reviews, serviceProp}) => {
  const offerId = serviceProp.match.params.id;
  const offer = offers.find((offerCurrent) => offerCurrent.id === +offerId);

  if (!offer) {
    return <Redirect to={`/`} />;
  }

  const mark = offer.mark &&
    <div className="property__mark">
      <span>{offer.mark}</span>
    </div>;

  /* Стиль есть только для вложенного элемента place-card__bookmark-icon*/
  const bookmarked = offer.isBookmarked
    ? `property__bookmark-button--active`
    : ``;
  const bedrooms = +offer.bedrooms <= 1
    ? `${offer.bedrooms} Bedroom`
    : `${offer.bedrooms} Bedrooms`;
  const adults = +offer.adults <= 1
    ? `Max ${offer.adults} adult`
    : `Max ${offer.adults} adults`;

  return (
    <div className="page">
      <Header>
        <Link to={`/`} className="header__logo-link" href="main.html">
          <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
        </Link>
      </Header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.map((image, i)=> (
                <div className="property__image-wrapper" key={`property-image-${i}`}>
                  <img className="property__image" src={`img/${image}`} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {mark}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <button className={`property__bookmark-button button ${bookmarked}`} type="button">
                  <svg className="place-card__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.entire}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms}
                </li>
                <li className="property__feature property__feature--adults">
                  {adults}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price.value}</b>
                <span className="property__price-text">&nbsp;{offer.price.type}</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.inside.map((feature, i)=> (
                    <li className="property__inside-item" key={`property-inside-${i}`}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={offer.host.avatar} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer.host.name}
                  </span>
                </div>
                <div className="property__description">
                  {offer.host.text.map((paragraph, i) =>(
                    <p className="property__text" key={`property-paragraph-${i}`}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewList reviewsId={offer.reviewsId} reviews={reviews}>
                  <h2 className="reviews__title">Reviews &middot;
                    <span className="reviews__amount">{offer.reviewsId.length}</span>
                  </h2>
                </ReviewList>
                <CommentFormWrapped />
              </section>
            </div>
          </div>
          <Map className="property__map map" currentOffer={offer}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {/* TEMPORARY SLICE OF THE ARRAY */}
              <OfferList
                type={CardType.NEARBY}
                offers={offers.slice(0, NEARBY_AMOUNT)}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

Offer.propTypes = {
  offers: offersPropTypes.offers,
  reviews: reviewsPropTypes.reviews,
  serviceProp: PropTypes.object.isRequired,
};

export default Offer;
