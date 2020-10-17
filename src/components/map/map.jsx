import React from 'react';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';
import {offersPropTypes} from '../../prop-types/prop-types';
import propTypes from 'prop-types';

const city = [52.38333, 4.9];
const zoom = 12;
const icon = Leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this.props = props;
  }

  renderMarker(map, marker) {
    Leaflet
    .marker(marker, {icon})
    .addTo(map);
  }

  componentDidMount() {
    const offers = this.props.offers;

    const map = Leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(city, zoom);

    Leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    offers.forEach((offer) => {
      this.renderMarker(map, offer.coordinates);
    });
  }

  render() {
    return <section id="map" className={`${this.props.className} map`}></section>;
  }
}

Map.propTypes = {
  offers: offersPropTypes.offers,
  className: propTypes.string.isRequired
};

export default Map;
