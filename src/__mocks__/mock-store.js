import {offers} from './mock-offers';

const DEFAULT_SORTING = `popular`;

export const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`,
};

export const cities = [{
  name: `Moscow`,
  coordinates: [11.1, 22.2],
  zoom: 12,
},
{
  name: `Odintsovo`,
  coordinates: [33.33, 11.551],
  zoom: 12,
}];

export const userData = {
  avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/6.jpg`,
  email: `test@test.ru`,
};

export const reviews = [
  {
    id: 2,
    user: {
      avatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/6.jpg`,
      id: 1,
      isPro: false,
      name: `Igor`,
    },
    rating: 5,
    comment: `The best hotel ever!`,
    date: `2020-11-20T14:37:45.031Z`,
  },
  {
    id: 1,
    user: {
      avatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/3.jpg`,
      id: 12,
      isPro: true,
      name: `Isaac`,
    },
    rating: 4,
    comment: `Home is amazing. It's like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius,`,
    date: `2020-11-04T13:38:44.753Z`,
  }
];

export const serviceProp = {
  match: {
    params: {
      id: 1
    }
  }
};

export default {
  DATA: {
    offers,
    cities,
    reviews,
  },
  INTERFACE: {
    city: cities[0],
    activeSorting: DEFAULT_SORTING,
    hoveredCard: 0,
    activeNearby: offers,
  },
  USER: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    userData,
  }
};
