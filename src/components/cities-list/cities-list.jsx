import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {Cities} from '../../const';
import {toCamelCase} from "../../utils/common";
import {nanoid} from "nanoid";

const CitiesList = ({city: currentCity, onCityChange}) => {

  const getClassNames = (city) => {
    return classNames({
      'locations__item-link tabs__item': true,
      'tabs__item--active': currentCity === city
    });
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(Cities).map((city) => (
            <li className="locations__item" key={nanoid()}>
              <a className={getClassNames(city)}
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
};

CitiesList.propTypes = {
  city: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired
};

export default CitiesList;
