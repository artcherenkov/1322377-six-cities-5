export const getCityOffers = (offers, city) => {
  if (offers) {
    return offers.filter((offer) => offer.city === city);
  }

  return [];
};
