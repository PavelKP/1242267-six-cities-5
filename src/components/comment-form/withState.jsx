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

    handleSubmit(evt, form) {
      evt.preventDefault();
      const formData = new FormData(form);

      this.setState({
        rating: formData.get(`rating`),
        comment: formData.get(`review`),
      });

      evt.target.reset(); // reset form
    }

    render() {
      return <Component onSubmit={this.handleSubmit}/>;
    }
  };
};

export default withState;
