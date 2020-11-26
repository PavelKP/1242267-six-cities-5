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
        textAreaDisabled: false,
        startDisabled: false,
        text: ``,
        rating: ``,
        error: false,
        errorText: ``,
      };
    }

    validate(state) {
      this.setState({buttonDisabled: !(
        state.text.trim().length >= 50
        && state.text.length <= 300
        && state.rating.length > 0
      )});
    }

    unlock() {
      this.setState({
        buttonDisabled: true,
        startDisabled: false,
        textAreaDisabled: false});
    }

    reset() {
      this.setState({
        text: ``,
        rating: ``,
        buttonDisabled: true});
    }

    handleTextInput(evt) {
      this.setState({text: evt.target.value});
    }

    handleRatingChange(evt) {
      this.setState({rating: evt.target.value});
    }

    handleSubmit(evt) {
      evt.preventDefault();
      this.setState({textAreaDisabled: true, startDisabled: true, buttonDisabled: true});

      this.props.sendReview(this.props.offerId, {
        rating: this.state.rating,
        comment: this.state.text,
      })
      .then(() => {
        this.unlock();
        this.reset();
      })
      .catch((err) => {
        this.unlock();
        this.validate(this.state);

        this.setState({error: true, errorText: err.message});
      });
    }

    componentDidUpdate() {
      this.validate(this.state);
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

export {withReview};
export default withReview;
