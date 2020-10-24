import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {ActionCreator} from "../../store/action";
import OffersList from "../offers-list/offers-list.jsx";
import Map from "../map/map";
import OfferCardProp from '../offer-card/offer-card.prop';
import {MapType, OffersListType} from "../../const";
import CitiesList from "../cities-list/cities-list";
import {toCamelCase} from "../../utils/common";

const MainScreen = (props) => {
  const {city, cityOffers, onCityChange} = props;
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList city={city} onCityChange={onCityChange}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cityOffers.length} places to stay in {toCamelCase(city)}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"/>
                  </svg>
                </span>
                <ul className="places__options places__options--custom">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <OffersList offers={cityOffers} offersListType={OffersListType.CITIES}/>
            </section>
            <div className="cities__right-section">
              <Map offers={cityOffers} cardType={MapType.CITIES}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainScreen.propTypes = {
  offers: PropTypes.arrayOf(OfferCardProp).isRequired,
  cityOffers: PropTypes.arrayOf(OfferCardProp).isRequired,
  city: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
  cityOffers: state.cityOffers
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange(newCity) {
    dispatch(ActionCreator.changeCity(newCity));
    dispatch(ActionCreator.getCityOffers());
  }
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
