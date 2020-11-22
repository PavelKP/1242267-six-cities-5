import React from 'react';
import {sendReview} from '../../store/api-actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


const withReview = (Component) => {
  class WithReview extends React.PureComponent {
    constructor() {
      super();

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleTextInput = this.handleTextInput.bind(this);
      this.handleRatingChange = this.handleRatingChange.bind(this);

      this.state = {
        buttonDisabled: true,
        text: ``,
        rating: ``,
      };
    }

    validate(state) {
      this.setState({buttonDisabled: !(
        state.text.trim().length >= 50
        && state.text.length <= 300
        && state.rating.length > 0
      )});
    }

    handleTextInput(evt) {
      this.setState({text: evt.target.value});
      this.validate(this.state);
    }

    handleRatingChange(evt) {
      this.setState({rating: evt.target.value});
      this.validate(this.state);
    }

    handleSubmit(evt) {
      evt.preventDefault();
      this.props.sendReview(this.props.offerId, {
        rating: this.state.rating,
        comment: this.state.text,
      });

      this.setState({text: ``, rating: ``}); // reset form
    }

    render() {
      return <Component
        state={this.state}
        onTextInputChange={this.handleTextInput}
        onRatingChange={this.handleRatingChange}
        onSubmit={this.handleSubmit}/>;
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    sendReview(id, review) {
      return dispatch(sendReview(id, review));
    }
  });

  WithReview.propTypes = {
    sendReview: PropTypes.func.isRequired,
    offerId: PropTypes.number.isRequired,
  };

  return connect(null, mapDispatchToProps)(WithReview);
};

export default withReview;
