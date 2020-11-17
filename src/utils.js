export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getStarsStyle = (rating) => ({
  width: `${Math.round(rating) * 20}%`,
});
