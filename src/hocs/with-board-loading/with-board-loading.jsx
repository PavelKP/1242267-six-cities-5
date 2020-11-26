import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {offersPropTypes} from '../../prop-types/prop-types';
import {getCurrentOffers} from '../../store/combined-selectors';
import {ActionCreator} from '../../store/action';

const withBoardLoading = (Component) => {
  class WithBoardLoading extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      return <Component
        offers={this.props.sortedOffers}
        loading={false}
        setHoveredCard={this.props.setHoveredCard}
        type={this.props.type}/>;
    }
  }

  const mapStateToProps = (state) => ({
    sortedOffers: getCurrentOffers(state),
  });

  const mapDispatchToProps = (dispatch) => ({
    setHoveredCard(id) {
      return dispatch(ActionCreator.setHoveredCard(id));
    }
  });

  WithBoardLoading.propTypes = {
    type: PropTypes.string.isRequired,
    sortedOffers: offersPropTypes.offers,
    setHoveredCard: PropTypes.func.isRequired,
    activeNearby: offersPropTypes.offers,
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithBoardLoading);
};

export {withBoardLoading};
export default withBoardLoading;
