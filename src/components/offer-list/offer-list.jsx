import React from 'react';
import PropTypes from 'prop-types';
import {offersPropTypes} from '../../prop-types/prop-types';
import PlaceCardMain from '../place-card/place-card-main';
import PlaceCardNearby from '../place-card/place-card-nearby';
import PlaceCardFavorites from '../place-card/place-card-favorites';
import {CardType} from '../../const';

const getComponentByType = (type, offer, handler) => {
  switch (type) {
    case CardType.MAIN:
      return <PlaceCardMain
        key={offer.id} offer={offer}
        onCardMouseOver={handler}/>;
    case CardType.NEARBY:
      return <PlaceCardNearby
        key={offer.id} offer={offer}/>;
    case CardType.FAVORITES:
      return <PlaceCardFavorites
        key={offer.id} offer={offer}/>;
    default:
      return ``;
  }
};

const OfferList = (props) => {
  const {type, setHoveredCard, offers, loading} = props;

  if (loading) {
    return <h3>Loading...please wait</h3>;
  }

  return (
    offers.map((offer)=> {
      return getComponentByType(type, offer, setHoveredCard);
    })
  );
};

OfferList.propTypes = {
  type: PropTypes.string.isRequired,
  offers: offersPropTypes.offers,
  setHoveredCard: PropTypes.func,
};

export {OfferList};
export default OfferList;

