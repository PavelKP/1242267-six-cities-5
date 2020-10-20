import React from 'react';

const withState = (Component) => {
  return class WithState extends React.PureComponent {
    constructor() {
      super();

      this.state = {
        rating: null,
        comment: null
      };

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
      evt.preventDefault();
      this.setState({
        rating: evt.target.rating.value,
        comment: evt.target.review.value
      });

      evt.target.reset(); // reset form
    }

    render() {
      return <Component onSubmit={this.handleSubmit}/>;
    }
  };
};

export default withState;
