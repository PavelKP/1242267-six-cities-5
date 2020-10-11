const AVATAR_URL = `https://api.adorable.io/avatars/54`;

export default [
  {
    id: 0,
    avatar: `${AVATAR_URL}/${Math.random()}`,
    name: `Max`,
    rating: `4`,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: new Date()
  },
  {
    id: 1,
    avatar: `${AVATAR_URL}/${Math.random()}`,
    name: `Igor`,
    rating: `1`,
    text: `Отель Волжская Ривьера. Китчевый шик наших газовиков. Илон Маск, допустим, впал бы в ступор и удавился бы от зависти в своих Европах. Не в Брюсселе, не в Вене, о нет!, в Угличе вы найдёте интерьер из серии, имперский стиль и его интерпретации.`,
    date: new Date()
  }
];
