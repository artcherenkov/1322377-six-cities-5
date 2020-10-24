import React from 'react';
import PropTypes from 'prop-types';
import * as leaflet from 'leaflet';

import OfferCardProp from '../offer-card/offer-card.prop';
import {connect} from "react-redux";

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

  setPin(coords) {
    const marker = leaflet.marker(coords, {icon: ICON});
    this.markers.push(marker);
    marker.addTo(this.map);
  }

  setActivePin(coords) {
    const marker = leaflet.marker(coords, {icon: ACTIVE_ICON});
    this.markers.push(marker);
    marker.addTo(this.map);
  }

  setPins(offers, activeOfferId) {
    offers.map((offer) => {
      if (offer.coords) {
        if (offer.id === activeOfferId) {
          this.setActivePin(offer.coords);
        } else {
          this.setPin(offer.coords);
        }
      }
    });
  }

  componentDidUpdate() {
    const {offers, activeOfferId} = this.props;

    this.resetPins();
    this.setPins(offers, activeOfferId);
  }

  componentDidMount() {
    const {offers, activeOfferId} = this.props;

    const city = [52.38333, 4.9];
    const zoom = 12;

    this.initMap(city, zoom);
    this.setPins(offers, activeOfferId);
  }

  render() {
    return <section className={this.props.cardType + ` map`} id="map"/>;
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(OfferCardProp).isRequired,
  cardType: PropTypes.string.isRequired,
  activeOfferId: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  activeOfferId: state.activeOfferId
});

export {Map};
export default connect(mapStateToProps)(Map);
