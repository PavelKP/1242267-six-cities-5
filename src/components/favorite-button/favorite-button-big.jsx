import React from 'react';
import FavoriteButton from './favorite-button';

const FavoriteButtonBig = (props) => {

  return <FavoriteButton
    {...props}
    buttonClass={`property__bookmark-button`}
    iconClass={`property__bookmark-icon`}
    activeClass={`property__bookmark-button--active`}
    imageWidth={31}
    imageHeight={33}/>;
};

export default FavoriteButtonBig;
