import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';

const sortingTypeToName = new Map([
  [`popular`, `Popular`],
  [`price-to-high`, `Price: low to high`],
  [`price-to-low`, `Price: high to low`],
  [`top-rated-first`, `Top rated first`],
]);

const SortingTypes = (props) => {
  const {togglerState, onTogglerClick, setActiveSorting, activeSorting} = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0" onClick={onTogglerClick}>
        {sortingTypeToName.get(activeSorting)}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom
        ${togglerState ? `places__options--opened` : ``}`}
      onClick={(evt) => {
        const sorting = evt.target.dataset.sortingType;
        setActiveSorting(sorting);
        onTogglerClick(evt);
      }}>
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
};

SortingTypes.propTypes = {
  setActiveSorting: PropTypes.func.isRequired,
  activeSorting: PropTypes.string.isRequired,
  togglerState: PropTypes.bool.isRequired,
  onTogglerClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({INTERFACE}) => ({
  activeSorting: INTERFACE.activeSorting
});

const mapDispatchToProps = (dispatch) => ({
  setActiveSorting(sortingName) {
    dispatch(ActionCreator.setActiveSorting(sortingName));
  }
});

export {SortingTypes};
export default connect(mapStateToProps, mapDispatchToProps)(SortingTypes);
