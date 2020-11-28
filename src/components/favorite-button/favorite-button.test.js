import React from 'react';
import renderer from 'react-test-renderer';
import {FavoriteButton} from './favorite-button';
import {offers} from '../../__mocks__/mock-offers';

export const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`,
};

describe(`<FavoriteButton /> render`, () => {

  it(`Should FavoriteButton render correctly`, () => {
    const tree = renderer.create(
        <FavoriteButton
          offers={offers}
          offerId={1}
          setFavoriteStatusDispatch={()=>{}}
          redirectToRoute={()=>{}}
          authorizationStatus={AuthorizationStatus.AUTH}
          buttonClass={`property__bookmark-button`}
          iconClass={`property__bookmark-icon`}
          activeClass={`property__bookmark-button--active`}
          imageWidth={31}
          imageHeight={33}
        />)
        .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
