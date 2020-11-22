import {ActionCreator} from "./action";
import {AuthorizationStatus, APIRoute, AppRoute} from "./../const";

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      dispatch(ActionCreator.loadOffers(data));
      dispatch(ActionCreator.loadCities(data));
      dispatch(ActionCreator.setDefaultCity(data[0].city));
    })
);

export const fetchCurrentReview = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadReviews(data));
    })
);

export const login = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
  .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
  .catch(() => {})
);

export const authorize = ({email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
  .then(({data}) => {
    dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    dispatch(ActionCreator.setUserData(data));
  })
  .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
  .catch((err) => {
    throw err.response.data.error;
  })
);

export const fetchOfferById = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadSingleOffer(data));
    })
    .catch(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
);

export const sendReview = (offerId, review) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${offerId}`, {
    comment: review.comment,
    rating: review.rating,
  })
    .then(({data}) => {
      dispatch(ActionCreator.loadReviews(data));
    })
    .catch((err) => {
      return Promise.reject(err);
    })
);

export const setFavoriteStatus = (offerId, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${offerId}/${status}`)
  .then(({data}) => dispatch(ActionCreator.updateOffer(data)))
  .catch((err) => {
    throw err.response.data.error;
  })
);

export const fetchNearbyById = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}/nearby`)
    .then(({data}) => {
      dispatch(ActionCreator.loadActiveNearby(data));
    })
);
