import React from 'react';
import {fetchFavorites} from '../../store/api-actions';
import {connect} from 'react-redux';
import PropTypes, {oneOfType, arrayOf} from 'prop-types';
import {cityPropTypes} from '../../prop-types/prop-types';
import {offerPropTypes} from '../../prop-types/prop-types';

const withFavoritesLoading = (Component) => {
  class WithFavoritesLoading extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        loading: true
      };

      this._offerId = +this.props.serviceProp.match.params.id;
    }

    componentDidMount() {
      this.props.fetchFavorites()
      .then(() => {
        this.setState((state) => ({loading: !state.loading}));
      });
    }

    render() {
      return <Component
        offers={this.props.offers}
        loading={this.state.loading}
        cities={this.props.cities}
        {...this.props}/>;
    }
  }

  WithFavoritesLoading.propTypes = {
    offers: oneOfType([offerPropTypes.offer.isRequired, ()=> null]),
    cities: arrayOf(cityPropTypes.isRequired).isRequired,
    serviceProp: PropTypes.object.isRequired,
    fetchFavorites: PropTypes.func.isRequired,
  };

  const mapStateToProps = ({DATA}) => ({
    offers: DATA.favorites,
    cities: DATA.cities,
  });

  const mapDispatchToProps = (dispatch) => ({
    fetchFavorites() {
      return dispatch(fetchFavorites());
    }
  });

  // End of function - connect is HOC and returns wrapped WithCommentsLoading
  return connect(mapStateToProps, mapDispatchToProps)(WithFavoritesLoading);
};

export {withFavoritesLoading};
export default withFavoritesLoading;
