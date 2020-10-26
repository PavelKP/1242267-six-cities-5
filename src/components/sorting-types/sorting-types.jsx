import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

const filterTypeToName = new Map([
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
    const filter = evt.target.dataset.filterType;
  }

  render() {
    const activeFilter = this.props.activeFilter;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0" onClick={this._openMenuHandler}>
          {activeFilter}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom
        ${this.state.opened && `places__options--opened`}`}
        onClick={this._menuItemHandler}>
          {[...filterTypeToName].map(([type, title], i) => {
            return (
              <li className={`places__option
                ${activeFilter === type
                ? `places__option--active`
                : ``}`}
              tabIndex="0"
              key={`menu-item-${i}`}
              data-filter-type={type}>
                {title}
              </li>);
          })}
        </ul>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  activeFilter: state.activeFilter
});

const mapDispatchToProps = (dispatch) => {

};

export {SortingTypes};
export default connect(mapStateToProps, mapDispatchToProps)(SortingTypes);
