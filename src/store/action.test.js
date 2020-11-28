import {ActionCreator, ActionType} from './action';

describe(`Action creators work correctly`, () => {
  it(`setCity() returns correct action`, () => {
    expect(ActionCreator.setCity(`fake`)).toEqual({
      type: ActionType.SET_CITY,
      payload: `fake`
    });
  });

  it(`setActiveSorting() returns correct action`, () => {
    expect(ActionCreator.setActiveSorting(`fake`)).toEqual({
      type: ActionType.SET_ACTIVE_SORTING,
      payload: `fake`
    });
  });

  it(`setHoveredCard() returns correct action`, () => {
    expect(ActionCreator.setHoveredCard(`fake`)).toEqual({
      type: ActionType.SET_HOVERED_CARD,
      payload: `fake`
    });
  });

  it(`requireAuthorization() returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(`fake`)).toEqual({
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: `fake`
    });
  });

  it(`loadOffers() returns correct action`, () => {
    expect(ActionCreator.loadOffers(`fake`)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: `fake`
    });
  });

  it(`loadCities() returns correct action`, () => {
    expect(ActionCreator.loadCities(`fake`)).toEqual({
      type: ActionType.LOAD_CITIES,
      payload: `fake`
    });
  });

  it(`setDefaultCity() returns correct action`, () => {
    expect(ActionCreator.setDefaultCity(`fake`)).toEqual({
      type: ActionType.SET_DEFAULT_CITY,
      payload: `fake`
    });
  });

  it(`loadReviews() returns correct action`, () => {
    expect(ActionCreator.loadReviews(`fake`)).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: `fake`
    });
  });

  it(`redirectToRoute() returns correct action`, () => {
    expect(ActionCreator.redirectToRoute(`fake`)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `fake`
    });
  });

  it(`loadSingleOffer() returns correct action`, () => {
    expect(ActionCreator.loadSingleOffer(`fake`)).toEqual({
      type: ActionType.LOAD_SINGLE_OFFER,
      payload: `fake`
    });
  });

  it(`setUserData() returns correct action`, () => {
    expect(ActionCreator.setUserData(`fake`)).toEqual({
      type: ActionType.SET_USER_DATA,
      payload: `fake`
    });
  });

  it(`updateOffer() returns correct action`, () => {
    expect(ActionCreator.updateOffer(`fake`)).toEqual({
      type: ActionType.UPDATE_OFFER,
      payload: `fake`
    });
  });

  it(`loadActiveNearby() returns correct action`, () => {
    expect(ActionCreator.loadActiveNearby(`fake`)).toEqual({
      type: ActionType.LOAD_NEARBY,
      payload: `fake`
    });
  });

  it(`loadFavorites() returns correct action`, () => {
    expect(ActionCreator.loadFavorites(`fake`)).toEqual({
      type: ActionType.LOAD_FAVORITES,
      payload: `fake`
    });
  });

  it(`updateFavorite() returns correct action`, () => {
    expect(ActionCreator.updateFavorite(`fake`)).toEqual({
      type: ActionType.UPDATE_FAVORITE,
      payload: `fake`
    });
  });
});
