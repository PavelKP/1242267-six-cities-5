import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {offersPropTypes} from '../../prop-types/prop-types';
import PlaceCardMain from '../place-card/place-card-main';
import PlaceCardNearby from '../place-card/place-card-nearby';
import PlaceCardFavorites from '../place-card/place-card-favorites';

const getComponentByType = (type, offer, handler) => {
  switch (type) {
    case `main`:
      return <PlaceCardMain
        key={offer.id} offer={offer}
        onCardMouseOver={handler}/>;
    case `nearby`:
      return <PlaceCardNearby
        key={offer.id} offer={offer}
        onCardMouseOver={handler}/>;
    case `favorites`:
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
    const {offers, type} = this.props;

    return (
      offers.map((offer)=> {
        return getComponentByType(type, offer, this.handleCardMouseOver);
      })
    );
  }
}

OfferList.propTypes = {
  type: PropTypes.string.isRequired,
  offers: offersPropTypes.offers,
};

export default OfferList;
