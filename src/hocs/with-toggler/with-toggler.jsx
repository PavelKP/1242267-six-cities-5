import React from 'react';

const withToggler = (Component) => {
  return class WithToggler extends React.PureComponent {
    constructor() {
      super();

      this.state = {
        opened: false
      };

      this._togglerHandler = this._togglerHandler.bind(this);
    }

    _togglerHandler(evt) {
      evt.preventDefault();
      this.setState((state) => ({
        opened: !state.opened
      }));
    }

    render() {
      return <Component togglerState = {this.state.opened} onTogglerClick={this._togglerHandler} />;
    }
  };
};

export {withToggler};
export default withToggler;
