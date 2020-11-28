import React from 'react';
import moment from 'moment';
import {oneReviewPropTypes} from '../../prop-types/prop-types';
import {getStarsStyle} from '../../utils';

const Review = ({review}) => {
  const dateShort = moment(review.date).format(`MMMM YYYY`);
  const dateFull = moment(review.date).format(`YYYY-MM-DD`);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={getStarsStyle(review.rating)}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={dateFull}>{dateShort}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: oneReviewPropTypes.review,
};

export {Review};
export default Review;
