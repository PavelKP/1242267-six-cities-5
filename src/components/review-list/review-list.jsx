import React from 'react';
import Review from '../review/review';
import {PropTypes} from 'prop-types';
import {reviewsPropTypes} from '../../prop-types/prop-types';
import {fetchCurrentReview} from '../../store/api-actions';
import {connect} from 'react-redux';

class ReviewList extends React.PureComponent {
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
    const reviews = this.props.reviews;
    return (
      this.state.loading
        ? <h3>Loading...please wait</h3>
        : <React.Fragment>
          <h2 className="reviews__title">Reviews &middot;
            <span className="reviews__amount">{reviews.length}</span>
          </h2>
          <ul className="reviews__list">
            {reviews.map((review) => (
              <Review review={review} key={`review-${review.id}`} />
            ))}
          </ul>
        </React.Fragment>
    );
  }
}

ReviewList.propTypes = {
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

export {ReviewList};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);
