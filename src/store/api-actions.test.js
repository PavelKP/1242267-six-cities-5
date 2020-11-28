import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {ActionType} from './action';
import {
  fetchOfferList,
  fetchCurrentReview,
  login,
  authorize,
  fetchOfferById,
  sendReview,
  setFavoriteStatus,
  fetchNearbyById
} from './api-actions';

const api = createAPI(()=>{});

describe(`Async operations work correctly`, () => {

  it(`Should make a correct API call to /hotels`, () => {
    const serverResponseData = [{fake: true, city: `Moscow`}];

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerLoader = fetchOfferList();

    apiMock
    .onGet(APIRoute.HOTELS)
    .reply(200, serverResponseData);

    return offerLoader(dispatch, ()=>{}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: serverResponseData,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_CITIES,
          payload: serverResponseData,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_DEFAULT_CITY,
          payload: serverResponseData[0].city,
        });
      });
  });

  it(`Should make a correct API call to /comments/id`, () => {
    const serverResponseData = [{fake: true}];
    const id = 1;

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewLoader = fetchCurrentReview(id); // close id here!!!

    apiMock
    .onGet(`${APIRoute.COMMENTS}/${id}`)
    .reply(200, serverResponseData);

    return reviewLoader(dispatch, ()=>{}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: serverResponseData,
        });
      });
  });

  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginLoader = login();

    apiMock
    .onGet(`${APIRoute.LOGIN}`)
    .reply(200, AuthorizationStatus.AUTH);

    return loginLoader(dispatch, ()=>{}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`Should make a correct API call to /authorize`, () => {
    const serverRequestData = {email: `test@test.ru`, password: `123456`};
    const serverResponseData = {avatarUrl: `6.jpg`, email: `test@test.ru`};

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const authorizeLoader = authorize(serverRequestData);

    apiMock
    .onPost(`${APIRoute.LOGIN}`)
    .reply(200, serverResponseData);

    return authorizeLoader(dispatch, ()=>{}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_USER_DATA,
          payload: serverResponseData
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.ROOT
        });
      });
  });

  it(`Should make a correct API call to /hotels/id`, () => {
    const serverResponseData = [{fake: true}];
    const id = 1;

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerSingleLoader = fetchOfferById(id); // close id here!!!

    apiMock
    .onGet(`${APIRoute.HOTELS}/${id}`)
    .reply(200, serverResponseData);

    return offerSingleLoader(dispatch, ()=>{}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_SINGLE_OFFER,
          payload: serverResponseData,
        });
      });
  });

  it(`Should make a correct API call to /comments/id`, () => {
    const serverResponseData = [{fake: true}];
    const serverRequestData = {
      review: {
        comment: `comment`,
        rating: 5
      }
    };

    const id = 1;

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const sendReviewLoader = sendReview(id, serverRequestData);

    apiMock
    .onPost(`${APIRoute.COMMENTS}/${id}`)
    .reply(200, serverResponseData);

    return sendReviewLoader(dispatch, ()=>{}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: serverResponseData
        });
      });
  });

  it(`Should make a correct API call to /favorites/id/status`, () => {
    const serverResponseData = [{fake: true}];
    const status = 1;
    const id = 1;

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const setFavoriteStatusLoader = setFavoriteStatus(id, status);

    apiMock
    .onPost(`${APIRoute.FAVORITE}/${id}/${status}`)
    .reply(200, serverResponseData);

    return setFavoriteStatusLoader(dispatch, ()=>{}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_OFFER,
          payload: serverResponseData
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.UPDATE_FAVORITE,
          payload: serverResponseData
        });
      });
  });

  it(`Should make a correct API call to /hotels/id/nearby`, () => {
    const serverResponseData = [{fake: true}];
    const id = 1;

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchNearbyByIdLoader = fetchNearbyById(id);

    apiMock
    .onGet(`${APIRoute.HOTELS}/${id}/nearby`)
    .reply(200, serverResponseData);

    return fetchNearbyByIdLoader(dispatch, ()=>{}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEARBY,
          payload: serverResponseData
        });
      });
  });
});
