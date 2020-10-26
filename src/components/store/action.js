export const ActionType = {
  SET_CITY: `SET_CITY`
};

export const ActionCreator = {
  setCity(city) {
    return {
      type: ActionType.SET_CITY,
      payload: city
    };
  }
};
