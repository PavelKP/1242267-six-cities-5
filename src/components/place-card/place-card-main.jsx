import React from 'react';
import PlaceCard from './place-card';


const PlaceCardMain = (props) => {

  return (
    <PlaceCard
      classArticle={`cities__place-card`}
      classImageWrapper={`cities__image-wrapper`}
      {...props} />
  );
};

export default PlaceCardMain;
