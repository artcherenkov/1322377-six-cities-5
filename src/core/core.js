import {toCamelCase} from "../utils/common";

export const getCityOffers = (offers, city) => {
  if (offers) {
    return offers.filter((offer) => offer.city.name === toCamelCase(city));
  }

  return [];
};

export const updateFavoriteOffers = (offers, cityOffers, offer) => {
  return [offers, cityOffers].reduce((acc, arr, index) => {
    arr
      .find((_offer) => _offer.id === offer.id)
      .isFavorite = offer.is_favorite;
    acc = Object.assign({}, acc, {
      [index]: arr
    });
    return acc;
  }, {});
};
