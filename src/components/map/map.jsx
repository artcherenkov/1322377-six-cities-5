import React from 'react';
import PropTypes from 'prop-types';
import * as leaflet from 'leaflet';

import OfferCardProp from '../offer-card-view/offer-card.prop';
import {connect} from "react-redux";
import {getActiveOfferId, getCity} from "../../store/reducers/app-state/selectors";
import {MapType} from "../../const";

const ICON = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

const ACTIVE_ICON = leaflet.icon({
  iconUrl: `img/pin-active.svg`,
  iconSize: [30, 30]
});

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this.map = null;
    this.markers = [];
  }

  initMap(city, zoom) {
    this.map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
  }

  resetPins() {
    this.markers.map((marker) => {
      marker.remove();
    });
  }

  setPin(location, {isActive = false}) {
    const coords = Object.values(location).slice(0, 2);
    const marker = leaflet.marker(coords, {icon: isActive ? ACTIVE_ICON : ICON});
    this.markers.push(marker);
    marker.addTo(this.map);
  }

  setPins(offers, activeOfferId) {
    offers.map((offer) => {
      const {id} = offer;
      const isActive = id.toString() === activeOfferId;
      this.setPin(offer.location, {isActive});
    });
  }

  componentDidUpdate() {
    const {offers, activeOfferId, offerId} = this.props;
    const {location} = offers[0].city;

    const city = Object.values(location).slice(0, 2);
    const zoom = Object.values(location).slice(2).flat();

    this.map.setView(new leaflet.LatLng(...city), zoom);

    this.resetPins();
    this.setPins(offers, activeOfferId || offerId);
  }

  componentDidMount() {
    const {offers, activeOfferId, offerId} = this.props;
    const {location} = offers[0].city;

    const city = Object.values(location).slice(0, 2);
    const zoom = Object.values(location).slice(2).flat();

    this.initMap(city, zoom);
    this.setPins(offers, activeOfferId || offerId);
  }

  render() {
    return <section className={this.props.cardType + ` map`} id="map"/>;
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(OfferCardProp).isRequired,
  offerId: PropTypes.string,
  cardType: PropTypes.string.isRequired,
  activeOfferId: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  activeOfferId: getActiveOfferId(state),
});

export {Map};
export default connect(mapStateToProps)(Map);
