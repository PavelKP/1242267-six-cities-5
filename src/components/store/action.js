export const ActionType = {
  SET_CITY: `SET_CITY`,
  SET_PLACES_COUNT: `SET_PLACES_COUNT`
};

export const actionCreator = {
  setCity(city) {
    return {
      type: ActionType.SET_CITY,
      payload: city
    };
  },
  setPlacesCount(count) {
    return {
      type: ActionType.SET_PLACES_COUNT,
      payload: count
    };
  }
};
