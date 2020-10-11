const AVATAR_URL = `https://api.adorable.io/avatars/74`;


export default [
  {
    id: 0,
    images: [`room.jpg`, `apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `studio-01.jpg`, `apartment-01.jpg`],
    mark: ``,
    isBookmarked: true,
    title: `Beautiful \& luxurious studio at great location`,
    rating: 4.8,
    entire: `Apartment`,
    bedrooms: `3`,
    adults: `4`,
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
    reviews: [0],
    location: `Amsterdam`
  },
  {
    id: 1,
    images: [`apartment-01.jpg`, `room.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `studio-01.jpg`, `apartment-01.jpg`],
    mark: `Luxury`,
    isBookmarked: false,
    title: `Luxury flat`,
    rating: 5,
    entire: `Private room`,
    bedrooms: `1`,
    adults: `1`,
    price: {
      value: `87`,
      type: `night`
    },
    inside: [`Wi-Fi`, `Shower`, `Fridge`, `Doorbell`],
    host: {
      avatar: `${AVATAR_URL}/${Math.random()}`,
      name: `Peter`,
      text: [`A modern and contemporary split level one bedroom apartment decorated to the highest of standards. If the landlord agrees to you having a pet, you may be required to pay a higher weekly rent.`]
    },
    reviews: [0, 1],
    location: `Brussels`
  },
  {
    id: 2,
    images: [`apartment-02.jpg`, `room.jpg`, `apartment-01.jpg`, `apartment-03.jpg`, `studio-01.jpg`, `apartment-01.jpg`],
    mark: ``,
    isBookmarked: true,
    title: `Wood and stone place`,
    rating: 3,
    entire: `Private room`,
    bedrooms: `1`,
    adults: `2`,
    price: {
      value: `310`,
      type: `night`
    },
    inside: [`Wi-Fi`, `Shower`, `Fridge`, `Doorbell`, `Heating`, `Coffee machine`, `Baby seat`],
    host: {
      avatar: `${AVATAR_URL}/${Math.random()}`,
      name: `Vasiliy`,
      text: [`A modern and contemporary split level one bedroom apartment decorated to the highest of standards. If the landlord agrees to you having a pet, you may be required to pay a higher weekly rent.`]
    },
    reviews: [2, 3],
    location: `Hamburg`
  },
  {
    id: 3,
    images: [`room.jpg`, `apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `studio-01.jpg`, `apartment-01.jpg`],
    mark: `Premium`,
    isBookmarked: true,
    title: `Nice, cozy, warm big bed apartment`,
    rating: 2,
    entire: `Apartment`,
    bedrooms: `2`,
    adults: `4`,
    price: {
      value: `49.50`,
      type: `night`
    },
    inside: [`Wi-Fi`, `Shower`, `Fridge`, `Doorbell`],
    host: {
      avatar: `${AVATAR_URL}/${Math.random()}`,
      name: `Anonymous`,
      text: [`Huge bed in bedroom. My new roommate will have access to the common areas of the home, living room, kitchen and bathroom.  Ideally, I’m looking for someone to stay at least six months, a non smoker, and not to noisy.`, ` It’s a quiet area with plenty of street parking, so If you have a car, you can typically find parking right in front.  If not, we have local shops nearby and public transportation as well.  The room is furnished with bed, dresser and tv.  Cable tv and wifi included in rent.`]
    },
    reviews: [3, 1],
    location: `Hamburg`
  },
];
