import React from 'react';
import moment from 'moment';
import {oneReviewPropTypes} from '../../prop-types/prop-types';


const ReviewList = ({review}) => {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.text}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{moment(review.date).format(`MMMM YYYY`)}</time>
      </div>
    </li>
  );
};

ReviewList.propTypes = {
  review: oneReviewPropTypes.review,
};

export default ReviewList;
