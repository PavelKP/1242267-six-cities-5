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
        isLoading: false,
      };
    }

    componentDidUpdate() {
      this._validate(this.state);
    }

    _validate(state) {
      this.setState({buttonDisabled: !(
        state.text.trim().length >= 50
        && state.text.length <= 300
        && state.rating.length > 0
        && this.state.isLoading === false
      )});
    }

    _unlock() {
      this.setState({
        buttonDisabled: true,
        startDisabled: false,
        textAreaDisabled: false});
    }

    _reset() {
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
      this.setState({
        textAreaDisabled: true,
        startDisabled: true,
        buttonDisabled: true,
        isLoading: true,
      });

      this.props.sendReview(this.props.offerId, {
        rating: this.state.rating,
        comment: this.state.text,
      })
      .then(() => {
        this._unlock();
        this._reset();
        this.setState({isLoading: false});
      })
      .catch((err) => {
        this._unlock();
        this._validate(this.state);

        this.setState({error: true, errorText: err.message});
        this.setState({isLoading: false});
      });
    }

    render() {
      return <Component
        state={this.state}
        onTextInputChange={this.handleTextInput}
        onRatingChange={this.handleRatingChange}
        onSubmit={this.handleSubmit}/>;
    }
  }

  WithReview.propTypes = {
    sendReview: PropTypes.func.isRequired,
    offerId: PropTypes.number.isRequired,
  };

  const mapDispatchToProps = (dispatch) => ({
    sendReview(id, review) {
      return dispatch(sendReview(id, review));
    }
  });

  return connect(null, mapDispatchToProps)(WithReview);
};

export {withReview};
export default withReview;
