export const ActionType = {
  SET_CITY: `SET_CITY`,
  SET_ACTIVE_SORTING: `SET_ACTIVE_SORTING`,
  SET_HOVERED_CARD: `SET_HOVERED_CARD`,
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
  }
};
