import React from 'react';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';
import {offersPropTypes, cityPropTypes} from '../../prop-types/prop-types';
import {connect} from 'react-redux';
import propTypes from 'prop-types';

const zoom = 12;
const icon = Leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this._map = null;
    this._markersGroup = null;
    this._renderMarker = this._renderMarker.bind(this);
  }

  _init() {
    this._map = Leaflet.map(`map`, {
      center: this.props.city.coordinates,
      zoom,
      zoomControl: false,
      marker: true
    });

    this._map.setView(this.props.city.coordinates, zoom);

    Leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this._map);

    this._markersGroup = Leaflet.layerGroup().addTo(this._map);
    this._addPins();
  }

  _addPins() {
    this._markersGroup.clearLayers();
    this.props.filteredOffers.forEach(this._renderMarker);
  }

  _renderMarker({coordinates}) {
    Leaflet
    .marker(coordinates, {icon})
    .addTo(this._markersGroup);

  }

  componentDidMount() {
    this._init();
  }

  componentDidUpdate() {
    this._addPins();
    this._map.setView(this.props.city.coordinates, zoom);
  }

  render() {
    return <section id="map" className={`${this.props.className} map`}></section>;
  }
}

const mapStateToProps = (state) => ({
  filteredOffers: state.filteredOffers,
  city: state.city
});

Map.propTypes = {
  filteredOffers: offersPropTypes.offers,
  city: cityPropTypes.isRequired,
  className: propTypes.string.isRequired
};

export {Map};
export default connect(mapStateToProps, null)(Map);
