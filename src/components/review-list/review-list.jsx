import React from 'react';
import Review from '../review/review';
import {PropTypes, arrayOf} from 'prop-types';
import {reviewsPropTypes} from '../../prop-types/prop-types';


const ReviewList = ({children, reviewsId, reviews}) => {
  return (
    <React.Fragment>
      {children}
      <ul className="reviews__list">
        {reviewsId.map((id) => (
          <Review review={reviews[id]} key={`review-${id}`}/>
        ))}
      </ul>
    </React.Fragment>
  );
};

ReviewList.propTypes = {
  children: PropTypes.object,
  reviews: reviewsPropTypes.reviews,
  reviewsId: arrayOf(PropTypes.number),
};

export default ReviewList;
