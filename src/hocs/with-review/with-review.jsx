import React from 'react';
import {sendReview} from '../../store/api-actions';
import {connect} from 'react-redux';


const withReview = (Component) => {
  class WithReview extends React.PureComponent {
    constructor() {
      super();

      this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit(evt, form) {
      const formData = new FormData(form);

      this.props.sendReview(this.props.offerId, {
        rating: formData.get(`rating`),
        comment: formData.get(`review`),
      });

      evt.target.reset(); // reset form
    }

    render() {
      return <Component onSubmit={this._handleSubmit}/>;
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    sendReview(id, review) {
      return dispatch(sendReview(id, review));
    }
  });

  return connect(null, mapDispatchToProps)(WithReview);
};

export default withReview;
