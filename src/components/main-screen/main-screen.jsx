import React from "react";
import PropTypes from "prop-types";
import {useSelector, useDispatch} from "react-redux";
import classNames from 'classnames';

import OffersList from "../offers-list/offers-list.jsx";
import NoOffers from "../no-offers/no-offers";
import Map from "../map/map";
import {MapType, OffersListType} from "../../const";
import CitiesList from "../cities-list/cities-list";
import {toCamelCase} from "../../utils/common";
import Sort from "../sort/sort";
import withOptionsRollup from "../../hocs/with-options-rollup/with-options-rollup";
import {changeCity, changeSortType, setCityOffers} from "../../store/action";
import {getCity, getSortType} from "../../store/reducers/app-state/selectors";
import {getCityOffers} from "../../store/reducers/app-data/selectors";
import {getAuthStatus, getUsername} from "../../store/reducers/app-user/selectors";
import Header from "../header/header";
import OfferProp from "../offer-card-view/offer-card.prop";

const SortWrapped = withOptionsRollup(Sort);

const MainScreen = React.memo(function MainScreen(
    {city, cityOffers, sortType}
) {
  const dispatch = useDispatch();

  city = city || useSelector(getCity);
  cityOffers = cityOffers || useSelector(getCityOffers);
  sortType = sortType || useSelector(getSortType);
  const isLoggedIn = useSelector(getAuthStatus);
  const username = useSelector(getUsername);

  const onCityChange = (newCity) => {
    dispatch(changeCity(newCity));
    dispatch(setCityOffers(newCity));
  };

  const onSortTypeChange = (newSortType) => {
    dispatch(changeSortType(newSortType));
  };

  const getMainClassNames = () => {
    return classNames({
      'page__main page__main--index': true,
      'page__main--index-empty': cityOffers.length === 0
    });
  };

  return (
    <div className="page page--gray page--main">
      <Header isLoggedIn={isLoggedIn} username={username} />
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
                <Map cityOffers={cityOffers} mapType={MapType.CITIES} />
              </div>
            </div>
            : <NoOffers city={city} />}
        </div>
      </main>
    </div>
  );
});

MainScreen.propTypes = {
  city: PropTypes.string,
  cityOffers: PropTypes.arrayOf(OfferProp),
  sortType: PropTypes.string
};

export default MainScreen;
