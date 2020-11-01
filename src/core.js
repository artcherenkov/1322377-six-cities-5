import {toCamelCase} from "./utils/common";

export const getCityOffers = (offers, city) => {
  if (offers) {
    return offers.filter((offer) => offer.city.name === toCamelCase(city));
  }

  return [];
};
