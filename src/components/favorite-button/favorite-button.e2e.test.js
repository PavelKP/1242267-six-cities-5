import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {FavoriteButton} from './favorite-button';
import {offers} from '../../__mocks__/mock-offers';
import {AuthorizationStatus} from '../../const';

configure({adapter: new Adapter()});

describe(`Favorite button interactive`, () => {

  it(`Should favorite button be pressed by authorized user`, () => {
    const setFavoriteStatusDispatch = jest.fn();
    const redirectToRoute = jest.fn();

    const wrapper = shallow(
        <FavoriteButton
          offers={offers}
          offerId={1}
          setFavoriteStatusDispatch={setFavoriteStatusDispatch}
          redirectToRoute={redirectToRoute}
          authorizationStatus={AuthorizationStatus.AUTH}
          buttonClass={`property__bookmark-button`}
          iconClass={`property__bookmark-icon`}
          activeClass={`property__bookmark-button--active`}
          imageWidth={31}
          imageHeight={33}
        />);

    const favoriteButton = wrapper.find(`.button`);
    favoriteButton.simulate(`click`, {preventDefault: ()=>{}});

    expect(setFavoriteStatusDispatch).toHaveBeenCalledTimes(1);
    expect(redirectToRoute).toHaveBeenCalledTimes(0);
  });

  it(`Should favorite button be pressed by unauthorized user`, () => {
    const setFavoriteStatusDispatch = jest.fn();
    const redirectToRoute = jest.fn();

    const wrapper = shallow(
        <FavoriteButton
          offers={offers}
          offerId={1}
          setFavoriteStatusDispatch={setFavoriteStatusDispatch}
          redirectToRoute={redirectToRoute}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          buttonClass={`property__bookmark-button`}
          iconClass={`property__bookmark-icon`}
          activeClass={`property__bookmark-button--active`}
          imageWidth={31}
          imageHeight={33}
        />);

    const favoriteButton = wrapper.find(`.button`);
    favoriteButton.simulate(`click`, {preventDefault: ()=>{}});

    expect(setFavoriteStatusDispatch).toHaveBeenCalledTimes(0);
    expect(redirectToRoute).toHaveBeenCalledTimes(1);
  });
});
