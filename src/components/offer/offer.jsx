import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import CommentForm from '../comment-form/comment-form';
import withReviewCommentForm from '../../hocs/with-review/with-review';
import withOfferLoading from '../../hocs/with-offer-loading/with-offer-loading';
import OfferList from '../offer-list/offer-list';
import Header from '../header/header';
import Map from '../map/map';
import {offerPropTypes} from '../../prop-types/prop-types';
import ReviewList from '../review-list/review-list';
import {CardType} from '../../const';
import {getStarsStyle} from '../../utils';
import {connect} from 'react-redux';
import {AuthorizationStatus} from "../../const";

const CommentFormWrapped = withReviewCommentForm(CommentForm);

const Offer = ({loading, activeOffer, offerId, authorizationStatus}) => {

  if (loading) {
    return <h3>Loading...please wait</h3>;
  }

  const premium = activeOffer.isPremium &&
    <div className="property__mark">
      <span>Premium</span>
    </div>;

  const proUserClass = activeOffer.host.isPro
    ? `property__avatar-wrapper--pro`
    : ``;

  /* Стиль есть только для вложенного элемента place-card__bookmark-icon*/
  const bookmarked = activeOffer.isBookmarked
    ? `property__bookmark-button--active`
    : ``;
  const bedrooms = +activeOffer.bedrooms <= 1
    ? `${activeOffer.bedrooms} Bedroom`
    : `${activeOffer.bedrooms} Bedrooms`;
  const adults = +activeOffer.adults <= 1
    ? `Max ${activeOffer.adults} adult`
    : `Max ${activeOffer.adults} adults`;

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
              {activeOffer.images.map((image, i)=> (
                <div className="property__image-wrapper" key={`property-image-${i}`}>
                  <img className="property__image" src={image} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {premium}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {activeOffer.title}
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
                  <span style={getStarsStyle(activeOffer.rating)}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{activeOffer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {activeOffer.entire}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms}
                </li>
                <li className="property__feature property__feature--adults">
                  {adults}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{activeOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {activeOffer.inside.map((feature, i)=> (
                    <li className="property__inside-item" key={`property-inside-${i}`}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${proUserClass} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={activeOffer.host.avatar} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {activeOffer.host.name}
                  </span>
                </div>
                <div className="property__description">
                  {activeOffer.description.map((paragraph, i) =>(
                    <p className="property__text" key={`property-paragraph-${i}`}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewList offerId={offerId} />
                {authorizationStatus === AuthorizationStatus.AUTH
                  && <CommentFormWrapped offerId={offerId} />}
              </section>
            </div>
          </div>
          <Map className="property__map map" activeOffer={activeOffer}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OfferList
                type={CardType.NEARBY}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

Offer.propTypes = {
  activeOffer: offerPropTypes.offer,
  offerId: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

export default connect(mapStateToProps)(withOfferLoading(Offer));
