import {SortType} from "../const";

export const sort = {
  [SortType.POPULAR]: (offers) => offers.sort((a, b) => b.comments.length - a.comments.length),
  [SortType.PRICE_LOW_TO_HIGH]: (offers) => offers.sort((a, b) => a.costPerNight - b.costPerNight),
  [SortType.PRICE_HIGH_TO_LOW]: (offers) => offers.sort((a, b) => b.costPerNight - a.costPerNight),
  [SortType.TOP_RATED]: (offers) => offers.sort((a, b) => a.rating - b.rating),
  [SortType.DEFAULT]: (offers) => offers
};
