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
    previewImage: offer.preview_image,
    host: Object.assign({}, offer.host, {
      avatarUrl: offer.host.avatar_url,
      isPro: offer.host.is_pro
    })
  });

  // Ненужные ключи удаляем
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;
  delete adaptedOffer.host.avatar_url;
  delete adaptedOffer.host.is_pro;

  return adaptedOffer;
};
