import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {offersPropTypes} from '../../prop-types/prop-types';
import PlaceCardMain from '../place-card/place-card-main';
import PlaceCardNearby from '../place-card/place-card-nearby';
import PlaceCardFavorites from '../place-card/place-card-favorites';
import {CardType} from '../../const';
import {ActionCreator} from '../../store/action';
import {getCurrentOffers} from '../../store/combined-selectors';

const NEARBY_AMOUNT = 3;

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
  const {type, setHoveredCard} = props;
  let {sortedOffers} = props;

  if (type === CardType.NEARBY) {
    sortedOffers = sortedOffers.slice(0, NEARBY_AMOUNT);
  }

  return (
    sortedOffers.map((offer)=> {
      return getComponentByType(type, offer, setHoveredCard);
    })
  );
};

const mapStateToProps = (state) => ({
  sortedOffers: getCurrentOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  setHoveredCard(id) {
    dispatch(ActionCreator.setHoveredCard(id));
  }
});

OfferList.propTypes = {
  type: PropTypes.string.isRequired,
  sortedOffers: offersPropTypes.offers,
  setHoveredCard: PropTypes.func.isRequired,
};

export {OfferList};
export default connect(mapStateToProps, mapDispatchToProps)(OfferList);

