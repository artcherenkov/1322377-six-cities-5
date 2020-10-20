import {nanoid} from "nanoid";

import {getRandomInteger} from "../utils/common.js";
import {HousingType} from "../const.js";
import {LoremIpsum} from "lorem-ipsum";
import {randomDate} from "../utils/common";
const AVATAR_URL = `https://api.adorable.io/avatars/128`;


const TITLES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Luxury Ensuite`,
  `Bright large double room, arty, bohemian decor`,
  `Fab Location! - warm spacious room - two bed house`,
  `Clean Studio Apartment Minutes from Shoreditch`,
  `Spacious family home with luxurious amenities`,
  `Stunning One Bedroom Flat in Central Victoria GG4`,
  `Stunning Surrey Hills Manor Accommodation & Venue`,
  `Hyde Park Duplex in 1860’s Georgian Townhouse`
];

const COORDINATES = [
  [52.3909553943508, 4.85309666406198],
  [52.369553943508, 4.85309666406198],
  [52.3909553943508, 4.929309666406198],
  [52.3809553943508, 4.939309666406198]
];

const OFFERS_COUNT = 10;
const PICTURES_COUNT = 6;

const getRandomType = () => {
  const types = Object.keys(HousingType);
  return HousingType[types[getRandomInteger(0, types.length - 1)]];
};

const getPictures = () => {
  let pictures = [];
  for (let i = 0; i < PICTURES_COUNT; i++) {
    pictures.push(`http://picsum.photos/248/152?r=${Math.random()}`);
  }
  return pictures;
};

export const generateOffers = (offersCount = OFFERS_COUNT) => {
  const offers = [];
  const lorem = new LoremIpsum();

  for (let i = 0; i < offersCount; i++) {
    offers.push({
      pictures: getPictures(),
      isPremium: Boolean(getRandomInteger()),
      costPerNight: getRandomInteger(10, 400) * 10, // кратно десяти
      title: TITLES[getRandomInteger(0, TITLES.length - 1)],
      type: getRandomType(),
      rating: getRandomInteger(10, 50) / 10, // от 1 до 5
      id: nanoid(),
      coords: COORDINATES[i] ? COORDINATES[i] : null,
      comments: Array(getRandomInteger(1, 5)).fill({}).map(() => ({
        name: `Max`,
        avatar: `${AVATAR_URL}/${Math.random()}`,
        rating: getRandomInteger(10, 50) / 10, // от 1 до 5
        date: randomDate(),
        content: lorem.generateSentences(2)
      }))
    });
  }

  return offers;
};
