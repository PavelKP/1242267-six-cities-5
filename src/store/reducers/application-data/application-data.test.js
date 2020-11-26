import {applicationData} from './application-data';
import {offers, rawOffers} from '../../../__mocks__/mock-offers';
import {rawReviews, reviews} from '../../../__mocks__/mock-store';
import {ActionType} from '../../../store/action';

describe(`applicationData reducer`, () =>{
  it(`applicationData reducer without additional parameters should return initial state`, () => {
    expect(applicationData(void 0, {})).toEqual({
      cities: [],
      offers: [],
      reviews: [],
    });
  });

  it(`applicationData reducer should update offers by load from a server`, () => {
    expect(applicationData(void 0, {
      type: ActionType.LOAD_OFFERS,
      payload: rawOffers,
    }))
    .toEqual({
      cities: [],
      offers,
      reviews: [],
    });
  });

  it(`applicationData reducer should update cities by offers iteration`, () => {
    expect(applicationData(void 0, {
      type: ActionType.LOAD_CITIES,
      payload: rawOffers,
    }))
    .toEqual({
      cities: [offers[0].city],
      offers: [],
      reviews: [],
    });
  });

  it(`applicationData reducer should update reviews`, () => {
    expect(applicationData(void 0, {
      type: ActionType.LOAD_REVIEWS,
      payload: rawReviews,
    }))
    .toEqual({
      cities: [],
      offers: [],
      reviews,
    });
  });

  it(`applicationData reducer should update single offer`, () => {
    expect(applicationData(void 0, {
      type: ActionType.UPDATE_OFFER,
      payload: rawOffers[0],
    }))
    .toEqual({
      cities: [],
      offers: [offers[0]],
      reviews: [],
    });
  });
});

