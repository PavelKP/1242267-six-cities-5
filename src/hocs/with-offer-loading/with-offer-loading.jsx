import React from 'react';
import {fetchOfferById} from '../../store/api-actions';
import {connect} from 'react-redux';
import PropTypes, {oneOfType} from 'prop-types';
import {offerPropTypes} from '../../prop-types/prop-types';

const withOfferLoading = (Component) => {
  class WithOfferLoading extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        loading: true
      };

      this._offerId = +this.props.serviceProp.match.params.id;
    }

    componentDidMount() {
      this.props.fetchOfferById(this._offerId)
      .then(() => {
        this.setState((state) => ({loading: !state.loading}));
      });
    }

    componentDidUpdate(prevProps) {
      if (+prevProps.serviceProp.match.params.id !== +this.props.serviceProp.match.params.id) {
        this._offerId = +this.props.serviceProp.match.params.id;
        this.props.fetchOfferById(this._offerId);
      }
    }

    render() {
      return <Component
        loading={this.state.loading}
        activeOffer={this.props.activeOffer}
        offerId={this._offerId}
        {...this.props}/>;
    }
  }

  WithOfferLoading.propTypes = {
    serviceProp: PropTypes.object.isRequired,
    fetchOfferById: PropTypes.func.isRequired,
    activeOffer: oneOfType([offerPropTypes.offer.isRequired, ()=> null]),
  };

  const mapStateToProps = ({INTERFACE}) => ({
    activeOffer: INTERFACE.activeOffer,
  });

  const mapDispatchToProps = (dispatch) => ({
    fetchOfferById(id) {
      return dispatch(fetchOfferById(id));
    }
  });

  // End of function - connect is HOC and returns wrapped WithCommentsLoading
  return connect(mapStateToProps, mapDispatchToProps)(WithOfferLoading);
};

export {withOfferLoading};
export default withOfferLoading;
