import React, {PureComponent} from 'react';
import {offersPropTypes} from '../../prop-types/prop-types';
import PlaceCard from '../place-card/place-card';

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
    const {offers} = this.props;

    return (
      offers.map((offer)=> {
        return <PlaceCard key={offer.id} offer={offer} onCardMouseOver={this.handleCardMouseOver} />;
      })
    );
  }
}

OfferList.propTypes = {
  offers: offersPropTypes.offers,
};

export default OfferList;
