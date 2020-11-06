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
import {changeCity, changeSortType, setCityOffers} from "../../store/action";
import {getActiveOfferId, getCity, getSortType} from "../../store/reducers/app-state/selectors";
import {getOffers, getCityOffers} from "../../store/reducers/app-data/selectors";
import {getAuthStatus, getUsername} from "../../store/reducers/app-user/selectors";
import Header from "../header/header";

const SortWrapped = withOptionsRollup(Sort);

const MainScreen = React.memo(function MainScreen(props) {
  const {city, cityOffers, sortType, onCityChange, onSortTypeChange, isLoggedIn, username} = props;

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
                <Map offers={cityOffers} cardType={MapType.CITIES} />
              </div>
            </div>
            : <NoOffers city={city} />}
        </div>
      </main>
    </div>
  );
});

MainScreen.propTypes = {
  offers: PropTypes.arrayOf(OfferCardProp).isRequired,
  cityOffers: PropTypes.arrayOf(OfferCardProp).isRequired,
  city: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
  onSortTypeChange: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  offers: getOffers(state),
  cityOffers: getCityOffers(state),
  sortType: getSortType(state),
  activeOffer: getActiveOfferId(state),
  isLoggedIn: getAuthStatus(state),
  username: getUsername(state)
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange(newCity) {
    dispatch(changeCity(newCity));
    dispatch(setCityOffers(newCity));
  },
  onSortTypeChange(newSortType) {
    dispatch(changeSortType(newSortType));
  }
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
