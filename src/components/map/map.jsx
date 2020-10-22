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
  }

  _renderMarker(map, coordinates) {
    Leaflet
    .marker(coordinates, {icon})
    .addTo(map);
  }

  _renderMap() {
    const {filteredOffers, city} = this.props;
    const coordinates = city.coordinates;

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

    filteredOffers.forEach((offer) => {
      this._renderMarker(this._map, offer.coordinates);
    });
  }

  componentDidUpdate() {
    this._map.remove();
    this._renderMap();
  }

  componentDidMount() {
    this._renderMap();
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
