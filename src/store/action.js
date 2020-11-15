export const ActionType = {
  SET_CITY: `SET_CITY`,
  SET_ACTIVE_SORTING: `SET_ACTIVE_SORTING`,
  SET_HOVERED_CARD: `SET_HOVERED_CARD`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_CITIES: `LOAD_CITIES`,
  SET_DEFAULT_CITY: `SET_DEFAULT_CITY`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
};

export const ActionCreator = {
  setCity(city) {
    return {
      type: ActionType.SET_CITY,
      payload: city
    };
  },
  setActiveSorting(sorting) {
    return {
      type: ActionType.SET_ACTIVE_SORTING,
      payload: sorting
    };
  },
  setHoveredCard(id) {
    return {
      type: ActionType.SET_HOVERED_CARD,
      payload: id,
    };
  },
  requireAuthorization(status) {
    return {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: status,
    };
  },
  loadOffers(offers) {
    return {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };
  },
  loadCities(offers) {
    return {
      type: ActionType.LOAD_CITIES,
      payload: offers,
    };
  },
  setDefaultCity(city) {
    return {
      type: ActionType.SET_DEFAULT_CITY,
      payload: city,
    };
  },
  loadReviews(reviews) {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };
  },
};
