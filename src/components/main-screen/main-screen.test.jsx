import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import MainScreen from "./main-screen";
import {Provider} from 'react-redux';
import rootReducer from '../../store/reducers/root-reducer';
import {createStore} from "redux";
import {Cities, MapType, SortType} from "../../const";
import Map from "../map/map";

const offers = [
  {
    city: {
      name: `Cologne`,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13,
      },
    },
    images: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
    ],
    title: `The house among olive `,
    rating: 3.8,
    type: `house`,
    bedrooms: 3,
    price: 493,
    goods: [
      `Laptop friendly workspace`,
      `Washer`,
      `Towels`,
      `Fridge`,
      `Air conditioning`,
      `Baby seat`,
      `Breakfast`,
    ],
    host: {
      id: 25,
      name: `Angelina`,
      avatarUrl: `img/avatar-angelina.jpg`,
      isPro: true,
    },
    description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
    location: {
      latitude: 50.957361,
      longitude: 6.9509739999999995,
      zoom: 16,
    },
    id: 1,
    isFavorite: false,
    isPremium: false,
    maxAdults: 4,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
    commentsLength: 3,
  },
  {
    city: {
      name: `Brussels`,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    },
    images: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
    ],
    title: `Amazing and Extremely Central Flat`,
    rating: 4.3,
    type: `apartment`,
    bedrooms: 3,
    price: 323,
    goods: [
      `Towels`,
      `Baby seat`,
      `Laptop friendly workspace`,
      `Dishwasher`,
      `Washing machine`,
      `Air conditioning`,
      `Washer`,
      `Coffee machine`,
      `Breakfast`,
      `Fridge`,
    ],
    host: {
      id: 25,
      name: `Angelina`,
      avatarUrl: `img/avatar-angelina.jpg`,
      isPro: true,
    },
    description: `This is a place for dreamers to reset, reflect, and create. Designed with a \`slow\` pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
    location: {
      latitude: 50.839557,
      longitude: 4.346697,
      zoom: 16,
    },
    id: 2,
    isFavorite: false,
    isPremium: false,
    maxAdults: 8,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
    commentsLength: 2,
  },
];

it(`MainScreen is rendered correctly`, () => {
  const store = createStore(rootReducer);
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <MainScreen
              city={Cities.AMSTERDAM}
              cityOffers={offers}
              sortType={SortType.POPULAR}
            >
              <Map
                cityOffers={offers}
              />
            </MainScreen>
          </BrowserRouter>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
