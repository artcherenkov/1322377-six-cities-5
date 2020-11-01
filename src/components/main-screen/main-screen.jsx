import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import classNames from 'classnames';

import OffersList from "../offers-list/offers-list.jsx";
import NoOffers from "../no-offers/no-offers";
import Map from "../map/map";
import OfferCardProp from '../offer-card/offer-card.prop';
import {MapType, OffersListType} from "../../const";
import CitiesList from "../cities-list/cities-list";
import {toCamelCase} from "../../utils/common";
import Sort from "../sort/sort";
import withOptionsRollup from "../../hocs/with-options-rollup/with-options-rollup";
import {changeCity, getCityOffers, changeSortType} from "../../store/action";

const SortWrapped = withOptionsRollup(Sort);

const MainScreen = (props) => {
  const {city, cityOffers, sortType, onCityChange, onSortTypeChange} = props;

  const getMainClassNames = () => {
    return classNames({
      'page__main page__main--index': true,
      'page__main--index-empty': cityOffers.length === 0
    });
  };

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
      <main className={getMainClassNames()}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList city={city} onCityChange={onCityChange}/>
        <div className="cities">
          {cityOffers.length
            ? <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{cityOffers.length} places to stay in {toCamelCase(city)}</b>
                <SortWrapped currentSortType={sortType} onSortTypeChange={onSortTypeChange} />
                <OffersList offers={cityOffers} offersListType={OffersListType.CITIES} sortType={sortType} />
              </section>
              <div className="cities__right-section">
                <Map offers={cityOffers} cardType={MapType.CITIES} />
              </div>
            </div>
            : <NoOffers city={city} />}
        </div>
      </main>
    </div>
  );
};

MainScreen.propTypes = {
  offers: PropTypes.arrayOf(OfferCardProp).isRequired,
  cityOffers: PropTypes.arrayOf(OfferCardProp).isRequired,
  city: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
  onSortTypeChange: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
  cityOffers: state.cityOffers,
  sortType: state.sortType,
  activeOffer: state.activeOffer
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange(newCity) {
    dispatch(changeCity(newCity));
    dispatch(getCityOffers());
  },
  onSortTypeChange(newSortType) {
    dispatch(changeSortType(newSortType));
  }
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
