import {userInterface} from './user-interface';
import {ActionType} from '../../../store/action';
import {cities, SortingType, rawCity} from '../../../__mocks__/mock-store';
import {rawOffers, offers} from '../../../__mocks__/mock-offers';


const DEFAULT_HOVERED_CARD = -1;

describe(`userInterface reducer`, () => {
  it(`userInterface reducer without additional parameters should return initial state`, () => {
    expect(userInterface(void 0, {})).toEqual({
      city: null,
      activeSorting: SortingType.POPULAR,
      hoveredCard: DEFAULT_HOVERED_CARD,
      activeOffer: null,
      activeNearby: null,
    });
  });

  it(`userInterface reducer should update city`, () => {
    expect(userInterface(void 0, {
      type: ActionType.SET_CITY,
      payload: cities[0],
    }))
    .toEqual({
      city: {
        name: `Cologne`,
        coordinates: [11.1, 22.2],
        zoom: 12,
      },
      activeSorting: SortingType.POPULAR,
      hoveredCard: DEFAULT_HOVERED_CARD,
      activeOffer: null,
      activeNearby: null,
    });
  });

  it(`userInterface reducer should update active sorting`, () => {
    expect(userInterface(void 0, {
      type: ActionType.SET_ACTIVE_SORTING,
      payload: SortingType.PRICE_TO_HIGH,
    }))
    .toEqual({
      city: null,
      activeSorting: SortingType.PRICE_TO_HIGH,
      hoveredCard: DEFAULT_HOVERED_CARD,
      activeOffer: null,
      activeNearby: null,
    });
  });


  it(`userInterface reducer should update hovered card`, () => {
    expect(userInterface(void 0, {
      type: ActionType.SET_HOVERED_CARD,
      payload: 1,
    }))
    .toEqual({
      city: null,
      activeSorting: SortingType.POPULAR,
      hoveredCard: 1,
      activeOffer: null,
      activeNearby: null,
    });
  });

  it(`userInterface reducer should set default city`, () => {
    expect(userInterface(void 0, {
      type: ActionType.SET_DEFAULT_CITY,
      payload: rawCity,
    }))
    .toEqual({
      city: cities[0],
      activeSorting: SortingType.POPULAR,
      hoveredCard: DEFAULT_HOVERED_CARD,
      activeOffer: null,
      activeNearby: null,
    });
  });

  it(`userInterface reducer should load active offer`, () => {
    expect(userInterface(void 0, {
      type: ActionType.LOAD_SINGLE_OFFER,
      payload: rawOffers[0],
    }))
    .toEqual({
      city: null,
      activeSorting: SortingType.POPULAR,
      hoveredCard: DEFAULT_HOVERED_CARD,
      activeOffer: offers[0],
      activeNearby: null,
    });
  });

  it(`userInterface reducer should load nearby offers`, () => {
    expect(userInterface(void 0, {
      type: ActionType.LOAD_NEARBY,
      payload: rawOffers,
    }))
    .toEqual({
      city: null,
      activeSorting: SortingType.POPULAR,
      hoveredCard: DEFAULT_HOVERED_CARD,
      activeOffer: null,
      activeNearby: offers,
    });
  });
});
