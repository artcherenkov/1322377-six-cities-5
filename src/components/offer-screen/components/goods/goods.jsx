import React from 'react';
import PropTypes from 'prop-types';

const Goods = ({goods}) => (
  <div className="property__inside">
    <h2 className="property__inside-title">What&apos;s inside</h2>
    <ul className="property__inside-list">
      {goods.map((good, i) => (
        <li className="property__inside-item" key={`good-${i}`}>{good}</li>
      ))}
    </ul>
  </div>
);

Goods.propTypes = {
  goods: PropTypes.array.isRequired
};

export default Goods;
