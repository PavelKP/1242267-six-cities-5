import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {offersPropTypes} from '../../prop-types/prop-types';
import PlaceCardMain from '../place-card/place-card-main';
import PlaceCardNearby from '../place-card/place-card-nearby';
import PlaceCardFavorites from '../place-card/place-card-favorites';
import {CardType} from '../../const';
import {connect} from 'react-redux';
import {ActionCreator} from '../store/action';

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
    const {type, city, setPlacesCount} = this.props;
    const offersFiltered = this.props.offers.filter((offer) => offer.location === city);

    setPlacesCount(offersFiltered.length);

    return (
      offersFiltered.map((offer)=> {
        return getComponentByType(type, offer, this.handleCardMouseOver);
      })
    );
  }
}

const mapStateToProps = (state) => {
  return {
    offers: state.offers,
    city: state.city
  };
};

const mapDispatchToProps = (dispatch) => ({
  setPlacesCount(count) {
    dispatch(ActionCreator.setPlacesCount(count));
  }
});

OfferList.propTypes = {
  type: PropTypes.string.isRequired,
  offers: offersPropTypes.offers,
};

export {OfferList};
export default connect(mapStateToProps, mapDispatchToProps)(OfferList);

