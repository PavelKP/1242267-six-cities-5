import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {PlaceCard} from './place-card';
import {offers} from '../../__mocks__/mock-offers';

configure({adapter: new Adapter()});

it(`Should place card react on mouse enter/leave`, () => {
  const onCardMouseOver = jest.fn();

  const wrapper = shallow(
      <PlaceCard
        offer = {offers[0]}
        onCardMouseOver = {onCardMouseOver}
        classArticle={`fake`}
        classImageWrapper={`fake`}
        imageWidth={260}
        imageHeight={200}
      />);

  const card = wrapper.find(`.place-card`);
  card.simulate(`mouseEnter`, {preventDefault: ()=>{}});
  card.simulate(`mouseLeave`, {preventDefault: ()=>{}});

  expect(onCardMouseOver).toHaveBeenCalledTimes(2);
});
