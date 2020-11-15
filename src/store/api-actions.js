import {ActionCreator} from "./action";

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      dispatch(ActionCreator.loadOffers(data));
      dispatch(ActionCreator.loadCities(data));
      dispatch(ActionCreator.setDefaultCity(data[0].city));
    })
);

export const fetchCurrentReview = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadReviews(data));
    })
);

