export const ActionType = {
  SET_CITY: `SET_CITY`,
  SET_ACTIVE_SORTING: `SET_ACTIVE_SORTING`,
  SET_HOVERED_CARD: `SET_HOVERED_CARD`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_CITIES: `LOAD_CITIES`,
  SET_DEFAULT_CITY: `SET_DEFAULT_CITY`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_SINGLE_OFFER: `LOAD_SINGLE_OFFER`,
  SET_USER_DATA: `SET_USER_DATA`,
  UPDATE_OFFER: `UPDATE_OFFER`,
  LOAD_NEARBY: `LOAD_NEARBY`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  UPDATE_FAVORITE: `UPDATE_FAVORITES`,
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
  redirectToRoute(url) {
    return {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: url,
    };
  },
  loadSingleOffer(id) {
    return {
      type: ActionType.LOAD_SINGLE_OFFER,
      payload: id,
    };
  },
  setUserData(userData) {
    return {
      type: ActionType.SET_USER_DATA,
      payload: userData,
    };
  },
  updateOffer(offer) {
    return {
      type: ActionType.UPDATE_OFFER,
      payload: offer,
    };
  },
  loadActiveNearby(nearbyOffers) {
    return {
      type: ActionType.LOAD_NEARBY,
      payload: nearbyOffers,
    };
  },
  loadFavorites(favorites) {
    return {
      type: ActionType.LOAD_FAVORITES,
      payload: favorites,
    };
  },
  updateFavorite(favorite) {
    return {
      type: ActionType.UPDATE_FAVORITE,
      payload: favorite,
    };
  },
};
