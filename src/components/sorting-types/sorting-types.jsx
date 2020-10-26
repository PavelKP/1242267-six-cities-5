import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionCreator} from '../store/action';

const sortingTypeToName = new Map([
  [`popular`, `Popular`],
  [`price-to-high`, `Price: low to high`],
  [`price-to-low`, `Price: high to low`],
  [`top-rated-first`, `Top rated first`],
]);

class SortingTypes extends PureComponent {
  constructor() {
    super();

    this.state = {
      opened: false
    };

    this._openMenuHandler = this._openMenuHandler.bind(this);
    this._menuItemHandler = this._menuItemHandler.bind(this);
  }

  _openMenuHandler(evt) {
    evt.preventDefault();
    this.setState((state) => ({
      opened: !state.opened
    }));
  }

  _menuItemHandler(evt) {
    evt.preventDefault();
    const sorting = evt.target.dataset.sortingType;
    this.props.setActiveSorting(sorting);
    this.setState((state) => ({
      opened: !state.opened
    }));
  }

  render() {
    const activeSorting = this.props.activeSorting;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex="0" onClick={this._openMenuHandler}>
          {sortingTypeToName.get(activeSorting)}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom
        ${this.state.opened && `places__options--opened`}`}
        onClick={this._menuItemHandler}>
          {[...sortingTypeToName].map(([type, title], i) => {
            return (
              <li className={`places__option
                ${activeSorting === type
                ? `places__option--active`
                : ``}`}
              tabIndex="0"
              key={`menu-item-${i}`}
              data-sorting-type={type}>
                {title}
              </li>);
          })}
        </ul>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  activeSorting: state.activeSorting
});

const mapDispatchToProps = (dispatch) => ({
  setActiveSorting(sortingName) {
    dispatch(ActionCreator.setActiveSorting(sortingName));
  }
});

SortingTypes.propTypes = {
  setActiveSorting: PropTypes.func.isRequired,
  activeSorting: PropTypes.string.isRequired,
};

export {SortingTypes};
export default connect(mapStateToProps, mapDispatchToProps)(SortingTypes);
