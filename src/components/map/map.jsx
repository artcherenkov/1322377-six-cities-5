import React from "react";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import * as RL from "react-leaflet";

import {getActiveOfferId} from "../../store/reducers/app-state/selectors";
import MapInner, {getLocation} from "./components/map-inner";
import OfferProp from "../offer-card-view/offer-card.prop";

const Map = React.memo(function Map({cityOffers, mapType, offerId}) {
  const activeOfferId = offerId || useSelector(getActiveOfferId);
  const location = getLocation(cityOffers[0].city.location, {isCityNeeded: true});

  return (
    <RL.MapContainer className={mapType + ` map`}>
      <MapInner
        cityOffers={cityOffers}
        city={location.dest}
        zoom={location.zoom}
        activeOfferId={activeOfferId}
        mapType={mapType} />
    </RL.MapContainer>
  );
});

Map.propTypes = {
  cityOffers: PropTypes.arrayOf(OfferProp),
  mapType: PropTypes.string,
  offerId: PropTypes.string,
};

export default Map;
