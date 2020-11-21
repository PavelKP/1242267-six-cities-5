import React from 'react';
import {CardType} from '../../const';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {offersPropTypes} from '../../prop-types/prop-types';
import {getCurrentOffers} from '../../store/combined-selectors';
import {ActionCreator} from '../../store/action';
import {fetchNearbyById} from '../../store/api-actions';

const withNearbyLoading = (Component) => {
  class WithNearbyLoading extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        loading: true
      };

      this._offerId = this.props.offerId;
      this._offers = [];
    }

    _load() {
      if (this.props.type === CardType.NEARBY) {
        return this.props.fetchNearbyById(this._offerId)
        .then(() => this.props.activeNearby);
      } else if (this.props.type === CardType.MAIN) {
        return Promise.resolve(this.props.sortedOffers);
      }
      return Promise.resolve([]);
    }

    componentDidMount() {
      this._load()
      .then((offers) => {
        this._offers = offers;
        this.setState((state) => ({loading: !state.loading}));
      });
    }

    render() {
      if (this.props.type === CardType.MAIN) {
        this._offers = this.props.sortedOffers;
      }

      return <Component
        offers={this._offers}
        loading={this.state.loading}
        setHoveredCard={this.props.setHoveredCard}
        type={this.props.type}/>;
    }
  }

  const mapStateToProps = (state) => ({
    sortedOffers: getCurrentOffers(state),
    activeNearby: state.INTERFACE.activeNearby,
  });

  const mapDispatchToProps = (dispatch) => ({
    setHoveredCard(id) {
      return dispatch(ActionCreator.setHoveredCard(id));
    },
    fetchNearbyById(id) {
      return dispatch(fetchNearbyById(id));
    }
  });

  WithNearbyLoading.propTypes = {
    type: PropTypes.string.isRequired,
    sortedOffers: offersPropTypes.offers,
    setHoveredCard: PropTypes.func.isRequired,
    activeNearby: offersPropTypes.offers,
    fetchNearbyById: PropTypes.func.isRequired,
    offerId: PropTypes.number.isRequired,
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithNearbyLoading);
};

export default withNearbyLoading;
