import offers from '../../../mocks/offers';
import reviews from '../../../mocks/reviews';
import cities from '../../../mocks/cities';

const DEFAULT_CITY = cities[0];

const initialState = {
  cities,
  offers,
  reviews,
};


const applicationData = (state = initialState) => {
  return state; // returns state forever
};

export {applicationData, DEFAULT_CITY};
