const AVATAR_URL = `https://api.adorable.io/avatars/74`;


export default [
  {
    id: 0,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    mark: ``,
    isBookmarked: true,
    title: `Beautiful \& luxurious studio at great location`,
    rating: 4.8,
    entire: `Apartment`,
    bedrooms: `3 Bedrooms`,
    adults: `Max 4 adults`,
    price: {
      value: `120`,
      type: `night`
    },
    inside: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cable TV`, `Fridge`],
    host: {
      avatar: `${AVATAR_URL}/${Math.random()}`,
      name: `Angelina`,
      text: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`]
    },
    reviews: [0]
  },
  {
    id: 1,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    mark: `Luxury`,
    isBookmarked: false,
    title: `Luxury flat`,
    rating: 5,
    entire: `Private room`,
    bedrooms: `1 Bedrooms`,
    adults: `Max 2 adults`,
    price: {
      value: `87`,
      type: `night`
    },
    inside: [`Wi-Fi`, `Shower`, `Fridge`, `Doorbell`],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Peter`,
      text: [`A modern and contemporary split level one bedroom apartment decorated to the highest of standards. If the landlord agrees to you having a pet, you may be required to pay a higher weekly rent.`]
    },
    reviews: [0, 1]
  },
  {
    id: 2,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    mark: ``,
    isBookmarked: true,
    title: `Wood and stone place`,
    rating: 3,
    entire: `Private room`,
    bedrooms: `1 Bedrooms`,
    adults: `Max 2 adults`,
    price: {
      value: `310`,
      type: `night`
    },
    inside: [`Wi-Fi`, `Shower`, `Fridge`, `Doorbell`, `Heating`, `Coffee machine`, `Baby seat`],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Vasiliy`,
      text: [`A modern and contemporary split level one bedroom apartment decorated to the highest of standards. If the landlord agrees to you having a pet, you may be required to pay a higher weekly rent.`]
    },
    reviews: [2, 3]
  },
  {
    id: 3,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    mark: `Premium`,
    isBookmarked: false,
    title: `Nice, cozy, warm big bed apartment`,
    rating: 2,
    entire: `Apartment`,
    bedrooms: `1 Bedrooms`,
    adults: `Max 2 adults`,
    price: {
      value: `49.50`,
      type: `night`
    },
    inside: [`Wi-Fi`, `Shower`, `Fridge`, `Doorbell`],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Anonymous`,
      text: [`Huge bed in bedroom`]
    },
    reviews: [3, 1]
  },
];
