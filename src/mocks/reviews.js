const getAvatar = (randomNumber) =>
  `https://robohash.org/${randomNumber}?set=set4&size=75x75&bgset=bg1`;


export default [
  {
    id: 0,
    avatar: getAvatar(Math.random()),
    name: `Max`,
    rating: 4,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: new Date()
  },
  {
    id: 1,
    avatar: getAvatar(Math.random()),
    name: `Igor`,
    rating: 1,
    text: `Отель Волжская Ривьера. Китчевый шик наших газовиков. Илон Маск, допустим, впал бы в ступор и удавился бы от зависти в своих Европах. Не в Брюсселе, не в Вене, о нет!, в Угличе вы найдёте интерьер из серии, имперский стиль и его интерпретации.`,
    date: new Date()
  },
  {
    id: 2,
    avatar: getAvatar(Math.random()),
    name: `Vasya`,
    rating: 3,
    text: `Спасибо за шикарную квартиру, очень выручили! Я и моя семья из Саратова, а дочь пришлось выдавать замуж за екатернбуржца. Вот и пришлось воспользоваться услугами съёмной квартиры, чтобы не нарушать традиции свадебного обряда по выкупу невесты.`,
    date: new Date()
  },
  {
    id: 3,
    avatar: getAvatar(Math.random()),
    name: `Petya`,
    rating: 5,
    text: `Прекрасный отель, отвечающий всем необходимым требованиям для полноценного отдыха и работы. Очень хороший дизайн, где удобство и комфорт гостей являются основными приоритетами. Отлично обученный персонал. Были небольшие недочеты с завтраком, когда оказались не совсем готовы к наплыву гостей к окончанию, но думаю, это скорее случайность, чем закономерность. Считаю, что хозяевам доморощенных российских отелей следует использовать такие отели как образец.`,
    date: new Date()
  }
];
