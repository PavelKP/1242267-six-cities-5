import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import {withToggler} from './with-toggler';

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

const MockComponentWrapped = withToggler(MockComponent);

it(`withToggler is rendered correctly`, () => {

  const tree = renderer.create(
      <MockComponentWrapped
        togglerState={true}
        onTogglerClick={()=>{}}
      />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});

MockComponent.propTypes = {
  children: PropTypes.node,
};
