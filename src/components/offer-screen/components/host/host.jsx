import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

const Host = ({host, description}) => {
  const {name, avatarUrl, isPro} = host;
  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={classNames(`property__avatar-wrapper user__avatar-wrapper`, {'property__avatar-wrapper--pro': isPro})}>
          <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar"/>
        </div>
        <span className="property__user-name">{name}</span>
      </div>
      <div className="property__description">
        <p className="property__text">{description}</p>
      </div>
    </div>);
};

Host.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    isPro: PropTypes.bool.isRequired,
  }),
  description: PropTypes.string.isRequired,
};

export default Host;
