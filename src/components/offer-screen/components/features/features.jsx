import React from 'react';
import PropTypes from 'prop-types';

import {pluralize, toCamelCase} from "../../../../utils/common";

const Features = ({type, bedrooms, maxAdults}) => (
  <ul className="property__features">
    <li className="property__feature property__feature--entire">
      {toCamelCase(type)}
    </li>
    <li className="property__feature property__feature--bedrooms">
      {pluralize(bedrooms, `Bedroom`, `s`)}
    </li>
    <li className="property__feature property__feature--adults">
      Max {pluralize(maxAdults, `Adult`, `s`)}
    </li>
  </ul>
);

Features.propTypes = {
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  maxAdults: PropTypes.number.isRequired
};

export default Features;
