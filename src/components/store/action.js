export const ActionType = {
  SET_CITY: `SET_CITY`,
  SET_ACTIVE_FILTER: `SET_ACTIVE_FILTER`,
};

export const ActionCreator = {
  setCity(city) {
    return {
      type: ActionType.SET_CITY,
      payload: city
    };
  },
  setActiveFilter(filter) {
    return {
      type: ActionType.SET_ACTIVE_FILTER,
      payload: filter
    };
  }
};
