import React from 'react';
import FavoriteButton from './favorite-button';

const FavoriteButtonSmall = (props) => {

  return <FavoriteButton
    {...props}
    buttonClass={`place-card__bookmark-button`}
    iconClass={`place-card__bookmark-icon`}
    activeClass={`place-card__bookmark-button--active`}/>;
};

export default FavoriteButtonSmall;
