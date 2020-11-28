import React from 'react';
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
    }

    componentDidMount() {
      this.props.fetchNearbyById(this._offerId)
      .then(() => this.setState((state) => ({loading: !state.loading})));
    }

    componentDidUpdate(prevProps) {
      if (+prevProps.offerId !== +this.props.offerId) {

        this._offerId = this.props.offerId;
        this.props.fetchNearbyById(this._offerId);
      }
    }

    render() {
      return <Component
        offers={this.props.activeNearby}
        loading={this.state.loading}
        setHoveredCard={this.props.setHoveredCard}
        type={this.props.type}/>;
    }
  }

  WithNearbyLoading.propTypes = {
    type: PropTypes.string.isRequired,
    sortedOffers: offersPropTypes.offers,
    setHoveredCard: PropTypes.func.isRequired,
    activeNearby: offersPropTypes.offers,
    fetchNearbyById: PropTypes.func.isRequired,
    offerId: PropTypes.number.isRequired,
  };

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

  return connect(mapStateToProps, mapDispatchToProps)(WithNearbyLoading);
};

export {withNearbyLoading};
export default withNearbyLoading;
