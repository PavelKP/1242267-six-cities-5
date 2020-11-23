
const DEFAULT_SORTING = `popular`;

export const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`,
};

const city = {
  name: `Moscow`,
  coordinates: [111, 222],
  zoom: 12,
};

const cities = [city];

const offers = [
  {
    city: {
      name: `Moscow`,
      coordinates: [
        50.938361,
        6.959974
      ],
      zoom: 13
    },
    images: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`
    ],
    title: `The house among olive `,
    rating: 3.8,
    bedrooms: 3,
    price: 493,
    host: {
      avatar: `img/avatar-angelina.jpg`,
      id: 25,
      isPro: true,
      name: `Angelina`,
    },
    description: [
      `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`
    ],
    id: 1,
    isBookmarked: true,
    isPremium: false,
    entire: `house`,
    adults: 4,
    inside: [
      `Laptop friendly workspace`,
      `Washer`,
      `Towels`,
      `Fridge`,
      `Air conditioning`,
      `Baby seat`,
      `Breakfast`
    ],
    coordinates: [
      50.957361,
      6.9509739999999995
    ],
    zoom: 16,
    preview: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`
  }
];

export default {
  DATA: {
    offers,
    cities,
  },
  INTERFACE: {
    city,
    activeSorting: DEFAULT_SORTING,
  },
  USER: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    userData: {
      avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/6.jpg`,
      email: `test@test.ru`,
    }
  }
};
