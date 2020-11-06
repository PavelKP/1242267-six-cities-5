import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {offersPropTypes} from '../../prop-types/prop-types';
import PlaceCardMain from '../place-card/place-card-main';
import PlaceCardNearby from '../place-card/place-card-nearby';
import PlaceCardFavorites from '../place-card/place-card-favorites';
import {CardType} from '../../const';
import {ActionCreator} from '../../store/action';

const sortingTypeToFunction = {
  'popular': (offers) => offers,
  'price-to-high': (offers) => offers.sort((a, b) => a.price - b.price),
  'price-to-low': (offers) => offers.sort((a, b) => b.price - a.price),
  'top-rated-first': (offers) => offers.sort((a, b) => b.rating - a.rating),
};

const getComponentByType = (type, offer, handler) => {
  switch (type) {
    case CardType.MAIN:
      return <PlaceCardMain
        key={offer.id} offer={offer}
        onCardMouseOver={handler}/>;
    case CardType.NEARBY:
      return <PlaceCardNearby
        key={offer.id} offer={offer}
        onCardMouseOver={handler}/>;
    case CardType.FAVORITES:
      return <PlaceCardFavorites
        key={offer.id} offer={offer}
        onCardMouseOver={handler}/>;
    default:
      return ``;
  }
};

const OfferList = (props) => {
  const {type, offers, activeSorting, setHoveredCard} = props;
  const sortedOffers = sortingTypeToFunction[activeSorting](offers.slice());

  return (
    sortedOffers.map((offer)=> {
      return getComponentByType(type, offer, setHoveredCard);
    })
  );
};

const mapStateToProps = ({INTERFACE}) => ({
  activeSorting: INTERFACE.activeSorting
});

const mapDispatchToProps = (dispatch) => ({
  setHoveredCard(id) {
    dispatch(ActionCreator.setHoveredCard(id));
  }
});

OfferList.propTypes = {
  type: PropTypes.string.isRequired,
  offers: offersPropTypes.offers,
  activeSorting: PropTypes.string.isRequired,
  setHoveredCard: PropTypes.func.isRequired,
};

export {OfferList};
export default connect(mapStateToProps, mapDispatchToProps)(OfferList);

