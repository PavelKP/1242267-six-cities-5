const Adapter = {
  offerSingleToClient(offer) {
    const adaptedOffer = Object.assign({}, offer, {
      isBookmarked: offer.is_favorite,
      isPremium: offer.is_premium,
      entire: offer.type,
      adults: offer.max_adults,
      inside: offer.goods,
      host: {
        avatar: offer.host.avatar_url,
        id: offer.host.id,
        isPro: offer.host.is_pro,
        name: offer.host.name,
      },
      city: {
        name: offer.city.name,
        coordinates: [offer.city.location.latitude, offer.city.location.longitude],
        zoom: offer.city.location.zoom,
      },
      coordinates: [offer.location.latitude, offer.location.longitude],
      description: [offer.description],
      zoom: offer.location.zoom,
      preview: offer.preview_image,
    });

    delete adaptedOffer.is_favorite;
    delete adaptedOffer.is_premium;
    delete adaptedOffer.type;
    delete adaptedOffer.max_adults;
    delete adaptedOffer.goods;
    delete adaptedOffer.location;
    delete adaptedOffer.preview_image;

    return adaptedOffer;
  },
  offersToClient(offers) {
    return offers.map((offer) => this.offerSingleToClient(offer));
  },
  cityToClient(city) {
    return Object.assign({}, {
      name: city.name,
      coordinates: [city.location.latitude, city.location.longitude],
      zoom: city.location.zoom,
    });
  },
  reviewsToClient(reviews) {
    return reviews.map((review) => {
      return Object.assign({}, review, {
        user: {
          avatar: review.user.avatar_url,
          id: review.user.id,
          isPro: review.user.is_pro,
          name: review.user.name,
        }
      });
    });
  },
  userDataToClient(userData) {
    return {
      avatarUrl: userData.avatar_url,
      email: userData.email,
    };
  }
};

export default Adapter;
