import React from 'react';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';
import {offersPropTypes, offerPropTypes} from '../../prop-types/prop-types';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getActiveCityName, getActiveCityCoords, getHoveredCard} from '../../store/reducers/user-interface/selectors';


const zoom = 12;

const getIcon = (path) => {
  return (Leaflet.icon({
    iconUrl: path,
    iconSize: [30, 30]
  }));
};

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this._map = null;
    this._markersGroup = null;
    this._renderMarker = this._renderMarker.bind(this);
    this._iconDefault = getIcon(`img/pin.svg`);
    this._iconActive = getIcon(`img/pin-active.svg`);
  }

  _init() {
    const coordinates = this._getCoordinates();

    this._map = Leaflet.map(`map`, {
      center: coordinates,
      zoom,
      zoomControl: false,
      marker: true
    });

    this._map.setView(coordinates, zoom);

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
    this._getOffers().forEach(this._renderMarker);
  }

  _renderMarker(offer) {
    const {coordinates, id} = offer;
    const icon = (id === this.props.hoveredCard) ? this._iconActive : this._iconDefault;

    Leaflet
    .marker(coordinates, {icon})
    .addTo(this._markersGroup);

  }

  _getCoordinates() {
    return this.props.currentOffer
      ? this.props.currentOffer.coordinates
      : this.props.activeCityCoords;
  }

  _getOffers() {
    const city = this.props.currentOffer
      ? this.props.currentOffer.location
      : this.props.activeCityName;

    return this.props.offers.filter(({location}) => location === city);
  }

  componentDidMount() {
    this._init();
  }

  componentDidUpdate() {
    this._addPins();
    this._map.setView(this._getCoordinates(), zoom);
  }

  render() {
    return <section id="map" className={`${this.props.className} map`}></section>;
  }
}

const mapStateToProps = (state) => ({
  offers: state.DATA.offers,
  hoveredCard: getHoveredCard(state),
  activeCityName: getActiveCityName(state),
  activeCityCoords: getActiveCityCoords(state),
});

Map.propTypes = {
  offers: offersPropTypes.offers,
  currentOffer: offerPropTypes.offer,
  activeCityName: PropTypes.string.isRequired,
  activeCityCoords: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
  hoveredCard: PropTypes.number.isRequired,
};

export {Map};
export default connect(mapStateToProps)(Map);
