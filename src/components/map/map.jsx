import React from 'react';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';
import {offersPropTypes, offerPropTypes} from '../../prop-types/prop-types';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getActiveCityName, getActiveCityCoords, getHoveredCard} from '../../store/reducers/user-interface/selectors';
import {getCurrentOffers} from '../../store/combined-selectors';
import {CardType} from '../../const';

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

    const offerIdForCompare =
      (this.props.type === CardType.NEARBY)
        ? this.props.activeOffer.id
        : this.props.hoveredCard;

    const icon = (id === offerIdForCompare) ? this._iconActive : this._iconDefault;

    Leaflet
    .marker(coordinates, {icon})
    .addTo(this._markersGroup);

  }

  _getCoordinates() {
    return this.props.activeOffer
      ? this.props.activeOffer.coordinates
      : this.props.activeCityCoords;
  }

  _getOffers() {
    if (this.props.type === CardType.NEARBY) {
      // Сначала рендерим пустой массив, потом асинхронно подгрузятся ближайшие офферы
      // Компонент перерендерится и их отрисуем
      return (this.props.activeNearby === null
        ? []
        : [...this.props.activeNearby, this.props.activeOffer]);
    } else {
      return this.props.offers;
    }
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

Map.propTypes = {
  offers: offersPropTypes.offers,
  activeOffer: offerPropTypes.offer,
  activeCityName: PropTypes.string.isRequired,
  activeCityCoords: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
  hoveredCard: PropTypes.number.isRequired,
  activeNearby: offersPropTypes.offers,
  type: PropTypes.string,
};

const mapStateToProps = (state) => ({
  offers: getCurrentOffers(state),
  hoveredCard: getHoveredCard(state),
  activeCityName: getActiveCityName(state),
  activeCityCoords: getActiveCityCoords(state),
  activeNearby: state.INTERFACE.activeNearby,
});

export {Map};
export default connect(mapStateToProps)(Map);
