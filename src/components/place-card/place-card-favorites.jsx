import React from 'react';
import PlaceCard from './place-card';


const PlaceCardFavorites = (props) => {

  return (
    <PlaceCard
      classArticle={`favorites__card`}
      classImageWrapper={`favorites__image-wrapper`}
      imageWidth={150}
      imageHeight={110}
      {...props} />
  );
};

export default PlaceCardFavorites;