import React from 'react';
import Review from '../review/review';
import PropTypes from 'prop-types';
import {reviewsPropTypes} from '../../prop-types/prop-types';
import withCommentsLoading from '../../hocs/with-comments-loading/with-comments-loading';

const ReviewList = (props) => {
  const {reviews, loading} = props;

  return (
    loading
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
};

ReviewList.propTypes = {
  reviews: reviewsPropTypes.reviews,
  loading: PropTypes.bool.isRequired,
};

export {ReviewList};
export default withCommentsLoading(ReviewList);
