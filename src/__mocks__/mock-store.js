import {offers} from './mock-offers';

const DEFAULT_SORTING = `popular`;

export const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`,
};

const cities = [{
  name: `Moscow`,
  coordinates: [11.1, 22.2],
  zoom: 12,
},
{
  name: `Odintsovo`,
  coordinates: [33.33, 11.551],
  zoom: 12,
}];

export default {
  DATA: {
    offers,
    cities,
  },
  INTERFACE: {
    city: cities[0],
    activeSorting: DEFAULT_SORTING,
    hoveredCard: 0,
  },
  USER: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    userData: {
      avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/6.jpg`,
      email: `test@test.ru`,
    }
  }
};
