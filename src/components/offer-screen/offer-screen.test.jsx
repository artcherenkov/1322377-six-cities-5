import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import OfferScreen from "./offer-screen";
import {Provider} from 'react-redux';
import rootReducer from '../../store/reducers/root-reducer';
import {createStore} from "redux";
import {AuthStatus} from "../../const";

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

const comments = [
  {
    comment: `The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.`,
    date: `2020-11-05T13:38:44.753Z`,
    id: 1,
    rating: 4,
    user: {
      avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/7.jpg`,
      id: 16,
      isPro: true,
      name: `Mollie`,
    },
  }, {
    comment: `The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.`,
    date: `2020-11-05T13:38:44.753Z`,
    id: 5,
    rating: 4,
    user: {
      avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/7.jpg`,
      id: 78,
      isPro: true,
      name: `Mollie`,
    },
  },
];

const initialState = {
  DATA: {
    cityOffers: offers,
    offersNearby: offers,
    comments,
  },
  USER: {
    authStatus: AuthStatus.AUTH,
    username: `username`,
  },
};

it(`OfferScreen is rendered correctly`, () => {
  const store = createStore(rootReducer, initialState);
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <OfferScreen id={`1`} />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
