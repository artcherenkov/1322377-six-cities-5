import React from 'react';
import PropTypes from 'prop-types';
import OfferListView from "../offer-list-view/offer-list-view";
import {getFavoriteOffers} from "../../store/reducers/app-data/selectors";
import {useDispatch, useSelector} from "react-redux";
import {fetchFavoritesList} from "../../store/api-action";
import Header from "../header/header";
import {getAuthStatus, getUsername} from "../../store/reducers/app-user/selectors";
import offerCardProp from "../offer-card-view/offer-card.prop";

const FavoritesScreen = ({favoriteOffers}) => {
  const dispatch = useDispatch();

  const loadFavorites = () => () => dispatch(fetchFavoritesList());
  loadFavorites();

  const offers = favoriteOffers || useSelector(getFavoriteOffers);
  const isLoggedIn = useSelector(getAuthStatus);
  const username = useSelector(getUsername);

  const cities = new Set(offers.map((offer) => offer.city.name));
  const sortedCities = [...cities].sort();

  let sortedOffers = {};
  for (let val of sortedCities) {
    sortedOffers = Object.assign({}, sortedOffers, {
      [val]: offers.filter((offer) => offer.city.name === val)
    });
  }

  return (<div className="page">
    <Header isLoggedIn={isLoggedIn} username={username} />
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Object.keys(sortedOffers).map((city, i) => (
              <li key={i} className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>{city}</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {sortedOffers[city].map((offer, j) => <OfferListView key={j} offer={offer} />)}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
    <footer className="footer container">
      <a className="footer__logo-link" href="/">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
      </a>
    </footer>
  </div>);
};

FavoritesScreen.propTypes = {
  favoriteOffers: PropTypes.arrayOf(offerCardProp)
};

export default FavoritesScreen;
