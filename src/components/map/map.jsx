import React from 'react';
import PropTypes from 'prop-types';
import * as leaflet from 'leaflet';

import OfferCardProp from '../offer-card/offer-card.prop';

const ICON = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

export default class Map extends React.PureComponent {
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

  setPin(coords) {
    const marker = leaflet.marker(coords, {icon: ICON});
    this.markers.push(marker);
    marker.addTo(this.map);
  }

  componentDidUpdate() {
    const {offers} = this.props;

    this.markers.map((marker) => {
      marker.remove();
    });

    offers.map((offer) => {
      if (offer.coords) {
        this.setPin(offer.coords);
      }
    });
  }

  componentDidMount() {
    const {offers} = this.props;

    const city = [52.38333, 4.9];
    const zoom = 12;

    this.initMap(city, zoom);

    offers.map((offer) => {
      if (offer.coords) {
        this.setPin(offer.coords);
      }
    });
  }

  render() {
    return <section className={this.props.cardType + ` map`} id="map"/>;
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(OfferCardProp),
  cardType: PropTypes.string
};
