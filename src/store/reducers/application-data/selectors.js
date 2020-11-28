
import {createSelector} from 'reselect';
import {MAX_REVIEW_AMOUNT} from '../../../const';

export const getOffers = (state) => state.DATA.offers;
export const getReviews = (state) => state.DATA.reviews;

export const getSortedReviews = createSelector(
    getReviews,
    (reviews) => {
      return reviews.slice().sort((a, b) => {
        if (b.date < a.date) {
          return -1;
        } else if (b.date > a.date) {
          return 1;
        }
        return 0;
      })
      .slice(0, MAX_REVIEW_AMOUNT);
    }
);
