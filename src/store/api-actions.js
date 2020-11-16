import {ActionCreator} from "./action";
import {AuthorizationStatus} from "./../const";

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

export const login = () => (dispatch, _getState, api) => (
  api.get(`/login`)
  .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
  .catch(() => {})
);

export const authorize = ({email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
  .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
  .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
  .catch((err) => {
    throw err.response.data.error;
  })
);
