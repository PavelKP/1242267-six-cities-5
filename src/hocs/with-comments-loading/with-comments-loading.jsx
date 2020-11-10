import React from 'react';
import {fetchCurrentReview} from '../../store/api-actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {reviewsPropTypes} from '../../prop-types/prop-types';

const withCommentsLoading = (Component) => {
  class WithCommentsLoading extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        loading: true
      };

      this._offerId = this.props.offerId;
    }

    componentDidMount() {
      this.props.loadReview(this._offerId).then(() => {
        this.setState((state) => ({loading: !state.loading}));
      });
    }

    render() {
      // rest is the best, but eslint config doesn't allow this
      // const {loadReview, offerId, ...rest} = this.props;
      // Remove unnecessary props
      const {reviews} = this.props;

      return <Component loading={this.state.loading} reviews={reviews} />;
    }
  } // End of class

  WithCommentsLoading.propTypes = {
    offerId: PropTypes.number.isRequired,
    reviews: reviewsPropTypes.reviews,
    loadReview: PropTypes.func.isRequired,
  };

  const mapStateToProps = ({DATA}) => ({
    reviews: DATA.reviews,
  });

  const mapDispatchToProps = (dispatch) => ({
    loadReview(id) {
      return dispatch(fetchCurrentReview(id));
    }
  });

  // End of function - connect is HOC and returns wrapped WithCommentsLoading
  return connect(mapStateToProps, mapDispatchToProps)(WithCommentsLoading);
};


/*
  SECOND SOLUTION - redux compose feature

  https://ru.reactjs.org/docs/higher-order-components.html
  https://medium.com/practo-engineering/connected-higher-order-component-hoc-93ee63c91526

  import {compose} from 'redux';

  ...

const mapStateToProps = ({DATA}) => ({
  reviews: DATA.reviews,
});

const mapDispatchToProps = (dispatch) => ({
  loadReview(id) {
    return dispatch(fetchCurrentReview(id));
  }
})

const composedWithCommentsLoading = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withCommentsLoading
);

export {withCommentsLoading};
export default composedWithCommentsLoading;
*/

export {withCommentsLoading};
export default withCommentsLoading;
