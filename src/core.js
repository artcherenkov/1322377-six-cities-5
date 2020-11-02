import {toCamelCase} from "./utils/common";

export const getCityOffers = (offers, city) => {
  if (offers) {
    return offers.filter((offer) => offer.city.name === toCamelCase(city));
  }

  return [];
};

export const adaptOffersToClient = (offer) => {
  const adaptedOffer = Object.assign({}, offer, {
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    maxAdults: offer.max_adults,
    previewImage: offer.preview_image
  });

  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;
  // Ненужные ключи мы удаляем
  // delete adaptedOffer.offers;
  // delete adaptedOffer.base_price;
  // delete adaptedOffer.destination;
  // delete adaptedOffer.date_from;
  // delete adaptedOffer.date_to;
  // delete adaptedOffer.is_favorite;

  return adaptedOffer;
};
