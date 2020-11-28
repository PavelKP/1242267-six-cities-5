import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {authorize, fetchOfferList} from '../../store/api-actions';
import PropTypes from 'prop-types';

const withAuthorization = (Component) => {
  class WithAuthorization extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isValid: true,
      };

      this.handleFromSubmit = this.handleFromSubmit.bind(this);
      this.formRef = React.createRef();
    }

    _validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    handleFromSubmit(evt) {
      evt.preventDefault();
      const formData = new FormData(this.formRef.current);
      const email = formData.get(`email`);

      if (this._validateEmail(email)) {
        this.props.authorize({
          email,
          password: formData.get(`password`),
        })
        .then(() => {
          this.props.fetchOfferList();
        });
      } else {
        this.setState(({isValid: false}));
      }
    }

    render() {
      return <Component onFormSubmit={this.handleFromSubmit}
        formRef={this.formRef}
        isValid={this.state.isValid}/>;
    }
  }

  WithAuthorization.propTypes = PropTypes.func.isRequired;
  return WithAuthorization;

};

const mapDispatchToProps = (dispatch) => ({
  authorize(userData) {
    return dispatch(authorize(userData));
  },
  fetchOfferList() {
    return dispatch(fetchOfferList());
  }
});

const composedWithAuthorization = compose(
    connect(null, mapDispatchToProps),
    withAuthorization
);

export {withAuthorization};
export default composedWithAuthorization;
