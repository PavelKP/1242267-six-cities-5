import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';

class OfferList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
    };

    this.onCardMouseOver = this.onCardMouseOver.bind(this);
  }

  onCardMouseOver(id) {
    this.setState({
      id
    });
  }

  render() {
    const {offers} = this.props;

    return (
      offers.map((offer)=> {
        return <PlaceCard key={offer.id} offer={offer} onCardMouseOver={this.onCardMouseOver} />;
      })
    );
  }
}

export default OfferList;
