
import PropTypes, {arrayOf, exact} from 'prop-types';

export const offerPropTypes = {
  offer: PropTypes.exact({
    id: PropTypes.number.isRequired,
    images: arrayOf(PropTypes.string).isRequired,
    mark: PropTypes.string.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    entire: PropTypes.string.isRequired,
    bedrooms: PropTypes.string.isRequired,
    adults: PropTypes.string.isRequired,
    price: PropTypes.exact({
      value: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired
    }),
    inside: arrayOf(PropTypes.string).isRequired,
    host: PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      text: arrayOf(PropTypes.string.isRequired).isRequired
    }),
    reviews: arrayOf(PropTypes.number.isRequired).isRequired,
    location: PropTypes.string.isRequired,
    coordinates: arrayOf(PropTypes.string.isRequired).isRequired
  })
};

export const offersPropTypes = {
  offers: arrayOf(offerPropTypes.offer)
};

export const reviewsPropTypes = {
  reviews: arrayOf(exact({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
  })).isRequired
};

export const placesCountPropTypes = {
  placesCount: PropTypes.number.isRequired,
};

