import React from "react";
import PropTypes from 'prop-types';
import {nanoid} from "nanoid";
import * as RL from "react-leaflet";
import * as L from "leaflet";
import OfferProp from "../../offer-card-view/offer-card.prop";
import {MapType} from "../../../const";

export const getLocation = (location, {isCityNeeded = false}) => {
  const dest = Object.values(location).slice(0, 2);
  const zoom = Object.values(location).slice(2).flat();

  if (isCityNeeded) {
    return {dest, zoom};
  }

  return dest;
};

const ICON = L.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

const ACTIVE_ICON = L.icon({
  iconUrl: `img/pin-active.svg`,
  iconSize: [30, 30]
});

const MapInner = ({cityOffers, activeOfferId, mapType}) => {
  const map = RL.useMap();
  const location = getLocation(cityOffers[0].city.location, {isCityNeeded: true});
  map.setView(location.dest, location.zoom);

  const markers = cityOffers.map((offer) => <RL.Marker
    key={mapType === MapType.CITIES ? offer.id : nanoid(3)}
    position={getLocation(offer.location, {isCityNeeded: false})}
    icon={offer.id.toString() === activeOfferId ? ACTIVE_ICON : ICON}
  />);

  return (
    <React.Fragment>
      <RL.TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      {markers}
    </React.Fragment>
  );
};

MapInner.propTypes = {
  cityOffers: PropTypes.arrayOf(OfferProp),
  activeOfferId: PropTypes.string.isRequired,
  mapType: PropTypes.string.isRequired,
};

export default MapInner;
