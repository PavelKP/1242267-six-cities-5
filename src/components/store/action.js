export const ActionType = {
  SET_CITY: `SET_CITY`,
  SET_FILTERED_OFFERS: `SET_FILTERED_OFFERS`
};

export const ActionCreator = {
  setCity(city) {
    return {
      type: ActionType.SET_CITY,
      payload: city
    };
  },
  setFilteredOffers(offers) {
    return {
      type: ActionType.SET_FILTERED_OFFERS,
      payload: offers
    };
  }
};
