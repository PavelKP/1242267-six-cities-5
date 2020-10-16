import React from 'react';
import PlaceCard from './place-card';


const PlaceCardNearby = (props) => {

  return (
    <PlaceCard
      classArticle={`near-places__card`}
      classImageWrapper={`near-places__image-wrapper`}
      {...props} />
  );
};

export default PlaceCardNearby;
