export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const toCamelCase = (word) => {
  return word.slice(0, 1).toUpperCase() + word.slice(1);
};
