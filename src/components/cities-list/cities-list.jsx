import React from 'react';
import PropTypes from 'prop-types';

import {Cities} from '../../const';
import {toCamelCase} from "../../utils/common";
import {nanoid} from "nanoid";

const CitiesList = ({city: currentCity, onCityChange}) => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(Cities).map((city) => (
          <li className="locations__item" key={nanoid()}>
            <a className={`locations__item-link tabs__item ${currentCity === city ? `tabs__item--active` : ``}`}
              onClick={(evt) => {
                evt.preventDefault();
                onCityChange(city);
              }}
              href="#">
              <span>{toCamelCase(city)}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

CitiesList.propTypes = {
  city: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired
};

export default CitiesList;
