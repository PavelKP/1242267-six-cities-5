import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../../services/api';
import {APIRoute, AuthorizationStatus} from './../../../const';
import {ActionType} from '../../action';
import {
  fetchOfferList,
  fetchCurrentReview,
  login
} from '../../api-actions';

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
    const serverResponseData = AuthorizationStatus.AUTH;

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginLoader = login();

    apiMock
    .onGet(`${APIRoute.LOGIN}`)
    .reply(200, serverResponseData);

    return loginLoader(dispatch, ()=>{}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: serverResponseData,
        });
      });
  });
});
