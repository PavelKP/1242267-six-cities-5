import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {offersPropTypes, cityPropTypes} from '../../prop-types/prop-types';
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

class OfferList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
    };

    this.handleCardMouseOver = this.handleCardMouseOver.bind(this);
  }

  handleCardMouseOver(id) {
    this.setState({
      id
    });
  }

  render() {
    const {type, offers} = this.props;
    console.log(offers);

    return (
      offers.map((offer)=> {
        return getComponentByType(type, offer, this.handleCardMouseOver);
      })
    );
  }
}

OfferList.propTypes = {
  type: PropTypes.string.isRequired,
  city: cityPropTypes.isRequired,
  setFilteredOffers: PropTypes.func.isRequired,
  offers: offersPropTypes.offers,
};

export default OfferList;


