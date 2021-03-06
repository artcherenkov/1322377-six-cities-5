import React from 'react';
import PropTypes from 'prop-types';
import {toCamelCase} from "../../utils/common";

const NoOffers = (props) => {
  const {city} = props;

  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">
            We could not find any property available at the moment in {toCamelCase(city)}
          </p>
        </div>
      </section>
      <div className="cities__right-section" />
    </div>
  );
};

NoOffers.propTypes = {
  city: PropTypes.string.isRequired
};

export default NoOffers;
