import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import {withAuthorization} from './with-authorization';

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

const MockComponentWrapped = withAuthorization(MockComponent);

it(`withAuthorization is rendered correctly`, () => {
  const tree = renderer.create(
      <MockComponentWrapped
        authorize={()=>{}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

MockComponent.propTypes = {
  children: PropTypes.node,
};
