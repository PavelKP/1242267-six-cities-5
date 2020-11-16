import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {authorize} from '../../store/api-actions';
import PropTypes from 'prop-types';

const withAuthorization = (Component) => {
  class WithAuthorization extends React.PureComponent {
    constructor(props) {
      super(props);

      this._handleFromSubmit = this._handleFromSubmit.bind(this);
      this._formRef = React.createRef();
    }

    _handleFromSubmit(evt) {
      evt.preventDefault();
      const formData = new FormData(this._formRef.current);
      this.props.authorize({
        email: formData.get(`email`),
        password: formData.get(`password`),
      });
    }

    render() {
      return <Component onFormSubmit={this._handleFromSubmit} formRef={this._formRef}/>;
    }
  }

  WithAuthorization.propTypes = PropTypes.func.isRequired;
  return WithAuthorization;

};

const mapDispatchToProps = (dispatch) => ({
  authorize(userData) {
    return dispatch(authorize(userData));
  }
});

const composedWithAuthorization = compose(
    connect(null, mapDispatchToProps),
    withAuthorization
);

export {withAuthorization};
export default composedWithAuthorization;
