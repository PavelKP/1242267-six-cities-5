
import PropTypes, {arrayOf, exact} from 'prop-types';

export const cityPropTypes = exact({
  coordinates: arrayOf(PropTypes.number.isRequired).isRequired,
  name: PropTypes.string.isRequired,
  zoom: PropTypes.number.isRequired,
});

export const offerPropTypes = {
  offer: exact({
    adults: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    city: cityPropTypes,
    coordinates: arrayOf(PropTypes.number.isRequired).isRequired,
    description: arrayOf(PropTypes.string).isRequired,
    entire: PropTypes.string.isRequired,
    host: exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired,
    }),
    id: PropTypes.number.isRequired,
    images: arrayOf(PropTypes.string).isRequired,
    inside: arrayOf(PropTypes.string).isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    preview: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    zoom: PropTypes.number.isRequired,
  })
};

export const offersPropTypes = {
  offers: arrayOf(offerPropTypes.offer)
};

export const oneReviewPropTypes = {
  review: exact({
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    user: exact({
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  }).isRequired
};

export const reviewsPropTypes = {
  reviews: arrayOf(oneReviewPropTypes.review)
};
